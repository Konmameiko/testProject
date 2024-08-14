import React from 'react';
import styles from './frosted.scss';

function frosted() {
	return (
		<div className={styles.body1}>
			<div className={styles.dropShadow}>
				<div className={styles.glass}></div>
				<span>FROSTED GLASS</span>
			</div>
		</div>
	);
}

export default frosted;
