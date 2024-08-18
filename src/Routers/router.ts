/*
 * @Description:
 * @Author: KonmaMeiko
 * @Date: 2022-07-30 17:45:55
 * @lastEditTime: Do not edit
 * @LastEditors: KonmaMeiko
 */
export default [
	{ path: '/', component: '@/pages/index', title: '主页展示' },
	{ path: '/home', component: '@/pages/index', title: '主页展示' },
	{
		path: '/photoManage',
		component: '@/pages/components/Manage',
		title: '图片CSS样式集合',
	},
	{
		path: '/imgWrapper',
		component: '@/pages/components/imgWrapper',
		title: '图片瀑布流',
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
		path: '/Test/Html_CSSLearn',
		component: '@/pages/HtmlandCSS/index',
		title: 'HTML+CSS学习',
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
