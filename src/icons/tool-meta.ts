// tool slug → 展示元数据。paths[].tool 引用这里的 key。
// icon 文件在 public/icons/；url 是"点一下就能跳转"的官方入口。
export const TOOL_META: Record<string, { name: string; url: string; icon: string; note?: string }> = {
  chatgpt:       { name: 'ChatGPT',        url: 'https://chatgpt.com/',              icon: '/icons/chatgpt.png' },
  'chatgpt-voice': { name: 'ChatGPT 語音對話', url: 'https://chatgpt.com/',            icon: '/icons/chatgpt.png' },
  'chatgpt-agent': { name: 'ChatGPT Agent（付費）', url: 'https://chatgpt.com/',       icon: '/icons/chatgpt.png' },
  'chatgpt-codex': { name: 'ChatGPT Codex（付費）', url: 'https://chatgpt.com/codex', icon: '/icons/chatgpt.png' },
  gemini:        { name: 'Google Gemini',  url: 'https://gemini.google.com/',        icon: '/icons/gemini.png' },
  cofacts:       { name: '真的假的 Cofacts', url: 'https://cofacts.g0v.tw/',          icon: '/icons/cofacts.png' },
  doubao:        { name: '豆包',            url: 'https://www.doubao.com/chat/',      icon: '/icons/doubao.png' },
  'doubao-super': { name: '豆包',            url: 'https://www.doubao.com/chat/',     icon: '/icons/doubao.png' },
  yuanbao:       { name: '腾讯元宝',         url: 'https://yuanbao.tencent.com/',      icon: '/icons/yuanbao.png' },
  workbuddy:     { name: 'WorkBuddy',      url: 'https://www.workbuddy.cn/',         icon: '/icons/workbuddy.svg' },
  'meitu-miniprogram': { name: '美图秀秀（小程序）', url: 'https://www.meitu.com/',   icon: '/icons/meitu.png' },
};
