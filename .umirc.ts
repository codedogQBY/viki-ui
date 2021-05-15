import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'viki-ui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  sass: {
    implementation: require('node-sass'),
  },
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  navs: {
    // 多语言 key 值需与 locales 配置中的 key 一致
    'en-US': [
      null, // null 值代表保留约定式生成的导航，只做增量配置
      {
        title: 'GitHub',
        path: 'https://github.com/codedogQBY/viki-ui',
      },
    ],
    'zh-CN': [
      null, // null 值代表保留约定式生成的导航，只做增量配置
      {
        title: 'GitHub',
        path: 'https://github.com/codedogQBY/viki-ui',
      },
    ],
  },
  menus: {
    '/components': [
      {
        title: '简介',
        path: '/components',
      },
      {
        title: '基础',
        children: ['components/button', 'components/icon'],
      },
      {
        title: '导航',
        children: ['components/menu'],
      },
      {
        title: '数据录入',
        children: [
          'components/input',
          'components/auto-complete',
          'components/select',
          'components/upload',
        ],
      },
      {
        title: '数据展示',
        children: ['components/tabs', 'components/progress'],
      },
      {
        title: '反馈',
        children: ['components/alert'],
      },
    ],
    '/en-US/components': [
      {
        title: 'Introduction',
        path: '/components',
      },
      {
        title: 'Basis',
        children: ['components/button', 'components/icon'],
      },
      {
        title: 'Navigation',
        children: ['components/menu'],
      },
      {
        title: 'Data Entry',
        children: [
          'components/input',
          'components/auto-complete',
          'components/select',
          'components/upload',
        ],
      },
      {
        title: 'Data Display',
        children: ['components/tabs', 'components/progress'],
      },
      {
        title: 'Feedback',
        children: ['components/alert'],
      },
    ],
  },
});
