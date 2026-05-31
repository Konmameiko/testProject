/*
 * @Description: 按钮样式展示 — Dark Theme Showcase
 * @Author: KonmaMeiko
 * @Date: 2023-05-22 00:00:52
 */

import { Component } from 'react';
import styles from './index.less';

interface ButtonItem {
	key: string;
	label: string;
	btnClass: string;
	text?: string;
	hasSpan?: boolean;
	interactive?: 'bubble' | 'flyaway' | 'toggle';
}

// ---- 按钮分组数据 ----
const gradientItems: ButtonItem[] = [
	{ key: 'btn1', label: 'Blue Gradient', btnClass: styles.btn1, text: 'Button 1' },
	{ key: 'btn2', label: 'Purple Gradient', btnClass: styles.btn2, text: 'Button 2' },
	{ key: 'btn7', label: 'Scale Rotate', btnClass: styles.btn7, text: 'Button 7' },
	{ key: 'btn9', label: 'Shine Overlay', btnClass: styles.btn9, text: 'Button 9' },
	{ key: 'btn10', label: 'Fill Bottom', btnClass: styles.btn10, text: 'Button 10' },
];

const borderItems: ButtonItem[] = [
	{ key: 'btn3', label: 'Border Reveal', btnClass: styles.btn3, text: 'Button 3', hasSpan: true },
	{ key: 'btn4', label: 'Teal Border', btnClass: styles.btn4, text: 'Button 4', hasSpan: true },
	{ key: 'btn5', label: 'Red Border', btnClass: styles.btn5, text: 'Button 5', hasSpan: true },
	{ key: 'btn6', label: 'Radial Border', btnClass: styles.btn6, text: 'Button 6', hasSpan: true },
];

const transformItems: ButtonItem[] = [
	{ key: 'btn8', label: 'Reveal Fill', btnClass: styles.btn8, text: 'Button 8' },
	{ key: 'btn11', label: 'Slide Fill', btnClass: styles.btn11, text: 'Button 11' },
	{ key: 'btn12', label: 'Bubble Click', btnClass: styles.btn12, text: 'Button 12', interactive: 'bubble' },
	{ key: 'btn13', label: 'Border Blink', btnClass: styles.btn13, text: 'Button 13' },
];

const specialItems: ButtonItem[] = [
	{ key: 'btn14', label: 'Send Flyaway', btnClass: styles.btn14, text: 'Send', interactive: 'flyaway' },
	{ key: 'btn15', label: 'Toggle Switch', btnClass: styles.btn15, text: '', interactive: 'toggle' },
	{ key: 'btn16', label: 'Button 16', btnClass: styles.btn16, text: 'Button 16' },
	{ key: 'btn17', label: 'Button 17', btnClass: styles.btn17, text: 'Button 17' },
];

interface State {
	bubbleKeys: Set<string>;
	flyawayKeys: Set<string>;
	toggleKeys: Set<string>;
}

export default class Buttons extends Component<{}, State> {
	state: State = {
		bubbleKeys: new Set(),
		flyawayKeys: new Set(),
		toggleKeys: new Set(),
	};

	// ---- 交互处理 ----
	handleBubble = (key: string) => {
		this.setState(prev => {
			const next = new Set(prev.bubbleKeys);
			next.add(key);
			return { bubbleKeys: next };
		});
		setTimeout(() => {
			this.setState(prev => {
				const next = new Set(prev.bubbleKeys);
				next.delete(key);
				return { bubbleKeys: next };
			});
		}, 700);
	};

	handleFlyaway = (key: string) => {
		this.setState(prev => {
			const next = new Set(prev.flyawayKeys);
			next.add(key);
			return { flyawayKeys: next };
		});
		setTimeout(() => {
			this.setState(prev => {
				const next = new Set(prev.flyawayKeys);
				next.delete(key);
				return { flyawayKeys: next };
			});
		}, 3000);
	};

	handleToggle = (key: string) => {
		this.setState(prev => {
			const next = new Set(prev.toggleKeys);
			if (next.has(key)) {
				next.delete(key);
			} else {
				next.add(key);
			}
			return { toggleKeys: next };
		});
	};

	// ---- 渲染卡片 ----
	renderCard(item: ButtonItem) {
		const { bubbleKeys, flyawayKeys, toggleKeys } = this.state;
		const btnClass = [
			item.btnClass,
			item.interactive === 'bubble' && bubbleKeys.has(item.key) ? styles.animate : '',
			item.interactive === 'flyaway' && flyawayKeys.has(item.key) ? styles.click14 : '',
			item.interactive === 'toggle' && toggleKeys.has(item.key) ? styles.click_active15 : '',
		]
			.filter(Boolean)
			.join(' ');

		const handleClick = () => {
			if (item.interactive === 'bubble') this.handleBubble(item.key);
			if (item.interactive === 'flyaway') this.handleFlyaway(item.key);
			if (item.interactive === 'toggle') this.handleToggle(item.key);
		};

		return (
			<div key={item.key} className={styles.card}>
				<div className={styles.cardBody}>
					<button className={btnClass} onClick={handleClick}>
						{item.hasSpan ? <span>{item.text}</span> : item.text}
						{item.key === 'btn14' && (
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								x="0px"
								y="0px"
								viewBox="0 0 512 512"
								enableBackground="new 0 0 512 512"
								xmlSpace="preserve"
							>
								<path
									id="paper-plane-icon"
									d="M462,54.955L355.371,437.187l-135.92-128.842L353.388,167l-179.53,124.074L50,260.973L462,54.955z M202.992,332.528v124.517l58.738-67.927L202.992,332.528z"
								></path>
							</svg>
						)}
					</button>
				</div>
				<span className={styles.cardLabel}>{item.label}</span>
			</div>
		);
	}

	render() {
		return (
			<div className={styles.body}>
				{/* ---- 页面标题 ---- */}
				<header className={styles.header}>
					<h3 className={styles.title}>按钮样式展示</h3>
				</header>

				{/* ---- 渐变填充 ---- */}
				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>渐变填充 Gradient Fill</h2>
					<div className={styles.grid}>{gradientItems.map(item => this.renderCard(item))}</div>
				</section>

				{/* ---- 边框动效 ---- */}
				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>边框动效 Border Reveal</h2>
					<div className={styles.grid}>{borderItems.map(item => this.renderCard(item))}</div>
				</section>

				{/* ---- 变换交互 ---- */}
				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>变换交互 Transform</h2>
					<div className={styles.grid}>{transformItems.map(item => this.renderCard(item))}</div>
				</section>

				{/* ---- 特殊组件 ---- */}
				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>特殊组件 Special</h2>
					<div className={styles.grid}>{specialItems.map(item => this.renderCard(item))}</div>
				</section>
			</div>
		);
	}
}
