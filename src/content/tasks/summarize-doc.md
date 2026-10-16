---
task_id: summarize-doc
lang: zh-Hans
indices: {prompt: 5, hassle: 5, risk: 1}
paths:
  - {tier: chat, tool: doubao, region: cn, verified: pending}
  - {tier: chat, tool: yuanbao, region: cn, verified: pending}
domains: [办公]
type: chat
last_tested: pending
related: [explain-contract, agent-research-report]
---

# 总结长文档

**能做什么**：几十页的报告、论文、合同，几分钟变成重点摘要。支持 PDF、Word、网页链接。
**要多久**：2 分钟。**要花钱吗**：不要。

| 一句话指数 | 折腾指数 | 风险指数 |
|---|---|---|
| ★★★★★ 一句话就成 | ★☆☆☆☆ 零安装 | ★☆☆☆☆ 别拿摘要当唯一依据 |

## 怎么做

### 用手机/电脑里的 [豆包](https://www.doubao.com/chat/)（或 [元宝](https://yuanbao.tencent.com/)）

1. 打开豆包，点 **＋** → **文件**，选中要总结的文档
2. 发送这句话：

> 总结这份文档：用 10 条以内的要点讲清楚它说了什么。最后单独列出：文档里的数字、日期、金额，一共有哪些。

3. 想要不同深度，换一句话：
- "用一段话讲清楚，给完全没看过的人看"
- "只提取跟我有关的：我在找 {{你的关键词}}"
- "把里面最可疑/需要小心的 3 处指出来"

**没有豆包？** [点此打开网页版](https://www.doubao.com/chat/)，或应用商店搜"豆包"装一个，手机号注册，1 分钟搞定。

## 做不好的

- 扫描件是图片不是文字的 PDF，先说"把这份扫描件里的文字读出来"，读对了再总结
- 摘要会丢细节：**要签字、要付钱的文档，摘要只能当导航，正文必须自己读**
- 数据、法条、引用原文，让 AI 给你定位到第几页，别直接抄

## 隐私提醒

文档会上传到服务器。有公司保密要求的内部文件别传，自己看本地的。

## 总结完了？

试试 → **解释合同/账单** · **智能体帮我调研出报告**
