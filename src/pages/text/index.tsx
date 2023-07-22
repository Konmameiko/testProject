import React, { Component } from 'react';
import styles from './text.scss';

declare module 'react' {
	interface HTMLAttributes<T> {
		alt?: string;
	}
}

export default class index extends Component {
	render() {
		return (
			<div className={styles.body}>
				<span alt="bold">加粗文本</span>
				<span alt="italic">斜体文本</span>
				<span alt="highlight">高亮文本</span>
				<span alt="overline">上划线文本</span>
				<span alt="underline">下划线文本</span>
				<span alt="removeline">删除线文本</span>
				<span alt="wavy">波浪线文本</span>
				<span alt="emphasize">着重号文本</span>
				<span alt="hide">隐藏文本</span>
				<span alt="rainbow">彩虹变换字体特效</span>
				<span alt="shake">抖音字效</span>
				<span alt="shadow">阴影字体</span>
				<span alt="redTip">红色标签字体</span>
				<span alt="button">Button</span>
				<span alt="shining">Shining Text</span>
				<span>
					<ruby>
						佐天泪子<rp> (</rp>
						<rt>xiān qún kuáng mó</rt>
						<rp>) </rp>
					</ruby>
					<ruby>
						超電磁砲<rp> (</rp>
						<rt>レールガン</rt>
						<rp>) </rp>
					</ruby>
				</span>
				{/* 故障风特效 */}
				<span alt="glitch" data-text="GLITCH">
					GLITCH
				</span>
			</div>
		);
	}
}
