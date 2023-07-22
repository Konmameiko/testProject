import React, { FC, useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { history } from 'umi';
import styles from './manage.scss';
import image1 from '../../assets/images/7.webp';
import image2 from '../../assets/images/11.webp';
import image3 from '../../assets/images/18.webp';
import image4 from '../../assets/images/20.webp';
import image5 from '../../assets/images/25.webp';
import image6 from '../../assets/images/27.webp';
import 'swiper/swiper-bundle.css';

interface textProps {
	title: string;
	codeStr: Array<string>;
}
interface stylyProps {
	style: string;
}
interface JSONProps {
	textData: textProps[];
	styleData: stylyProps[];
}

const Manage = ({}) => {
	const swiperRef = useRef<any>(null);
	const swiperTwoRef = useRef<any>(null);
	const [data, setData] = useState<JSONProps | null>(null);
	const imageArr = [image1, image2, image3, image4, image5, image6];

	useEffect(() => {
		const tmpData = require('./codeStr.json');
		setData(tmpData);
	}, []);

	const changeSwiper = () => {
		if (swiperRef.current) {
			swiperTwoRef.current.slideToLoop(swiperRef.current.realIndex);
		}
	};

	return (
		<div>
			<div className={styles.manage}>
				<h1>Photos Gallery</h1>
				<div className={styles.swipers}>
					<Swiper
						centeredSlides={true} // 滑动至居中
						slidesPerView={1}
						className={styles.mySwiper}
						preventInteractionOnTransition={true}
						onSlideChange={() => changeSwiper()}
						onSwiper={swiper => {
							swiperRef.current = swiper;
						}}
						// loop={true}
					>
						<div className={styles.left} onClick={() => swiperRef.current.slidePrev()}>
							<svg width="60px" height="80px" viewBox="0 0 50 80" xmlSpace="preserve">
								<polyline
									fill="#008cff"
									stroke="#FFFFFF"
									strokeWidth="1"
									strokeLinecap="round"
									strokeLinejoin="round"
									points="45.63,75.8 0.375,38.087 45.63,0.375 "
								/>
							</svg>
						</div>
						<div className={styles.right} onClick={() => swiperRef.current.slideNext()}>
							<svg width="60px" height="80px" viewBox="0 0 50 80" xmlSpace="preserve">
								<polyline
									fill="#008cff"
									stroke="#FFFFFF"
									strokeWidth="1"
									strokeLinecap="round"
									strokeLinejoin="round"
									points="0.375,0.375 45.63,38.087 0.375,75.8 "
								/>
							</svg>
						</div>
						{data
							? data?.styleData.map((item: stylyProps, index: number) => {
									return (
										<SwiperSlide key={item.style}>
											<img className={`${styles.managePhoto} ${styles[item.style]}`} src={imageArr[index % 6]} />
										</SwiperSlide>
									);
							  })
							: null}
					</Swiper>

					<Swiper
						centeredSlides={true} // 滑动至居中
						slidesPerView={1}
						className={styles.mySwiper2}
						preventInteractionOnTransition={true}
						onSwiper={swiper => {
							swiperTwoRef.current = swiper;
						}}
					>
						{data
							? data.textData.map((item: textProps) => {
									return (
										<SwiperSlide key={item.title}>
											<CodePart title={item.title} codeStr={item.codeStr} />
										</SwiperSlide>
									);
							  })
							: null}
					</Swiper>
				</div>
			</div>
			<button className={styles.btn} onClick={() => history.go(-1)}>
				返回
			</button>
		</div>
	);
};

const CodePart = ({ title, codeStr }: textProps) => {
	return (
		<div className={styles.codePart}>
			<h1 className={styles.title}>{title}</h1>
			<div className={styles.code}>
				{codeStr.map((item, index) => {
					if (index <= codeStr.length - 1)
						return (
							<p key={index} className={styles.codeStr}>
								{item}
							</p>
						);
				})}
			</div>
		</div>
	);
};

export default Manage;
