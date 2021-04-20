const themeConfig = require('./config/theme/')

module.exports = {
  title: "李平Sir",
  description: '不要在该奋斗的年纪选择安逸，在这记录了我成长的脚步',
  dest: 'public',//默认运行文件
  port:'7000',//设置端口号
  // base: '/vuepress-blog/', //设置站点根路径
  head: [
    ['script',{charset:'utf-8',src:'/js/main.js'}],
    ['link', {rel: 'icon',href: '/favicon.ico'}],
    ['meta', {name: 'viewport',content: 'width=device-width,initial-scale=1,user-scalable=no'}],

  ['meta', {name: 'keywords', content: '李平,李平的个人网站,android开发,安卓开发,android开发,前端转行学android,泸州职业技术学院'}],
  ['meta', {name: 'description', content: '李平的个人网站'}],
  ['meta', {name: 'description', content: 'width=devic-width,initial-scale=1,user-scalable=no'}],
  ['meta', {name: 'robots', content: '李平'}],
  ['script',"{}",`
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?7fde383ac0f6a06509495d329efafcc1";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm,s);
  })();`], //su搜索优化

  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  

 
  //BGM播放器 "@vuepress-reco/vuepress-plugin-bgm-player": "^1.1.3",
  // "@vuepress-reco/vuepress-plugin-bgm-player": {
    audios: [
      {
        name: "Faster Than Light",
        artist: "Andreas Waldetoft / Mia Stegmar",
        url:
          "https://cdn-image.tsanfer.xyz/music/Andreas%20Waldetoft%2CMia%20Stegmar%20-%20Faster%20Than%20Light.mp3",
        cover:
          "https://p1.music.126.net/Gxv6d9W4Yd9q9WNHPpi8rw==/1379887104073348.jpg",
      },
      {
        name: "Dawn",
        artist: "DDRKirby(ISQ)",
        url:
          "https://cdn-image.tsanfer.xyz/music/Dawn%20-%20DDRKirby%28ISQ%29.mp3",
        cover:
          "https://p2.music.126.net/IPnqMCk8YaN9inwYV2bdgQ==/18774161044446693.jpg",
      },
    ],

plugins:[
  [
    //先安装在配置， npm install vuepress-plugin-meting --save
    'meting', {
      metingApi: "https://api.i-meto.com/meting/api",
      meting: {
        server: "netease",
        type: "playlist",
        mid: "621465725"
      },          // 不配置该项的话不会出现全局播放器
      aplayer: {
        lrcType: 3
      }
    }
  ],
  // ['meting', {
  //   metingApi: "https://meting.sigure.xyz/api/music",
  //   meting: {
  //     // 网易
  //     server: "netease",
  //     // 读取歌单
  //     type: "playlist",
  //     mid: "13529775",
  //   },          
  //   // 不配置该项的话不会出现全局播放器
  //   aplayer: {
  //     // 吸底模式
  //     fixed: true,
  //     mini: true,
  //     // 自动播放
  //     autoplay: true,
  //     // 歌曲栏折叠
  //     listFolded:true,
  //     // 颜色
  //     theme: '#f9bcdd',
  //     // 播放顺序为随机
  //     order: 'random',
  //     // 初始音量
  //     volume: 0.1,
  //     // 关闭歌词显示
  //     lrcType: 0
  //   },
  //   mobile :{
  //     // 手机端去掉cover图
  //     cover: false,
  //   }
  // }],

  [
    //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
    "@vuepress-reco/vuepress-plugin-kan-ban-niang",
    {
      theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
      clean: false,
      messages: {
        welcome: '我是lookroot欢迎你的关注 ',
        home: '心里的花，我想要带你回家。',
        theme: '好吧，希望你能喜欢我的其他小伙伴。',
        close: '再见哦'
      },
      width: 240,
      height: 352
    }
  ],
  [
    //鼠标点击特效 先安装在配置， npm install vuepress-plugin-cursor-effects --save
    "cursor-effects",
    {
      size: 3,                    // size of the particle, default: 2
      shape: ['circle'],  // shape of the particle, default: 'star'
      zIndex: 999999999           // z-index property of the canvas, default: 999999999
    }
  ],
  [
    //动态标题 先安装在配置， npm install vuepress-plugin-dynamic-title --save
    "dynamic-title",
    {
      showIcon: "/favicon.ico",
      showText: "(/≧▽≦/)咦！又好了！",
      hideIcon: "/failure.ico",
      hideText: "(●—●)喔哟，崩溃啦！",
      recoverTime: 2000
    }
  ],
  [
    //图片放大插件 先安装在配置， npm install @vuepress\plugin-medium-zoom --save
    '@vuepress\plugin-medium-zoom', {
      selector: '.page img',
      delay: 1000,
      options: {
        margin: 24,
        background: 'rgba(25,18,25,0.9)',
        scrollOffset: 40
      }
    }
  ],
]
}
