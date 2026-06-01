import { useMemo, useState } from 'react';
import { useSearchParams, history } from 'umi';
import { Tabs, Menu, Layout } from 'antd';
import Rotate from './PhotoWithHtml/PhotoRotate';
import Sliding from './PhotoWithHtml/SlidingPhoto';
import Erasure from './PhotoWithHtml/PhotoErasure';
import ThreeD from './PhotoWithHtml/PhotoThreeD';
import TimerShaft from './HtmlComponent/TimeShaftMake';
import SimpleLogin from './HtmlComponent/simpleLogin';
import FlatPreloader from './CssEffect/FlatPreloader';
import Wave from './FunnyPage/wave/wave';
import DrawText from './FunnyPage/drag2drawText';
import Temporary from './temporary';
import StarSky from './FunnyPage/starSky/Less2Stars';
import Interstellar from './FunnyPage/Interstellar';
import FrostedGlass from './HtmlComponent/frostedGlass/frosted';
import FrostedGlassBg from './FunnyPage/frostedGlassBg';
import Recharge from './FunnyPage/recharge';
import PhotoMoveMode from './CssEffect/photoMoveMode';
import CssGraph from './CssEffect/CssGraph';
import LazyEyes from './FunnyPage/lazyEyes';
import GlitchGIF from './PhotoWithHtml/GlitchGIF';
import JsonEditor from './HtmlComponent/jsonEditor';
import styles from './index.less';

const { Header, Sider, Content } = Layout;

interface MenuItem {
	label: string;
	key: string;
	component: React.ReactElement;
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
		{ label: '图片立方体旋转', key: 'photo-1', component: <Rotate /> },
		{ label: '轮播图与滚动图片', key: 'photo-2', component: <Sliding /> },
		{ label: '图片擦除', key: 'photo-3', component: <Erasure /> },
		{ label: '图片3D 轮播', key: 'photo-4', component: <ThreeD /> },
		{ label: '抖音风格GIF', key: 'photo-5', component: <GlitchGIF /> },
	],
	html: [
		{ label: '时间轴制作', key: 'html-1', component: <TimerShaft /> },
		{ label: '简易登陆界面', key: 'html-2', component: <SimpleLogin /> },
		{ label: '毛玻璃效果', key: 'html-3', component: <FrostedGlass /> },
	],
	css: [
		{ label: 'load组件页', key: 'css-1', component: <FlatPreloader /> },
		{ label: '纯CSS轮播图', key: 'css-2', component: <PhotoMoveMode /> },
		{ label: 'Css图案集合', key: 'css-3', component: <CssGraph /> },
	],
	inter: [
		{ label: '拖拽生成字符串', key: 'inter-1', component: <DrawText /> },
		{ label: '雪花特效', key: 'inter-2', component: <StarSky /> },
		{ label: '海浪动画', key: 'inter-3', component: <Wave /> },
		{ label: '星际穿越', key: 'inter-4', component: <Interstellar /> },
		{ label: '毛玻璃渐变背景', key: 'inter-5', component: <FrostedGlassBg /> },
		{ label: '安卓充电效果', key: 'inter-6', component: <Recharge /> },
		{ label: 'LazyEye', key: 'inter-7', component: <LazyEyes /> },
		{ label: 'JsonEditor', key: 'inter-8', component: <JsonEditor /> },
	],
	temp: [{ label: '临时Demo页', key: 'temp-1', component: <Temporary /> }],
};

export default function Index() {
	const [searchParams, setSearchParams] = useSearchParams();

	const [tab, setTab] = useState(() => searchParams.get('key') || 'photo');
	const [menuKey, setMenuKey] = useState(() => {
		const t = searchParams.get('key') || 'photo';
		const idx = Number(searchParams.get('index'));
		return (idx && MENUS[t]?.[idx - 1]?.key) || MENUS[t]?.[0]?.key || 'photo-1';
	});

	const componentMap = useMemo(() => {
		const map = new Map<string, React.ReactElement>();
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

				<Content className={styles.content}>{componentMap.get(menuKey)}</Content>
			</Layout>
		</Layout>
	);
}
