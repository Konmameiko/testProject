import React, { Component } from 'react';
import styles from './wave.less';

export default class wave extends Component {
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
