/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { history } from 'umi';
import styles from './text.scss';

/* eslint-disable no-unused-vars */
declare module 'react' {
	interface HTMLAttributes<T> {
		alt?: string;
	}
	/* eslint-enable no-unused-vars */
}

interface TextItem {
	alt: string;
	label: string;
	text: string;
	dataText?: string;
}

const basicItems: TextItem[] = [
	{ alt: 'bold', label: '加粗 Bold', text: '加粗文本' },
	{ alt: 'italic', label: '斜体 Italic', text: '斜体文本' },
	{ alt: 'highlight', label: '高亮 Highlight', text: '高亮文本' },
	{ alt: 'hide', label: '隐藏 Hide', text: '隐藏文本' },
];

const decorationItems: TextItem[] = [
	{ alt: 'overline', label: '上划线 Overline', text: '上划线文本' },
	{ alt: 'underline', label: '下划线 Underline', text: '下划线文本' },
	{ alt: 'removeline', label: '删除线 Line-through', text: '删除线文本' },
	{ alt: 'wavy', label: '波浪线 Wavy', text: '波浪线文本' },
	{ alt: 'emphasize', label: '着重号 Emphasize', text: '着重号文本' },
];

const effectItems: TextItem[] = [
	{ alt: 'rainbow', label: '彩虹变换 Rainbow', text: '彩虹变换字体特效' },
	{ alt: 'shake', label: '抖音字效 Shake', text: '抖音字效' },
	{ alt: 'shadow', label: '阴影字体 Shadow', text: '阴影字体' },
	{ alt: 'shining', label: '闪光文字 Shining', text: 'Shining Text' },
	{ alt: 'glitch', label: '故障风 Glitch', text: 'GLITCH', dataText: 'GLITCH' },
];

const componentItems: TextItem[] = [
	{ alt: 'redTip', label: '红色标签 Red Tag', text: '红色标签字体' },
	{ alt: 'button', label: '按钮 Button', text: 'Button' },
];

export default class index extends Component {
	renderCard(item: TextItem) {
		return (
			<div key={item.alt} className={styles.card}>
				<div className={styles.cardBody}>
					<span alt={item.alt} data-text={item.dataText}>
						{item.text}
					</span>
				</div>
				<span className={styles.cardLabel}>{item.label}</span>
			</div>
		);
	}

	render() {
		return (
			<div className={styles.body}>
				{/* ---- 返回首页按钮 ---- */}
				<button className={styles.homeBtn} onClick={() => history.push('/')}>
					BACK
				</button>

				{/* ---- 页面标题 ---- */}
				<header className={styles.header}>
					<h3 className={styles.title}>文字样式展示</h3>
				</header>

				{/* ---- 基础样式 ---- */}
				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>基础样式</h2>
					<div className={styles.grid}>{basicItems.map(item => this.renderCard(item))}</div>
				</section>

				{/* ---- 文本装饰 ---- */}
				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>文本装饰</h2>
					<div className={styles.grid}>{decorationItems.map(item => this.renderCard(item))}</div>
				</section>

				{/* ---- 特效字体 ---- */}
				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>特效字体</h2>
					<div className={styles.grid}>{effectItems.map(item => this.renderCard(item))}</div>
				</section>

				{/* ---- 组件样式 + Ruby ---- */}
				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>组件样式</h2>
					<div className={styles.grid}>
						{componentItems.map(item => this.renderCard(item))}
						{/* Ruby 注音 */}
						<div className={styles.card}>
							<div className={styles.cardBody}>
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
							</div>
							<span className={styles.cardLabel}>Ruby 注音</span>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
