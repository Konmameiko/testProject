export default [
    { path: '/', component: '@/pages/index' ,title:"主页展示",},
    { path: '/manage', component: '@/pages/components/Manage',title:"后台管理页" },
    { path: '/TodoList', component: '@/pages/components/TodoList', title:"待做清单页面"},
    { path: '/Test', component: '@/pages/test', title:"React学习"},
    { path: '/Test/axios', component: '@/pages/axios/app', title:"ajax学习"},
    { path: '/Test/clickProgressBar', component: '@/pages/clickProgressBar/clickProgressBar', title:"进度条点击"},
    { path: '/Test/Less2Stars', component: '@/pages/Less2Stars/Less2Stars', title:"星空特效（less循环）"},
    { path: '/Test/SPAandRouter', component: '@/pages/SPAandRouter/SPA', title:"单页面及路由",
        routes:[
            {path:'/Test/SPAandRouter/about', component:'@/pages/SPAandRouter/About/index',title:"单页面及路由-about"},
            {path:'/Test/SPAandRouter/home', component:'@/pages/SPAandRouter/Home/index', title:"单页面及路由-home",
            routes:[
                {path:'/Test/SPAandRouter/home/news', component:'@/pages/SPAandRouter/Home/Message/index', title:"单页面及路由-home-message"},
                {path:'/Test/SPAandRouter/home/message', component:'@/pages/SPAandRouter/Home/News/index', title:"单页面及路由-home-news"},
            ]},
            {path:'/Test/SPAandRouter/newPage', component:'@/pages/SPAandRouter/NewPage/index', title:"单页面及路由-home-新标签页测试"},
        ]
    },
    { path: '/Test/ReduxLearn', component: '@/pages/ReduxLearn/reduxIndex', title:"Redux学习"},
    { path: '/Test/Html_CSSLearn', component: '@/pages/HtmlandCSS/index', title:"HTML+CSS学习",},
    { path: '/Test/learnTSX', component: '@/pages/learnTSX/index', title:"TSX+less学习",},
];