/*
 * @Description: CSS常用形状集合 —— 暗色主题
 * @Author: KonmaMeiko
 * @Date: 2022-08-03 14:10:48
 * @LastEditTime: 2026-06-03
 */
import React from 'react';
import styles from './index.less';

interface ShapeItem {
	name: string;
	className: string;
	color?: string;
}

const shapes: ShapeItem[] = [
	{ name: '正方形', className: 'square' },
	{ name: '矩形', className: 'rectangle' },
	{ name: '圆形', className: 'circle' },
	{ name: '椭圆', className: 'oval' },
	{ name: '上三角', className: 'triangleUp' },
	{ name: '下三角', className: 'triangleDown' },
	{ name: '左上三角', className: 'triangleTopLeft' },
	{ name: '弯箭头', className: 'curvedarrow' },
	{ name: '梯形', className: 'trapezoid' },
	{ name: '平行四边形', className: 'parallelogram' },
	{ name: '六角星', className: 'sixStar' },
	{ name: '五角星', className: 'fiveStar' },
	{ name: '六边形', className: 'hexagon' },
	{ name: '八边形', className: 'octagon' },
	{ name: '爱心', className: 'heart' },
	{ name: '无穷', className: 'infinity' },
	{ name: '细菱形', className: 'diamondNarrow' },
	{ name: '吃豆人', className: 'pacman' },
	{ name: '气泡框', className: 'talkbubble' },
	{ name: '爆炸12', className: 'burst12' },
	{ name: '太极', className: 'Taiji' },
	{ name: '放大镜', className: 'magnifyingGlass' },
	{ name: '月亮', className: 'moon' },
	{ name: '锁', className: 'lock' },
];

const CssGraph = () => {
	return (
		<div className={styles.main}>
			<h1 className={styles.pageTitle}>CSS Shape 图形集合</h1>
			<p className={styles.pageSubtitle}>纯 CSS 实现的 {shapes.length} 种形状</p>
			<div className={styles.grid}>
				{shapes.map((shape, i) => (
					<div key={shape.className} className={styles.card}>
						<div className={styles.cardStage}>
							<div className={styles[shape.className]} />
						</div>
						<span className={styles.cardLabel}>
							<span className={styles.cardIndex}>{String(i + 1).padStart(2, '0')}</span>
							{shape.name}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default React.memo(CssGraph);
