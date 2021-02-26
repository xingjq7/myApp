export default {
  pages: [
    'pages/index/index',
    'pages/test/index',

  ],
subpackages:[
  {
    root: 'pages/pathA',
    pages: [
      'index',
    ]
  },
  {
    root: 'pages/pathB',
    pages: [
      'index',
    ]
  },
],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页"
      },
      {
        pagePath: "pages/test/index",
        text: "测试"
      }
    ]
  }
}
