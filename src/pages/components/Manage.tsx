import React, { FC, useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { history } from 'umi';
import data from './codeStr.json'
import styles from './manage.less';
import 'swiper/swiper-bundle.css';
import clickProgressBar from '../clickProgressBar/clickProgressBar';
import { CustomBlending } from 'three';

const Manage =({}) => {
    const swiperRef = useRef<any>(null);
    const swiperTwoRef = useRef<any>(null);


    const changeSwiper = () =>{
        if(swiperRef.current){
            swiperTwoRef.current.slideToLoop(swiperRef.current.realIndex);
        }
    }

    return (
        // <div onWheel={(e) => this.handleScroll(e)}>
        <div>
            <div className={styles.manage}>
                <h1>Photos Gallery</h1>
                <div className={styles.swipers}>
                    <Swiper
                    centeredSlides={true}   // 滑动至居中
                    slidesPerView={1}
                    className={styles.mySwiper}
                    preventInteractionOnTransition={true}
                    onSlideChange={() => changeSwiper()}
                    onSwiper={(swiper) =>
                    {
                        swiperRef.current = swiper
                    }}
                    loop={true}
                    >
                        <div className={styles.left} onClick={() => swiperRef.current.slidePrev()}>
                            <svg width="60px" height="80px" viewBox="0 0 50 80" xmlSpace="preserve">
                                <polyline fill="#008cff" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="
                                45.63,75.8 0.375,38.087 45.63,0.375 "/>
                            </svg> 
                        </div>
                        <div className={styles.right} onClick={() => swiperRef.current.slideNext()}>
                            <svg width="60px" height="80px" viewBox="0 0 50 80" xmlSpace="preserve">
                                <polyline fill="#008cff" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="
                                0.375,0.375 45.63,38.087 0.375,75.8 "/>
                            </svg>
                        </div>
                        <SwiperSlide>
                            <img className={`${styles.managePhoto} ${styles.blur}`}
                            src={require('@/assets/images/18.png')}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className={`${styles.managePhoto} ${styles.invert}`}
                            src={require('@/assets/images/11.jpg')}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className={`${styles.managePhoto} ${styles.brightness}`}
                            src={require('@/assets/images/18.png')}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className={`${styles.managePhoto} ${styles.grayscale}`}
                            src={require('@/assets/images/11.jpg')}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                            className={`${styles.managePhoto} ${styles.contrast}`}
                            src={require('@/assets/images/18.png')}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className={`${styles.managePhoto} ${styles.sepia}`}
                            src={require('@/assets/images/11.jpg')}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className={`${styles.managePhoto} ${styles.hueRotate}`}
                            src={require('@/assets/images/18.png')}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className={`${styles.managePhoto} ${styles.saturate}`}
                            src={require('@/assets/images/11.jpg')}/>
                        </SwiperSlide>
                    </Swiper>

                    <Swiper
                    centeredSlides={true}   // 滑动至居中
                    slidesPerView={1}
                    className={styles.mySwiper2}
                    preventInteractionOnTransition={true}
                    onSwiper={(swiper) =>
                    {
                        swiperTwoRef.current = swiper
                    }}
                    loop={true}
                    >
                        <SwiperSlide>
                            <CodePart title='图片模糊' codeStr={data.data[0].codeStr}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CodePart title='图片反转' codeStr={data.data[1].codeStr}/>  
                        </SwiperSlide>
                        <SwiperSlide>
                            <CodePart title='图片暗化' codeStr={data.data[2].codeStr}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CodePart title='图片灰化' codeStr={data.data[3].codeStr}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CodePart title='图片对比度' codeStr={data.data[4].codeStr}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CodePart title='图片棕化' codeStr={data.data[5].codeStr}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CodePart title='色相变化' codeStr={data.data[6].codeStr}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CodePart title='图片饱和度' codeStr={data.data[7].codeStr}/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <button className={styles.btn} onClick={()=>history.go(-1)}>返回</button>
        </div>
    );
}

interface Iprops{
    title: string;
    codeStr: string;
}

const CodePart = ({title, codeStr}:Iprops) => {

    const [arr, setArr] = useState<Array<string>>([]);
    useEffect(()=>{
        const arr = codeStr.split(';');
        setArr(arr);
    },[])

    return(
        <div className={styles.codePart}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.code}>
                {arr.map((item, index)=>{
                        if(index < (arr.length-1))
                        return <p key={index} className={styles.codeStr}>{item + ';'}</p>
                    }
                )}
            </div>
        </div>
    );
}

export default Manage;
