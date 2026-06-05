/*
 * @Description: 马赛克SVG滤镜
 * @Author: KonmaMeiko
 * @Date: 2022-05-27 14:26:40
 * @LastEditTime: 2026-06-05 00:00:00
 * @LastEditors: KonmaMeiko
 */
import React, { Component } from 'react';
import logo from '../../../assets/images/11.webp';
import styles from './basic.less';

export default class MosaicEffect extends Component {
	render() {
		return (
			<div className={styles.mosaicDemo}>
				<img src={`${logo}?`} className={styles.mosaicImg} style={{ filter: 'url(#pixelate)' }} alt="mosaic demo" />
				<svg width="0" height="0">
					<filter id="pixelate" x="0" y="0">
						<feFlood x="4" y="4" height="2" width="2" />
						<feComposite width="8" height="8" />
						<feTile result="a" />
						<feComposite in="SourceGraphic" in2="a" operator="in" />
						<feMorphology operator="dilate" radius="5" />
					</filter>
				</svg>
			</div>
		);
	}
}
