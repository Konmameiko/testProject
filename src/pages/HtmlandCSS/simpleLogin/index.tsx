/*
 * @Description:
 * @Author: KonmaMeiko
 * @Date: 2023-05-22 00:00:52
 * @lastEditTime: Do not edit
 * @LastEditors: KonmaMeiko
 */
import { useState } from 'react';
import styles from './index.less';

const index = (props: any) => {
	const [flag, setFlag] = useState(false);
	const login = (e: any) => {
		e.preventDefault();
		let form = document.getElementsByName('form')[0];
		form.style.display = 'none';
		setFlag(true);
	};

	return (
		<div className={styles.wrapper} id="wrapper">
			<div className={styles.container}>
				<h1 style={{ transform: flag ? 'translateY(85px)' : 'none' }}>Welcome</h1>
				<form className={styles.form} name="form">
					<input type="text" placeholder="Username" />
					<input type="password" placeholder="Password" />
					<button type="submit" onClick={login}>
						Login
					</button>
				</form>
			</div>
			<ul className={styles.bgBubbles}>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
	);
};

export default index;
