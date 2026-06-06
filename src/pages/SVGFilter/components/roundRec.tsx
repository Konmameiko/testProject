/*
 * @Description: 圆角滤镜
 * @Author: KonmaMeiko
 * @Date: 2022-10-10 17:53:17
 * @LastEditTime: 2026-06-05 00:00:00
 * @LastEditors: KonmaMeiko
 */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import styles from './basic.less';
import img from '@/assets/images/2.webp';

export default class RoundRec extends Component {
	render() {
		return (
			<div className={styles.roundRecWrapper}>
				{/* 三角形模糊滤镜 */}
				<div
					style={{
						border: '60px solid transparent',
						borderLeft: '120px solid #f48',
						filter: 'url(#blur)',
					}}
				/>
				{/* 图片模糊滤镜 */}
				<img src={img} className={styles.roundRecImg} style={{ filter: 'url(#blur)' }} alt="round blur demo" />
				<svg width="0" height="0">
					<filter id="blur" colorInterpolationFilters="sRGB">
						<feGaussianBlur stdDeviation="10" />
						<feComponentTransfer>
							<feFuncA type="table" tableValues="0 0 10" />
						</feComponentTransfer>
					</filter>
				</svg>
			</div>
		);
	}
}
