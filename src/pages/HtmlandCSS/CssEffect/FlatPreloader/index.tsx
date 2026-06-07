import React, { Component } from 'react';
import styles from './index.less';

interface FlatPreloaderState {
	currentEmoji: string;
}

export default class FlatPreloader extends Component<{}, FlatPreloaderState> {
	timer: ReturnType<typeof setInterval> | null = null;

	override state: FlatPreloaderState = {
		currentEmoji: '\u{1F923}', // 初始回退表情 (rolling on the floor laughing)
	};

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({ currentEmoji: FlatPreloader.generatedEmoji() });
		}, 2000);
	}

	componentWillUnmount() {
		if (this.timer !== null) {
			clearInterval(this.timer);
			this.timer = null;
		}
	}

	static generatedEmoji(): string {
		const start = 0x1f600;
		const end = 0x1f64f;
		const start2 = 0x1f900;
		const end2 = 0x1f9ff;
		const useFirstRange = Math.random() > 0.5;
		const emojiCode = useFirstRange
			? Math.floor(Math.random() * (end - start + 1)) + start
			: Math.floor(Math.random() * (end2 - start2 + 1)) + start2;
		return String.fromCodePoint(emojiCode);
	}

	// eslint-disable-next-line class-methods-use-this
	render() {
		const { currentEmoji } = this.state;
		return (
			<div className={styles.content}>
				<div className={styles.title}>CSS3 Loading animations</div>
				{/* loading1 */}
				<div className={styles.wrapper}>
					<p>loading 1</p>
					<div className={styles.load1}>
						<hr />
						<hr />
						<hr />
						<hr />
					</div>
				</div>
				{/* loading2 */}
				<div className={styles.wrapper}>
					<p>loading 2</p>
					<div className={styles.load2}>
						<div className={styles.line}></div>
						<div className={styles.line}></div>
						<div className={styles.line}></div>
					</div>
				</div>
				{/* loading3 */}
				<div className={styles.wrapper}>
					<p>loading 3</p>
					<div className={styles.load3}>
						<div className={styles.line}></div>
						<div className={styles.line}></div>
						<div className={styles.line}></div>
					</div>
				</div>
				{/* loading4 */}
				<div className={styles.wrapper}>
					<p>loading 4</p>
					<div className={styles.load4}>
						<div className={styles.circleCore}></div>
					</div>
				</div>
				{/* loading5 */}
				<div className={styles.wrapper}>
					<p>loading 5</p>
					<div className={styles.load5}>
						<div>G</div>
						<div>N</div>
						<div>I</div>
						<div>D</div>
						<div>A</div>
						<div>O</div>
						<div>L</div>
					</div>
				</div>
				{/* loading6 */}
				<div className={styles.wrapper}>
					<p>loading 6</p>
					<div className={styles.load6}>
						<div className={styles.petal}></div>
						<div className={styles.petal}></div>
						<div className={styles.petal}></div>
						<div className={styles.petal}></div>
						<div className={styles.petal}></div>
						<div className={styles.petal}></div>
						<div className={styles.petal}></div>
						<div className={styles.petal}></div>
					</div>
				</div>
				{/* loading7 */}
				<div className={styles.wrapper}>
					<p>loading 7</p>
					<div className={styles.load7}>
						<div className={styles.sword1}></div>
						<div className={styles.sword2}></div>
						<div className={styles.sword3}></div>
					</div>
				</div>
				{/* loading8 */}
				<div className={styles.wrapper}>
					<p>loading 8</p>
					<div className={styles.load8}></div>
				</div>
				{/* loading9 */}
				<div className={styles.wrapper}>
					<p>loading 9</p>
					<div className={styles.load9}>
						<div className={styles.shelter}></div>
						<p className={styles.text9}>
							<span className={styles.letter}>L</span>
							<span className={styles.letter}>o</span>
							<span className={styles.letter}>a</span>
							<span className={styles.letter}>d</span>
							<span className={styles.letter}>i</span>
							<span className={styles.letter}>n</span>
							<span className={styles.letter}>g</span>
						</p>
					</div>
				</div>
				{/* loading10 */}
				<div className={styles.wrapper}>
					<p>loading 10</p>
					<div className={styles.load10}>
						<div className={styles.line}></div>
						<div className={styles.line}></div>
						<div className={styles.line}></div>
						<div className={styles.line}></div>
					</div>
				</div>
				{/* loading11 */}
				<div className={styles.wrapper}>
					<p>loading 11</p>
					<div className={styles.load11}>
						<div className={styles.dash_uno}></div>
						<div className={styles.dash_dos}></div>
						<div className={styles.dash_tres}></div>
						<div className={styles.dash_cuatro}></div>
					</div>
				</div>
				{/* loading12 — emoji 由 React state 驱动，不再使用 getElementById */}
				<div className={styles.wrapper}>
					<div className={styles.emoji_g} style={{ '--emoji': `"${currentEmoji}"` } as React.CSSProperties}></div>
				</div>
				{/* loading13 */}
				<div className={styles.wrapper}>
					<p>loading 13</p>
				</div>
				{/* loading14 */}
				<div className={styles.wrapper}>
					<p>loading 14</p>
				</div>
				{/* loading15 */}
				<div className={styles.wrapper}>
					<p>loading 15</p>
				</div>
			</div>
		);
	}
}
