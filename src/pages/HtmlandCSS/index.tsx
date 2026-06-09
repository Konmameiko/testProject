import React, { Suspense, lazy, useMemo, useState, ComponentType } from 'react';
import { useSearchParams, history } from 'umi';
import { Tabs, Menu, Layout, Spin } from 'antd';
import styles from './index.less';

// ---- 懒加载：按 tab/菜单项 点击时才动态加载对应组件 ----
const Rotate = lazy(() => import('./PhotoWithHtml/PhotoRotate'));
const Sliding = lazy(() => import('./PhotoWithHtml/SlidingPhoto'));
const Erasure = lazy(() => import('./PhotoWithHtml/PhotoErasure'));
const ThreeD = lazy(() => import('./PhotoWithHtml/PhotoThreeD'));
const TimerShaft = lazy(() => import('./HtmlComponent/TimeShaftMake'));
const SimpleLogin = lazy(() => import('./HtmlComponent/simpleLogin'));
const FlatPreloader = lazy(() => import('./CssEffect/FlatPreloader'));
const Wave = lazy(() => import('./FunnyPage/wave/wave'));
const DrawText = lazy(() => import('./FunnyPage/drag2drawText'));
const Temporary = lazy(() => import('./temporary'));
const StarSky = lazy(() => import('./FunnyPage/starSky/Less2Stars'));
const Interstellar = lazy(() => import('./FunnyPage/Interstellar'));
const FrostedGlass = lazy(() => import('./HtmlComponent/frostedGlass/frosted'));
const FrostedGlassBg = lazy(() => import('./FunnyPage/frostedGlassBg'));
const Recharge = lazy(() => import('./FunnyPage/recharge'));
const PhotoMoveMode = lazy(() => import('./CssEffect/photoMoveMode'));
const CssGraph = lazy(() => import('./CssEffect/CssGraph'));
const LazyEyes = lazy(() => import('./FunnyPage/lazyEyes'));
const GlitchGIF = lazy(() => import('./PhotoWithHtml/GlitchGIF'));
const JsonEditor = lazy(() => import('./HtmlComponent/jsonEditor'));

const { Header, Sider, Content } = Layout;

interface MenuItem {
	label: string;
	key: string;
	component: ComponentType;
}

const TABS = [
	{ label: '图片CSS相关', key: 'photo' },
	{ label: 'HTML组件相关', key: 'html' },
	{ label: 'CSS特效相关', key: 'css' },
	{ label: '有趣的前端界面集合', key: 'inter' },
	{ label: '临时DEMO', key: 'temp' },
];

const MENUS: Record<string, MenuItem[]> = {
	photo: [
		{ label: '图片立方体旋转', key: 'photo-1', component: Rotate },
		{ label: '轮播图与滚动图片', key: 'photo-2', component: Sliding },
		{ label: '图片擦除', key: 'photo-3', component: Erasure },
		{ label: '图片3D 轮播', key: 'photo-4', component: ThreeD },
		{ label: '抖音风格GIF', key: 'photo-5', component: GlitchGIF },
	],
	html: [
		{ label: '时间轴制作', key: 'html-1', component: TimerShaft },
		{ label: '简易登陆界面', key: 'html-2', component: SimpleLogin },
		{ label: '毛玻璃效果', key: 'html-3', component: FrostedGlass },
	],
	css: [
		{ label: 'load组件页', key: 'css-1', component: FlatPreloader },
		{ label: '纯CSS轮播图', key: 'css-2', component: PhotoMoveMode },
		{ label: 'Css图案集合', key: 'css-3', component: CssGraph },
	],
	inter: [
		{ label: '拖拽生成字符串', key: 'inter-1', component: DrawText },
		{ label: '雪花特效', key: 'inter-2', component: StarSky },
		{ label: '海浪动画', key: 'inter-3', component: Wave },
		{ label: '星际穿越', key: 'inter-4', component: Interstellar },
		{ label: '毛玻璃渐变背景', key: 'inter-5', component: FrostedGlassBg },
		{ label: '安卓充电效果', key: 'inter-6', component: Recharge },
		{ label: 'LazyEye', key: 'inter-7', component: LazyEyes },
		{ label: 'JsonEditor', key: 'inter-8', component: JsonEditor },
	],
	temp: [{ label: '临时Demo页', key: 'temp-1', component: Temporary }],
};

const LoadingFallback = () => (
	<div className={styles.loading}>
		<Spin size="large" />
	</div>
);

export default function Index() {
	const [searchParams, setSearchParams] = useSearchParams();

	const [tab, setTab] = useState(() => searchParams.get('key') || 'photo');
	const [menuKey, setMenuKey] = useState(() => {
		const t = searchParams.get('key') || 'photo';
		const idx = Number(searchParams.get('index'));
		return (idx && MENUS[t]?.[idx - 1]?.key) || MENUS[t]?.[0]?.key || 'photo-1';
	});

	const componentMap = useMemo(() => {
		const map = new Map<string, ComponentType>();
		for (const items of Object.values(MENUS)) {
			for (const { key, component } of items) {
				map.set(key, component);
			}
		}
		return map;
	}, []);

	const handleTabChange = (key: string) => {
		setTab(key);
		const first = MENUS[key]?.[0]?.key || '';
		setMenuKey(first);
		setSearchParams({ key });
	};

	const handleMenuClick = ({ key }: { key: string }) => {
		setMenuKey(key);
		setSearchParams({ key: tab, index: key.split('-')[1] });
	};

	const ActiveComponent = componentMap.get(menuKey);

	return (
		<Layout className={styles.body}>
			{/* ---- 顶部标签导航 ---- */}
			<Header className={styles.header}>
				<Tabs onChange={handleTabChange} activeKey={tab} destroyInactiveTabPane type="line" items={TABS} />
			</Header>

			{/* ---- 主体：侧边栏 + 内容 ---- */}
			<Layout className={styles.main}>
				<Sider className={styles.sidebar} trigger={null} collapsible>
					<div className={styles.logo} onClick={() => history.push('/')}>
						Just Happy
					</div>
					<Menu className={styles.menu} selectedKeys={[menuKey]} onClick={handleMenuClick} items={MENUS[tab]} />
				</Sider>

				<Content className={styles.content}>
					<Suspense fallback={<LoadingFallback />}>{ActiveComponent ? <ActiveComponent /> : null}</Suspense>
				</Content>
			</Layout>
		</Layout>
	);
}
