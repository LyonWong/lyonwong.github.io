import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LyonWong",
  description: "LyonWong's Cyber Space",
  cleanUrls: true,
  themeConfig: {
    logo: '/assets/name.jpg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '日记', link: '/diary/' },
      { text: '收藏', link: '/collect'}
    ],

    sidebar: [
      {
        // text: 'Examples',
        // items: [
        //   { text: 'Markdown Examples', link: '/markdown-examples' },
        //   { text: 'Runtime API Examples', link: '/api-examples' }
        // ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LyonWong' }
    ]
  }
})
