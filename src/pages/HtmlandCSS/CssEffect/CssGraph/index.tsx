/*
 * @Description: CSS常用形状集合
 * @Author: KonmaMeiko
 * @Date: 2022-08-03 14:10:48
 * @LastEditTime: 2023-07-28 23:57:20
 * @LastEditors: KonmaMeiko
 */
import React from 'react';
import styles from './index.less';

const CssGraph = () => {
	return (
		<div className={styles.main}>
			<div className={styles.content}>
				<div className={styles.square} />
			</div>
			<div className={styles.content}>
				<div className={styles.rectangle} />
			</div>
			<div className={styles.content}>
				<div className={styles.circle} />
			</div>
			<div className={styles.content}>
				<div className={styles.oval} />
			</div>
			<div className={styles.content}>
				<div className={styles.triangleUp} />
			</div>
			<div className={styles.content}>
				<div className={styles.triangleDown} />
			</div>
			<div className={styles.content}>
				<div className={styles.triangleTopLeft} />
			</div>
			<div className={styles.content}>
				<div className={styles.curvedarrow} />
			</div>
			<div className={styles.content}>
				<div className={styles.trapezoid} />
			</div>
			<div className={styles.content}>
				<div className={styles.parallelogram} />
			</div>
			<div className={styles.content}>
				<div className={styles.sixStar} />
			</div>
			<div className={styles.content}>
				<div className={styles.fiveStar} />
			</div>
			<div className={styles.content}>
				<div className={styles.pentagon} />
			</div>
			<div className={styles.content}>
				<div className={styles.hexagon} />
			</div>
			<div className={styles.content}>
				<div className={styles.octagon} />
			</div>
			<div className={styles.content}>
				<div className={styles.heart} />
			</div>
			<div className={styles.content}>
				<div className={styles.infinity} />
			</div>
			<div className={styles.content}>
				<div className={styles.diamondNarrow} />
			</div>
			<div className={styles.content}>
				<div className={styles.diamond} />
			</div>
			<div className={styles.content}>
				<div className={styles.pacman} />
			</div>
			<div className={styles.content}>
				<div className={styles.talkbubble} />
			</div>
			<div className={styles.content}>
				<div className={styles.burst12} />
			</div>
			<div className={styles.content}>
				<div className={styles.Taiji} />
			</div>
			<div className={styles.content}>
				<div className={styles.magnifyingGlass} />
			</div>
			<div className={styles.content}>
				<div className={styles.moon} />
			</div>
			<div className={styles.content}>
				<div className={styles.lock} />
			</div>
		</div>
	);
};
// memo的使用在不希望一直跟随父组件更新的子组件上
export default React.memo(CssGraph);
