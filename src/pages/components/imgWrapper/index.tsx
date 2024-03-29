/*
 * @Description: 瀑布流
 * @Author: KonmaMeiko
 * @Date: 2022-09-19 19:17:05
 * @LastEditTime: 2023-05-01 22:22:40
 * @LastEditors: KonmaMeiko
 */
import React, { FC } from 'react';
import styles from './index.less';
import pic1 from '../../../assets/images/1.webp';
import pic2 from '../../../assets/images/2.webp';
import pic3 from '../../../assets/images/3.webp';
import pic4 from '../../../assets/images/4.webp';
import pic5 from '../../../assets/images/22.webp';
import pic6 from '../../../assets/images/6.webp';
import pic7 from '../../../assets/images/12.webp';
import pic8 from '../../../assets/images/25.webp';
import pic9 from '../../../assets/images/26.webp';
import pic10 from '../../../assets/images/18.webp';
import pic11 from '../../../assets/images/23.webp';

export interface IProps {}

const ImgWrapper: FC<IProps> = () => {
	return (
		<ul className={styles.imgWrapper}>
			<li>
				<img src={pic1} alt="" />
			</li>
			<li>
				<img src={pic2} alt="" />
			</li>
			<li>
				<img src={pic3} alt="" />
			</li>
			<li>
				<img src={pic4} alt="" />
			</li>
			<li>
				<img src={pic5} alt="" />
			</li>
			<li>
				<img src={pic6} alt="" />
			</li>
			<li>
				<img src={pic7} alt="" />
			</li>
			<li>
				<img src={pic8} alt="" />
			</li>
			<li>
				<img src={pic9} alt="" />
			</li>
			<li>
				<img src={pic10} alt="" />
			</li>
			<li>
				<img src={pic11} alt="" />
			</li>
			<li>
				<img src={pic8} alt="" />
			</li>
			<li>
				<img src={pic6} alt="" />
			</li>
			<li>
				<img src={pic3} alt="" />
			</li>
			<li>
				<img src={pic1} alt="" />
			</li>
			<li>
				<img src={pic2} alt="" />
			</li>
			<li>
				<img src={pic7} alt="" />
			</li>
			<li>
				<img src={pic9} alt="" />
			</li>
		</ul>
	);
};
// memo的使用在不希望一直跟随父组件更新的子组件上
export default React.memo(ImgWrapper);
