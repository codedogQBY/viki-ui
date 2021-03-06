import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'viki-ui',
  favicon: 'https://img-blog.csdnimg.cn/20210515162224660.png',
  logo: 'https://img-blog.csdnimg.cn/20210515162224660.png',
  outputPath: 'docs-dist',
  mode: 'site',
  theme: {
    '@c-primary': '#0d6efd',
  },
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
      {
        title: 'Components',
        path: '/en-US/components',
      },
      {
        title: 'GitHub',
        path: 'https://github.com/codedogQBY/viki-ui',
      },
    ],
    'zh-CN': [
      {
        title: '组件',
        path: '/components',
      },
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
          'components/auto-complete',
          'components/input',
          'components/select',
          'components/upload',
        ],
      },
      {
        title: '数据展示',
        children: ['components/progress', 'components/tabs', 'components/card'],
      },
      {
        title: '反馈',
        children: ['components/alert', 'components/message'],
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
          'components/auto-complete',
          'components/input',
          'components/select',
          'components/upload',
        ],
      },
      {
        title: 'Data Display',
        children: ['components/progress', 'components/tabs', 'components/card'],
      },
      {
        title: 'Feedback',
        children: ['components/alert', 'components/message'],
      },
    ],
  },
});
