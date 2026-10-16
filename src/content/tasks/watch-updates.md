---
task_id: watch-updates
lang: zh-Hans
indices: {prompt: 4, hassle: 3, risk: 2}
paths:
  - {tier: agent, tool: workbuddy, region: cn, verified: pending}
  - {tier: chat, tool: doubao-super, region: cn, verified: pending}
domains: [效率办公]
type: agent
last_tested: pending
related: [agent-research-report, travel-plan]
---

# 让 AI 盯着网页，有更新叫你

**能做什么**：让 AI 盯住你关心的页面/价格/公告——比却一直刷强。这是"AI 帮我干活"和"我问 AI 答"最本质的区别。
**要多久**：设置 10 分钟，之后全自动。**要花钱吗**：基本免费。
**为什么这是分水岭**：以前 AI 是"你问它答"；现在它自己定时去看、发现变化主动告诉你——它开始"有任务在身"了。

## 怎么做

### 用 [WorkBuddy](https://www.workbuddy.cn/)（电脑）

1. [下载安装 WorkBuddy](https://www.workbuddy.cn/)，微信扫码登录

2. 把这段话发给它（花括号换成你要盯的东西）：

> 帮我盯住这个页面：{网址，如某商品的购买页/某官网的通知公告栏}。每隔一段时间去看一眼：如果出现{变化，如"价格低于 X 元"或"发布了新的报名通知"}，立刻整理成一句话通知我：变了什么、链接在哪、我该做什么。没变化就别打扰我。

3. 它会定时去检查——有变化主动弹通知，你该干嘛干嘛

**适用场景**：抢演出票/球票开售、等补货、盯政策发布、等导师回邮件式的"公告栏刷新"。

## 做不好的

- 需要登录才能看的页面（如内部系统）要小心授权，别给它多余权限
- 特别高频的变化（秒杀级）不如专业抢票工具，它适合"小时级/天级"的盯梢
- 别用它盯股市做买卖决策——它只能通知，不能也不该替你交易

## 防坑提示

- 只授权需要盯的页面/文件夹
- 通知内容里别带账号密码类敏感信息

## 再进一步

试试 → **让 AI 调研出报告**（一次性深调研）· **帮我订好行程**（多步执行型 agent）
