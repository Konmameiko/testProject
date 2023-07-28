/*
 * @Description:
 * @Author: KonmaMeiko
 * @Date: 2023-05-22 00:00:52
 * @lastEditTime: Do not edit
 * @LastEditors: KonmaMeiko
 */
import React, { Component } from 'react';
import styles from './wave.less';

export default class wave extends Component {
	// eslint-disable-next-line class-methods-use-this
	render() {
		return (
			<div className={styles.body1}>
				<div className={styles.sun}></div>
				<div className={styles.ocean}>
					<div className={styles.wave}></div>
					<div className={styles.wave}></div>
				</div>
			</div>
		);
	}
}
