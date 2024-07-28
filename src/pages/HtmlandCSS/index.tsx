/*
 * @Description:
 * @Author: KonmaMeiko
 * @Date: 2023-03-11 17:03:20
 * @lastEditTime: Do not edit
 * @LastEditors: KonmaMeiko
 */
import { useSearchParams } from '@/.umi/exports';
import { FC, useEffect, useState } from 'react';
import { Layout, Tabs, Menu } from 'antd';
import { history } from 'umi';
import 'antd/dist/reset.css';
import Rotate from './PhotoRotate';
import Sliding from './SlidingPhoto';
import Erasure from './PhotoErasure';
import ThreeD from './PhotoThreeD';
import TimerShaft from './TimeShaftMake';
import SimpleSearch from './simpleSearch';
import SimpleLogin from './simpleLogin';
import Drop from './drop';
import FlatPreloader from './FlatPreloader';
import Wave from './wave/wave';
import DrawText from './drag2drawText';
import Temporary from './temporary';
import StarSky from './starSky/Less2Stars';
import Interstellar from './Interstellar';
import FrostedGlass from './frostedGlass/frosted';
import FrostedGlassBg from './frostedGlassBg';
import NotFound from './404';
import Recharge from './recharge';
import PhotoMoveMode from './photoMoveMode';
import CssGraph from './CssGraph';
import LazyEyes from './lazyEyes';
import GlitchGIF from './GlitchGIF';
import styles from './index.less';
import Utiles from '@/utils/util';

const { Header, Content, Sider } = Layout;

const Index: FC = () => {
	const TabArr = [
		{ label: '图片CSS相关', key: 'photo' },
		{ label: 'HTML组件相关', key: 'html' },
		{ label: 'CSS特效相关', key: 'css' },
		{ label: '有趣的前端界面集合', key: 'inter' },
		{ label: '临时DEMO', key: 'temp' },
	];
	// 图片相关CSS菜单项
	const photoItems = [
		{ label: '图片立方体旋转', key: 'photo-1', component: <Rotate /> },
		{ label: '轮播图与滚动图片', key: 'photo-2', component: <Sliding /> },
		{ label: '图片擦除', key: 'photo-3', component: <Erasure /> },
		{ label: '图片3D 轮播', key: 'photo-4', component: <ThreeD /> },
		{ label: '简单的视差滚动效果', key: 'photo-5', component: <NotFound /> },
		{ label: '抖音风格GIF', key: 'photo-6', component: <GlitchGIF /> },
	];
	// HTML组件菜单项
	const htmlComItems = [
		{ label: '时间轴制作', key: 'html-1', component: <TimerShaft /> },
		{ label: '简易搜索框', key: 'html-2', component: <SimpleSearch /> },
		{ label: '简易登陆界面', key: 'html-3', component: <SimpleLogin /> },
		{ label: '拖拽缩放页面', key: 'html-4', component: <Drop /> },
		{ label: '毛玻璃效果', key: 'html-5', component: <FrostedGlass /> },
	];
	// CSS特效菜单项
	const cssItems = [
		{ label: 'load组件页', key: 'css-1', component: <FlatPreloader /> },
		{ label: '纯CSS轮播图', key: 'css-2', component: <PhotoMoveMode /> },
		{ label: 'Css图案集合', key: 'css-3', component: <CssGraph /> },
	];
	// 前端界面集合菜单项
	const interItems = [
		{ label: '拖拽生成字符串', key: 'inter-1', component: <DrawText /> },
		{ label: '雪花特效', key: 'inter-2', component: <StarSky /> },
		{ label: '海浪动画', key: 'inter-3', component: <Wave /> },
		{ label: '星际穿越', key: 'inter-4', component: <Interstellar /> },
		{ label: '毛玻璃渐变背景', key: 'inter-5', component: <FrostedGlassBg /> },
		{ label: '安卓充电效果', key: 'inter-6', component: <Recharge /> },
		{ label: 'LazyEye', key: 'inter-7', component: <LazyEyes /> },
	];
	// 临时DEMO
	const tmpItems = [{ label: '临时Demo页', key: 'temp-1', component: <Temporary /> }];
	const ItemsObj = {
		photo: photoItems,
		html: htmlComItems,
		css: cssItems,
		inter: interItems,
		temp: tmpItems,
	};
	const [searchParams, setSearchParams] = useSearchParams();
	const [key, setKey] = useState<string>(Utiles.getInstance().getURLObj()?.key || 'photo');
	const [itmKey, setItemKey] = useState<string>(Utiles.getInstance().getURLObj()?.index || 'photo-1');
	// 配置tab页菜单项
	const [menuitems, setMenuItems] = useState(tmpItems);
	const [indexKey, setIndexKey] = useState<Map<string, JSX.Element>>(new Map());

	useEffect(() => {
		const tempMap = new Map();
		for (let i of [...photoItems, ...htmlComItems, ...cssItems, ...interItems, ...tmpItems]) {
			tempMap.set(i.key, i.component);
		}
		setIndexKey(tempMap);
		setTabKey(key);
	}, []);

	// tab选项修改
	const setTabKey = (key: any) => {
		setMenuItems(ItemsObj[key]);
		setKey(key);
		const defaultParam = Utiles.getInstance().getURLObj();
		if (defaultParam?.key === key) {
			const index = Number(defaultParam?.index) || 1;
			setItemKey(ItemsObj[key][index - 1].key);
		} else {
			setItemKey(ItemsObj[key][0].key);
		}
		setSearchParams({ ...defaultParam, key });
	};

	// 左侧菜单项改变
	const setLeftMenuItemKey = (menu: any) => {
		const defaultParam = Utiles.getInstance().getURLObj();
		setItemKey(menu.key);
		setSearchParams({ ...defaultParam, index: menu.key.split('-')[1] });
	};

	const goHome = () => {
		history.push('/');
	};

	// 组件渲染
	const renderDemo = () => {
		if (indexKey.size !== 0) {
			return indexKey.get(itmKey);
		} else {
			return <h1>Loading......</h1>;
		}
	};

	return (
		<Layout className={styles.layout}>
			<Header>
				<Tabs
					className={styles.tabs}
					onChange={setTabKey}
					activeKey={key}
					destroyInactiveTabPane={true}
					type={'line'}
					items={TabArr}
				/>
			</Header>
			<Layout className={styles.home}>
				<Sider trigger={null} collapsible>
					<div className={styles.logo} onClick={() => goHome()}>
						Just Happy
					</div>
					<Menu
						style={{ backgroundColor: 'white' }}
						selectedKeys={[itmKey]}
						onClick={item => setLeftMenuItemKey(item)}
						items={menuitems}
					/>
				</Sider>
				<Layout className={styles.siteLayout}>
					<Content className={styles.siteLayoutBackground}>{renderDemo()}</Content>
				</Layout>
			</Layout>
		</Layout>
	);
};
export default Index;
