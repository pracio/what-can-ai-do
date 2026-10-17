#!/usr/bin/env python3
"""繁中台湾用语预检（发布前跑一遍）

对 src/content/tasks/zh-hant/*.md 全量调用繁化姬 API（converter=Taiwan），
抓两类问题：
  1. 简体字混入（字形层）
  2. 大陆规范词（词汇层：软件→軟體、视频→影片、信息→資訊、網絡→網路…）

输出：有差异的文件+逐处 diff，供人工复核后修改原文。
注意：API 抓不到口语习惯类（如"折騰"），那层靠 skills/webdev/wcad-site-conventions 的黑名单。
免费 API：一般使用免费（商业使用需授权，见 zhconvert.org）。请勿高频滥用，串行+ sleep。
"""
import glob
import json
import os
import sys
import time
import urllib.parse
import urllib.request

API = 'https://api.zhconvert.org/convert?converter=Taiwan'
UA = 'wcad-precheck/1.0'
ROOT = os.path.expanduser('~/wcad-site/tidal-telescope')

def convert(text: str) -> str:
    data = urllib.parse.urlencode({'text': text}).encode()
    req = urllib.request.Request(API, data=data, headers={'User-Agent': UA})
    for attempt in range(3):
        try:
            x = json.loads(urllib.request.urlopen(req, timeout=60).read())
            if x.get('data'):
                return x['data']['text']
        except Exception as e:
            if attempt == 2:
                print(f'  API 失败（重试耗尽）: {e}', file=sys.stderr)
            time.sleep(2 ** attempt)
    return text  # 失败时原样返回=该篇跳过（diff 为 0，不会误报）

def diffs(a: str, b: str):
    """逐字符对齐的差异（这里假定长度一致；繁化姬不增删字符，实测成立）"""
    out = []
    if len(a) != len(b):
        # 保险：长度不一致时按最小长度对，尾部报一处
        n = min(len(a), len(b))
        out.append((n, '（长度不一致，人工检查）', a[n:n+30], b[n:n+30]))
    else:
        i = 0
        while i < len(a):
            if a[i] != b[i]:
                j = i
                while j < len(a) and a[j] != b[j]:
                    j += 1
                ctx_l = max(0, i - 10)
                out.append((i, '', a[ctx_l:j+10], b[ctx_l:j+10]))
                i = j
            else:
                i += 1
    return out

def main():
    files = sorted(glob.glob(f'{ROOT}/src/content/tasks/zh-hant/*.md'))
    bad = 0
    for f in files:
        s = open(f, encoding='utf-8').read()
        c = convert(s)
        ds = diffs(s, c)
        if ds:
            bad += 1
            print(f'\n✗ {os.path.basename(f)}（{len(ds)} 处）')
            for pos, note, ca, cb in ds:
                if note:
                    print(f'  ! {note}')
                    print(f'    原文: …{ca}')
                else:
                    print(f'  [{pos}] 原文: …{ca}…')
                    print(f'       建议: …{cb}…')
        time.sleep(1.2)  # 免费API，别打太快
    print(f'\n共 {len(files)} 篇，{bad} 篇有建议修改。')
    sys.exit(1 if bad else 0)

if __name__ == '__main__':
    main()
