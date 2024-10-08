/*
 * @Description:
 * @Author: KonmaMeiko
 * @Date: 2023-03-11 17:03:20
 * @lastEditTime: Do not edit
 * @LastEditors: KonmaMeiko
 */
import React, { Component } from 'react';
import styles from './index.scss';

export default class SlidingPhoto extends Component {
	photolist: any;

	onmouseover = (value: any) => {
		return () => {
			for (let i = 0; i < 5; i++) {
				if (i <= value) {
					this.statrMove(this.photolist.children[i], { left: i * 100 }, '');
				} else {
					this.statrMove(this.photolist.children[i], { left: 450 + (i - 1) * 100 }, '');
				}
			}
		};
	};

	getStyle = (obj: any, attr: any) => {
		if (obj.currentStyle) {
			return obj.currentStyle[attr];
		} else {
			return getComputedStyle(obj, 'false')[attr];
		}
	};

	statrMove = (obj: any, json: any, endFn: any) => {
		clearInterval(obj.timer);
		obj.timer = setInterval(() => {
			let bBtn = true;
			// eslint-disable-next-line guard-for-in
			for (let attr in json) {
				let iCur = 0;
				if (attr === 'opacity') {
					if (Math.round(parseFloat(this.getStyle(obj, attr)) * 100) == 0) {
						iCur = Math.round(parseFloat(this.getStyle(obj, attr)) * 100);
					} else {
						iCur = Math.round(parseFloat(this.getStyle(obj, attr)) * 100) || 100;
					}
				} else {
					iCur = parseInt(this.getStyle(obj, attr)) || 0;
				}
				let iSpeed = (json[attr] - iCur) / 8;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				if (iCur !== json[attr]) {
					bBtn = false;
				}
				if (attr === 'opacity') {
					obj.style.filter = 'alpha(opacity=' + (iCur + iSpeed) + ')';
					obj.style.opacity = (iCur + iSpeed) / 100;
				} else {
					obj.style[attr] = iCur + iSpeed + 'px';
				}
			}
			if (bBtn) {
				clearInterval(obj.timer);
				if (endFn) {
					endFn.call(obj);
				}
			}
		}, 30);
	};

	render() {
		return (
			<div className={styles.box}>
				<ul ref={e => (this.photolist = e)}>
					<li className={styles.photo1} onMouseOver={this.onmouseover(0)}>
						<img src={require('@/assets/images/3.webp')} alt="" />
					</li>
					<li className={styles.photo2} onMouseOver={this.onmouseover(1)}>
						<img src={require('@/assets/images/4.webp')} alt="" />
					</li>
					<li className={styles.photo3} onMouseOver={this.onmouseover(2)}>
						<img src={require('@/assets/images/7.webp')} alt="" />
					</li>
					<li className={styles.photo4} onMouseOver={this.onmouseover(3)}>
						<img src={require('@/assets/images/28.webp')} alt="" />
					</li>
					<li className={styles.photo5} onMouseOver={this.onmouseover(4)}>
						<img src={require('@/assets/images/25.webp')} alt="" />
					</li>
				</ul>
			</div>
		);
	}
}
