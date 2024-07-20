/*
 * @Description:
 * @Author: KonmaMeiko
 * @Date: 2023-05-22 00:00:52
 * @lastEditTime: Do not edit
 * @LastEditors: KonmaMeiko
 */
import { Component } from 'react';
import styles from './index.less';

export default class PhotoRotate extends Component {
	piclist: any;
	btns: any;
	onRotate = (e: any, value: any) => {
		for (let i of this.btns.children) {
			if ((i.className = styles.active)) {
				i.className = '';
			}
		}
		e.target.className = styles.active;
		let current = -(value - 1) * 90;
		this.piclist.style.transform = 'rotateX(' + current + 'deg)';
	};

	render() {
		return (
			<div className={styles.box}>
				<ul className={styles.piclist}>
					<li ref={e => (this.piclist = e)}>
						<a href="#">1</a>
						<a href="#">2</a>
						<a href="#">3</a>
						<a href="#">4</a>
						<span></span>
						<span></span>
					</li>
				</ul>
				<ol ref={e => (this.btns = e)} className={styles.btns}>
					<li className={styles.active} onClick={e => this.onRotate(e, 1)}>
						1
					</li>
					<li onClick={e => this.onRotate(e, 2)}>2</li>
					<li onClick={e => this.onRotate(e, 3)}>3</li>
					<li onClick={e => this.onRotate(e, 4)}>4</li>
				</ol>
			</div>
		);
	}
}
