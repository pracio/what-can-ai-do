---
task_id: agent-organize-photos
lang: zh-Hans
indices: {prompt: 2, hassle: 3, risk: 2}
paths:
  - {tier: agent, tool: workbuddy, region: cn, verified: pending}
domains: [生活]
type: agent
last_tested: pending
related: [restore-old-photo, agent-research-report]
title: "AI 能整理你的照片"
tagline: "电脑上的 AI 员工，批量分类你只审批"
accent: "#a78bfa"
accent2: "#ddd6fe"
icon: agent-organize-photos
order: 14
steps:
  - n: "1"
    text: "电脑上 {{workbuddy}} <a href=\"https://www.workbuddy.cn/\" target=\"_blank\" rel=\"noopener\" class=\"web-link\">下载安装 WorkBuddy</a>（免费）"
  - n: "2"
    text: "打开后选择你存照片的文件夹，把这段话发给它："
    prompt: "这个文件夹里的照片和截图很乱。帮我分类：旅游风景、人物合影、截图、文件收据、其他。分好类整理成子文件夹，给我一份清单：每类数量、时间范围、建议保留还是删。动手前先告诉我你打算怎么分。"
  - n: "3"
    text: "它动手前会找你确认，看过方案再放行，「建议删」的自己过目"
indicesText:
  prompt: "说 2 句"
  hassle: "要先装软件"
  risk: "删除要自己确认"
---

# 让 AI 整理你电脑里的照片

**能做什么**：把电脑里乱糟糟的照片文件夹（截图、旅游照、收据混在一起）按内容自动分类，直接整理成子文件夹。桌面截图成灾、几个 G 照片乱放的人尤其需要。
**要多久**：装软件 5 分钟 + AI 干活 10-30 分钟。**要花钱吗**：基本免费。
**在电脑上做**：这个活需要 AI 直接操作你的文件夹，手机上做不了。

## 怎么做

### 用 [WorkBuddy](https://www.workbuddy.cn/)

1. [下载安装 WorkBuddy](https://www.workbuddy.cn/)（支持 Windows / Mac / 鸿蒙，装完微信扫码就能登录）

2. 打开 WorkBuddy，把存照片的文件夹授权给它（第一次用会提示选文件夹，只授权这一个目录就行，它碰不到你电脑里其他东西）

3. 把这段话发给它：

> 这个文件夹里的照片和截图很乱。帮我分类：旅游风景、人物合影、截图、文件收据、其他。分好类整理成子文件夹，给我一份清单：每类数量、时间范围、建议保留还是删。动手前先告诉我你打算怎么分。

4. 它会先给你一个分类方案——看过觉得靠谱再放行。「建议删」的那批，自己再扫一眼确认没重要信息再删。

**和普通 AI 聊天的区别**：豆包、元宝只能"看"你传给它的图，不能替你移动文件。WorkBuddy 是直接在你的电脑上动手整理——这就是"问答 AI"和"干活 AI"的区别。

## 做不好的

- 照片特别多（几千张）时比较慢，可以按年份分几次整理
- 模糊/重复照片的判断不一定合你心意，把它当助理不是法官
- 分类方案不满意可以打回重提，不用迁就第一次的结果

## 防坑提示

- 首次授权文件夹时看清楚范围，只给需要整理的那个目录
- "建议删"永远自己过目后再执行，高危操作 WorkBuddy 也会要求你确认

## 整理完了？

试试 → **修复老照片** · **让 AI 调研出报告**
