/*
 * @Description: SVG滤镜 — Dark Theme Showcase
 * @Author: KonmaMeiko
 * @Date: 2022-05-09 14:52:03
 * @LastEditTime: 2026-06-05 00:00:00
 * @LastEditors: KonmaMeiko
 */
import React, { Component } from 'react';
import { history } from 'umi';
import { Tabs } from 'antd';
import HaloEffect from './components/haloEffect';
import MosaicEffect from './components/mosaicEffect';
import RoundRec from './components/roundRec';
import styles from './home.scss';

const TABS = [
	{ label: '光晕滤镜 Halo Glow', key: 'halo', component: <HaloEffect /> },
	{ label: '马赛克滤镜 Mosaic', key: 'mosaic', component: <MosaicEffect /> },
	{ label: '圆角滤镜 Round Blur', key: 'roundRec', component: <RoundRec /> },
];

export default class SVGFilter extends Component {
	state = {
		activeKey: 'halo',
	};

	handleTabChange = (key: string) => {
		this.setState({ activeKey: key });
	};

	render() {
		const { activeKey } = this.state;
		const componentMap = new Map(TABS.map(t => [t.key, t.component]));

		return (
			<div className={styles.body}>
				{/* ---- 返回首页按钮 ---- */}
				<button className={styles.homeBtn} onClick={() => history.push('/')}>
					BACK
				</button>

				{/* ---- 顶部标签导航 ---- */}
				<header className={styles.header}>
					<h3 className={styles.title}>SVG 滤镜展示</h3>
					<Tabs onChange={this.handleTabChange} activeKey={activeKey} destroyInactiveTabPane type="line" items={TABS} />
				</header>

				{/* ---- 滤镜展示内容区 ---- */}
				<div className={styles.content}>{componentMap.get(activeKey)}</div>
			</div>
		);
	}
}
