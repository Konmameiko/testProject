import { useState } from 'react';
import styles from './index.less';

const PANELS = [1, 2, 3, 4];

export default function PhotoRotate() {
	const [active, setActive] = useState(1);

	return (
		<div className={styles.box}>
			<ul className={styles.piclist}>
				<li style={{ transform: `rotateX(${-(active - 1) * 90}deg)` }}>
					<a href="#">1</a>
					<a href="#">2</a>
					<a href="#">3</a>
					<a href="#">4</a>
					<span />
					<span />
				</li>
			</ul>
			<ol className={styles.btns}>
				{PANELS.map(i => (
					<li key={i} className={active === i ? styles.active : ''} onClick={() => setActive(i)}>
						{i}
					</li>
				))}
			</ol>
		</div>
	);
}
