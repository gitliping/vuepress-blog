const themeReco = require('./themeReco.js')
const nav = require('../nav/')
const sidebar = require('../sidebar/')
const {
  appId,
  appKey
} = require('../privacy')

module.exports = Object.assign({}, themeReco, {
  // 首页相关配置部分在 /README.md 文件中
  type: 'blog',
  nav,
  sidebar,
  logo: '/logo.jpg',
  authorAvatar: '/avatar.jpg', // 设置博客头像
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  // 自动形成侧边导航
  sidebar: 'auto',
  // 配置评论功能
  valineConfig: {
    appId: appId, // your appId
    appKey: appKey, // your appKey
    placeholder: '请在这留下你的评论吧~',
    requiredFields: ['nick', 'mail'], // 关闭匿名评论，设置必填信息 v1.4.6+生效
    recordIP: true, // 记录评论者IP v1.3.5+生效
    avatar: 'mp'  // 头像样式
  },
  // 配置友链
  friendLink: [
    {
    title: '阮一峰的网络日志',
    desc: '前端巨佬，我辈楷模，著作《ES6入门教程》，其他教程也写的贼棒，每一篇都是精华',
    email: 'yifeng.ruan@gmail.com',
    link: 'http://www.ruanyifeng.com/blog/'  
  },
  {
    title: '彭先生的博客',
    desc: '前端大佬，我是一只小小小小鸟~',
    email: '2845486124@qq.com',
    link: 'https://bookbook.cc'
  },
  {
    title: '午后南杂',
    desc: 'Enjoy when you can, and endure when you must.',
    email: 'recoluan@qq.com',
    link: 'https://www.recoluan.com'
  },
  {
    title: '信工院李平',
    desc: '我一个博客站，分享知识的平台',
    email: '2642505876@qq.com',
    link: 'https://blog.csdn.net/weixin_44584479?spm=1001.2101.3001.5343'
  },
  {
    title: '懒人一个',
    desc: '一位前端大佬，2D看板娘项目开发者，博客中给出了很多有趣的技术工具',
    email: 'h1606051253@gmail.com/',
    link: 'https://blog.hclonely.com'
  }
  ],

  // 上/下一篇
  nextLinks: true,
  prevLinks: true,

  // 开启页面滚动
  smoothScroll: true
})