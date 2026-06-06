/*
 * @Description: SVG滤镜实现光晕特效
 * @Author: KonmaMeiko
 * @Date: 2022-05-27 14:13:47
 * @LastEditTime: 2026-06-05 00:00:00
 * @LastEditors: KonmaMeiko
 */
import React, { Component } from 'react';
import styles from './basic.less';

export default class HaloEffect extends Component {
	/* eslint-disable-next-line class-methods-use-this */
	render() {
		return (
			<div className={styles.content}>
				{/* 六边形外发光 */}
				<div className={styles.svgDemo}>
					<svg
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						x="0"
						y="0"
						width="300px"
						height="300px"
						viewBox="0 0 300 300"
						xmlSpace="preserve"
						filter="url(#puzzleNormalShadow)"
					>
						<path
							fill="rgba(255, 255, 255, 0.9)"
							d="M50 119.28203230275508L90 50L170 50L210 119.28203230275508L170 188.56406460551017L90 188.56406460551017Z"
						/>
						<filter id="puzzleNormalShadow" x="-50%" y="-50%" width="200%" height="200%">
							<feGaussianBlur in="SourceAlpha" stdDeviation="13" />
							<feMorphology operator="dilate" radius="15" result="offsetblur" />
							<feFlood floodColor="#58a6ff" floodOpacity="0.75" />
							<feComposite result="outblur" in2="offsetblur" operator="in" />
							<feFlood floodColor="#58a6ff" floodOpacity="0.75" />
							<feComposite in2="SourceGraphic" operator="out" />
							<feGaussianBlur stdDeviation="50" />
							<feComposite result="inblur" in2="SourceGraphic" operator="atop" />
							<feMerge>
								<feMergeNode in="outblur" />
								<feMergeNode in="inblur" />
							</feMerge>
						</filter>
					</svg>
				</div>

				{/* 三角形外发光 */}
				<div className={styles.svgDemo}>
					<svg
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						x="0"
						y="0"
						width="300px"
						height="300px"
						viewBox="0 0 300 300"
						xmlSpace="preserve"
						filter="url(#puzzleNormalShadow1)"
					>
						<path fill="rgba(255, 255, 255, 0.9)" d="M150 40 L260 220 L40 220 Z" />
						<filter id="puzzleNormalShadow1" x="-50%" y="-50%" width="200%" height="200%">
							<feGaussianBlur in="SourceAlpha" stdDeviation="13" />
							<feMorphology operator="dilate" radius="15" result="offsetblur" />
							<feFlood floodColor="#f85149" floodOpacity="0.75" />
							<feComposite result="outblur" in2="offsetblur" operator="in" />
							<feMerge>
								<feMergeNode in="outblur" />
							</feMerge>
						</filter>
					</svg>
				</div>
			</div>
		);
	}
}
