/*
 * @Description: 马赛克SVG滤镜
 * @Author: KonmaMeiko
 * @Date: 2022-05-27 14:26:40
 * @LastEditTime: 2022-10-10 17:51:23
 * @LastEditors: KonmaMeiko
 */
import React, { FC } from 'react'
import logo from '../../../assets/images/11.webp'
export interface IProps {}

const MosaicEffect: FC<IProps> = () => {
	return (
		<div className="App">
			<img
				src={`${logo}?`}
				style={{
					// width:400,
					height: '70vh',
					imageRendering: 'pixelated',
					filter: `url(#pixelate)`,
				}}
				className="App-logo"
				alt="logo"
			/>
			<svg>
				<filter id="pixelate" x="0" y="0">
					<feFlood x="4" y="4" height="2" width="2" />
					<feComposite width="8" height="8" />
					<feTile result="a" />
					<feComposite in="SourceGraphic" in2="a" operator="in" />
					<feMorphology operator="dilate" radius="5" />
				</filter>
			</svg>
		</div>
	)
}
//memo的使用在不希望一直跟随父组件更新的子组件上
export default React.memo(MosaicEffect)
