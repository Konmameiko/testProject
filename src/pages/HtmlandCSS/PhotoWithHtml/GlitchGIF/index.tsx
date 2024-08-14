import React, { FC } from 'react';
import styles from './index.scss';
export interface type1 {}
const GlitchGIF: FC<type1> = () => {
	return <div className={styles.glitch_body} />;
};
//memo的使用在不希望一直跟随父组件更新的子组件上
export default React.memo(GlitchGIF);
