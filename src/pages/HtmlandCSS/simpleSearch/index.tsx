import { event } from 'jquery';
import React from 'react';
import styles from './index.less';

function index() {
	function searchToggle(e: any) {
		const body1 = document.getElementsByClassName(styles.searchWrapper)[0];
		if (!body1.classList.contains(styles.active)) {
			console.log('chufa');
			body1.classList.add(styles.active);
			e.preventDefault();
		} else {
			body1.classList.remove(styles.active);
		}
	}

	function closeToggle(e: any) {
		const body1 = document.getElementsByClassName(styles.searchWrapper)[0];
		body1.classList.remove(styles.active);
	}

	return (
		<div className={styles.searchWrapper}>
			<div className={styles.input}>
				<input type="text" className={styles.search} placeholder="Type to search" />
				<button className={styles.icon} onClick={searchToggle}>
					<span></span>
				</button>
			</div>
			<span className={styles.close} onClick={closeToggle}></span>
		</div>
	);
}

export default index;
