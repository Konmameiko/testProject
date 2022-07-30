export default [
  { path: '/', component: '@/pages/index', title: '主页展示' },
  {
    path: '/photoManage',
    component: '@/pages/components/Manage',
    title: '图片CSS样式集合',
  },
  {
    path: '/TodoList',
    component: '@/pages/components/TodoList',
    title: '待做清单页面',
  },
  { path: '/Test', component: '@/pages/components/test', title: 'React学习' },
  {
    path: '/Test/axios',
    component: '@/pages/components/axiosLearning/app',
    title: 'ajax学习',
  },
  {
    path: '/Test/Codes',
    component: '@/pages/codeTest/algorithmLearn',
    title: '算法学习页面',
  },
  {
    path: '/Test/moreButtons',
    component: '@/pages/Buttons/buttons',
    title: '按钮特效集合',
  },
  {
    path: '/Test/ReduxLearn',
    component: '@/pages/components/reduxLearning/reduxIndex',
    title: 'Redux学习',
  },
  {
    path: '/Test/Html_CSSLearn',
    component: '@/pages/HtmlandCSS/index',
    title: 'HTML+CSS学习',
  },
  {
    path: '/Test/learnTsx',
    component: '@/pages/components/tsxLearning/index',
    title: 'TS学习',
  },
  {
    path: '/Test/text',
    component: '@/pages/text/index',
    title: '字体特效集合',
  },
  {
    path: '/Test/svgFilter',
    component: '@/pages/SVGFilter/home',
    title: 'SVG滤镜',
  },
  {
    path: '/Test/utilsPages',
    component: '@/pages/utilsPages/index',
    title: '前端功能集合',
  },
];
