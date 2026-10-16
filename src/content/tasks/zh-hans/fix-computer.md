---
task_id: fix-computer
lang: zh-Hans
indices: {prompt: 4, hassle: 2, risk: 3}
paths:
  - {tier: chat, tool: doubao, region: cn, verified: pending}
  - {tier: agent, tool: workbuddy, region: cn, verified: pending}
domains: [技术]
type: chat
last_tested: pending
related: [diy-tool, organize-files]
title: "AI 能帮你排查电脑问题"
tagline: "报错截图发过去，八成是设置"
accent: "#94a3b8"
accent2: "#cbd5e1"
icon: fix-computer
order: 8
steps:
  - n: "1"
    text: "手机上打开 {{doubao}} 或 {{yuanbao}}，报错截图一起发，附这段话："
    prompt: "我的电脑出了问题。1) 先根据截图/描述判断可能的原因，按可能性排序；2) 给我排查步骤，每步说清楚：点什么、预期看到什么、怎么判断这步有没有解决；3) 区分\"我自己能做的\"和\"需要送修的\"；4) 别让我下载来路不明的\"修复工具\"。"
  - n: "2"
    text: "按步骤反馈结果，它会修正判断"
  - n: "3"
    text: "硬件坏了（异响/进水）直接送修别折腾"
indicesText:
  prompt: "截图+1句"
  hassle: "要动手试"
  risk: "别乱下工具"
---

# 电脑出问题，先问 AI 再花钱

**能做什么**：蓝屏、卡顿、软件报错、打印机失联——把报错截图/异常描述发给 AI，它能给出排查步骤。很多"电脑坏了"其实只是一个设置问题。
**要多久**：5-20 分钟。**要花钱吗**：不要（省下的上门维修费几百起）。
**关键技巧**：报错信息别翻译别摘抄，**原样截图发过去**。

## 怎么做

### 用 [豆包](https://www.doubao.com/chat/) 或 [元宝](https://yuanbao.tencent.com/)

1. 把这段话和报错截图一起发：

> 我的电脑出了问题。1) 先根据截图/描述判断可能的 cause，按可能性排序；2) 给我排查步骤，每步说清楚：点什么、预期看到什么、怎么判断这步有没有解决；3) 区分"我自己能做的"和"需要送修的"；4) 别让我下载来路不明的"修复工具"。

2. 按步骤反馈："试了第一步，还是蓝屏，代码变成了 XXX"——它会修正判断

3. 进阶：WorkBuddy 能直接看你的系统日志、帮你改设置（每一步都会先问你）

## AI 修不了的

- 硬件坏了（硬盘异响、进水）——直接送修，别折腾
- 要拆机的活——它可以指导，但动手前评估自己手艺
- 报错信息被你翻译/转述过的——截图最准，文字次之，口述最差

## 防坑提示

- 它建议的"下载某工具"只认官网，别下"高速下载器"
- 涉及删除分区/改注册表的操作，先备份或跳过
