/*
 * @Description: 模拟雪花飞舞效果
 * @Author: KonmaMeiko
 * @Date: 2022-08-29 15:47:18
 * @LastEditTime: 2026-05-26 00:00:23
 * @LastEditors: KonmaMeiko
 */

import React, { useMemo } from 'react';
import styles from './Less2Stars.scss';

interface Snowflake {
	id: number;
	startX: number;
	delay: number;
	duration: number;
	size: number;
	opacity: number;
	swayX: number;
}

const generateSnowflakes = (count: number): Snowflake[] => {
	return Array.from({ length: count }, (_, i) => ({
		id: i,
		startX: Math.random() * 100,
		delay: Math.random() * -30,
		duration: Math.random() * 20 + 10,
		size: Math.random() * 8 + 2,
		opacity: Math.random() * 0.8 + 0.2,
		swayX: Math.random() * 30 - 15,
	}));
};

const Less2Stars: React.FC = () => {
	const snowflakes = useMemo(() => generateSnowflakes(200), []);

	return (
		<div className={styles.body}>
			<h1 className={styles.txt1}>落霞与孤鹜齐飞</h1>
			<h1 className={styles.txt2}>秋水共长天一色</h1>
			<main>
				{snowflakes.map(sf => (
					<div
						key={sf.id}
						className={styles.snow}
						style={
							{
								left: `${sf.startX}%`,
								width: `${sf.size}px`,
								height: `${sf.size}px`,
								opacity: sf.opacity,
								animationDelay: `${sf.delay}s`,
								animationDuration: `${sf.duration}s`,
								'--sway-x': `${sf.swayX}px`,
							} as React.CSSProperties
						}
					/>
				))}
			</main>
		</div>
	);
};

export default Less2Stars;
