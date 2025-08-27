import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-vue'],
  manifest: {
    name: 'OmniChat',
    description: 'AI时代的跨平台模型评估与内容生成工作台',
    version: '1.0.0',
    permissions: [
      'storage',
      'activeTab',
      'scripting'
    ],
    host_permissions: [
      'https://chat.openai.com/*',
      'https://chatgpt.com/*',
      'https://gemini.google.com/*',
      'https://chat.deepseek.com/*',
      'https://claude.ai/*',
      'https://www.perplexity.ai/*',
      'https://perplexity.ai/*'
    ],
    action: {
      default_popup: 'popup.html',
      default_title: 'OmniChat - 跨平台AI聊天广播'
    },
    options_ui: {
      page: 'options.html',
      open_in_tab: true
    }
  },
});
