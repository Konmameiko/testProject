/* eslint-disable no-unused-expressions */
/*
 * @Description:
 * @Author: KonmaMeiko
 * @Date: 2023-05-22 00:00:52
 * @lastEditTime: Do not edit
 * @LastEditors: KonmaMeiko
 */
import { Component } from 'react';
import styles from './index.less';

export default class buttons extends Component {
	button12 = (e: any) => {
		e.preventDefault;
		e.target.classList.remove(styles.animate);
		e.target.classList.add(styles.animate);
		setTimeout(function () {
			e.target.classList.remove(styles.animate);
		}, 700);
	};

	button14 = (e: any) => {
		e.preventDefault;
		e.target.classList.add(styles.click14);
		setTimeout(function () {
			e.target.classList.remove(styles.click14);
		}, 3000);
	};

	button15 = (e: any) => {
		e.preventDefault;
		if (e.target.classList.contains(styles.click_active15)) {
			e.target.classList.remove(styles.click_active15);
		} else {
			e.target.classList.add(styles.click_active15);
		}
	};

	componentDidMount() {
		const bubblyButtons = document.getElementsByClassName(styles.btn12);
		const button14 = document.getElementsByClassName(styles.btn14)[0];
		for (let i = 0; i < bubblyButtons.length; i++) {
			bubblyButtons[i].addEventListener('click', this.button12, false);
		}
		button14.addEventListener('click', this.button14, false);
	}

	render() {
		return (
			<div className={styles.home}>
				<h1 className={styles.title}>hello, there are some buttons!</h1>
				<div className={styles.buttons}>
					<button className={styles.btn1}>button1</button>
					<button className={styles.btn2}>button2</button>
					<button className={styles.btn3}>
						<span>button3</span>
					</button>
					<button className={styles.btn4}>
						<span>button4</span>
					</button>
					<button className={styles.btn5}>
						<span>button5</span>
					</button>
					<button className={styles.btn6}>
						<span>button6</span>
					</button>
					<button className={styles.btn7}>button7</button>
					<button className={styles.btn8}>button8</button>
					<button className={styles.btn9}>button9</button>
					<button className={styles.btn10}>button10</button>
					<button className={styles.btn11}>button11</button>
					<button className={styles.btn12}>button12</button>
					<button className={styles.btn13}>button13</button>
					<button className={styles.btn14}>
						Send
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
					</button>
					<button className={styles.btn15} id="btn-15" onClick={event => this.button15(event)}></button>
					<button className={styles.btn16}>button16</button>
					<button className={styles.btn17}>button17</button>
				</div>
				<p className={styles.text}>天天摸鱼身体棒</p>
			</div>
		);
	}
}
