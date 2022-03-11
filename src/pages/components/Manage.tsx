import React, { FC, useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { history } from 'umi';
import styles from './manage.less';
import 'swiper/swiper-bundle.css';

const Manage =({}) => {

    const timer:NodeJS.Timeout | null = null;
    const swiperRef = useRef<any>(null);
    const changeSwiper = (dire:string) =>{
        if(dire === 'left'){
            swiperRef.current.slidePrev();
        }else{
            swiperRef.current.slideNext();
        }
    }

    return (
        // <div onWheel={(e) => this.handleScroll(e)}>
        <div>
            <div className={styles.manage}>
                <h1>Photos Gallery</h1>
                <div alt="左按钮" className={styles.left} onClick={()=>changeSwiper('left')}/>
                <div alt="右按钮" className={styles.right} onClick={()=>changeSwiper('right')}/>
                <Swiper
                centeredSlides={true}   // 滑动至居中
                slidesPerView={1}
                className={styles.mySwiper}
                preventInteractionOnTransition={true}
                onSwiper={(swiper) => 
                {
                    swiperRef.current = swiper
                }}
                loop={true}
                >
                    <SwiperSlide>
                        <img className={`${styles.managePhoto} ${styles.blur}`} 
                        src={require('@/assets/images/18.png')}/>
                        <span>图片模糊</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={`${styles.managePhoto} ${styles.invert}`} 
                        src={require('@/assets/images/11.jpg')}/>
                        <span>图片反转</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={`${styles.managePhoto} ${styles.brightness}`} 
                        src={require('@/assets/images/18.png')}/>
                        <span>图片暗化</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={`${styles.managePhoto} ${styles.grayscale}`} 
                        src={require('@/assets/images/11.jpg')}/>
                        <span>图片灰化</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img 
                        className={`${styles.managePhoto} ${styles.contrast}`} 
                        src={require('@/assets/images/18.png')}/>
                        <span>图片对比度</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={`${styles.managePhoto} ${styles.sepia}`} 
                        src={require('@/assets/images/11.jpg')}/>
                        <span>图片棕化</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={`${styles.managePhoto} ${styles.hueRotate}`} 
                        src={require('@/assets/images/18.png')}/>
                        <span>色相变化</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={`${styles.managePhoto} ${styles.saturate}`} 
                        src={require('@/assets/images/11.jpg')}/>
                        <span>图片饱和度</span>
                    </SwiperSlide>
                </Swiper>
            </div>  
            <button className={styles.btn} onClick={()=>history.go(-1)}>返回</button>
        </div>
    );
}

export default Manage;
