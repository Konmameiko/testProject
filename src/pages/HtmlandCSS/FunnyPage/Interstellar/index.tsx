/*
 * @Description:
 * @Author: KonmaMeiko
 * @Date: 2023-05-22 00:00:52
 * @lastEditTime: Do not edit
 * @LastEditors: KonmaMeiko
 */
import React, { Component } from 'react';
import styles from './index.less';
class Index extends Component {
	// eslint-disable-next-line class-methods-use-this
	render() {
		return (
			<div className={styles.trunk}>
				<div className={styles.gContainer}>
					<div className={styles.gGroup}>
						<div className={styles.itemRight}></div>
						<div className={styles.itemLeft}></div>
						<div className={styles.itemTop}></div>
						<div className={styles.itemBottom}></div>
						<div className={styles.itemMiddle}></div>
					</div>
					<div className={styles.gGroup}>
						<div className={styles.itemRight}></div>
						<div className={styles.itemLeft}></div>
						<div className={styles.itemTop}></div>
						<div className={styles.itemBottom}></div>
						<div className={styles.itemMiddle}></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Index;
