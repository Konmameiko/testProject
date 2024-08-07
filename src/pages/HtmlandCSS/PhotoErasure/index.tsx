/*
 * @Description:
 * @Author: KonmaMeiko
 * @Date: 2023-05-22 00:00:52
 * @lastEditTime: Do not edit
 * @LastEditors: KonmaMeiko
 */
import { Component } from 'react';
import styles from './index.less';
import Scratch from 'react-scratch-perfect';

class PhotoErasure extends Component {
	render() {
		return (
			<div className={styles.body}>
				<Scratch
					//填充图片
					img={require('@/assets/images/32.webp')}
					//内部图片与上下左右的间距值
					round={[0, 0, 0, 0]}
					//画笔直径
					size={50}
					//完成多少算结束
					percentage={70}
					//结束后是否清空画布
					clear={true}
					//鼠标抬起时触发事件
					mode="end"
					className={styles.scratch}
					/* imgRepeat:
                        width: 宽度撑满，高度自适应并居中
                        ]height: 高度撑满，宽度自适应并居中
                        repeat: 重复填充
                        无值或者其他值会被拉伸铺满容器
                    */
				>
					<img className={styles.img2} src={require('@/assets/images/8.webp')} alt="" />
				</Scratch>
			</div>
		);
	}
}

export default PhotoErasure;
