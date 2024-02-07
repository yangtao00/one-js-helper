import { defineConfig } from 'vitepress';
export default defineConfig({
  base: '/one-js-helper/',
  title: 'one-js-helper',
  description: '一个js工具库',
  lang: 'zh-CN',
  ignoreDeadLinks: true,
  themeConfig: {
    siteTitle: 'one-js-helper',
    logo: '',
    sidebar: {
      '/guide/': {
        base: '/guide/',
        items: [
          {
            text: '验证',
            link: 'validateEmail',
          },
        ],
      },
    },
  },
});
