/*
 * @Description: 照片选取页
 * @Author: KonmaMeiko
 * @Date: 2022-06-20 17:43:18
 * @LastEditTime: 2022-08-04 20:34:25
 * @LastEditors: KonmaMeiko
 */
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import styles from './index.less';

import image1 from '@/assets/images/1.jpg';
import image2 from '@/assets/images/2.jpg';
import image3 from '@/assets/images/3.jpg';
import image4 from '@/assets/images/4.jpg';
import image5 from '@/assets/images/5.jpg';
import image6 from '@/assets/images/12.gif';

import voice1 from '@/assets/audios/windy.mp3';
export interface IProps {}

const PhotoMode: FC<IProps> = () => {
  let timer: NodeJS.Timeout | null = null;
  const ulRef = useRef<HTMLUListElement>(null);
  const animFlag = useRef<boolean>(false);
  const refArr = useRef<Array<any>>([]);
  const [curWidth, setCurWidth] = useState<string>('30%');
  const [photoWidth, setPhotoWidth] = useState<number>(0);

  const items = [
    { src: image1, text: '天姥连天向天横' },
    { src: image2, text: '势拔五岳掩赤城' },
    { src: image3, text: '天台四万八千丈' },
    { src: image6, text: '对此欲倒东南倾' },
    { src: image4, text: '我欲因之梦吴越' },
    { src: image1, text: '天姥连天向天横' },
  ];
  const timeTable = [
    { type: 'normal', time: 3500 },
    { type: 'normal', time: 3500 },
    { type: 'pause', time: 8000 },
    { type: 'normal', time: 3500 },
    { type: 'normal', time: 3500 },
    { type: 'normal', time: 3500 },
  ];
  const len = timeTable.length;
  const handleTimeTable = (
    timeTableObj: { type: string; time: number },
    index: number,
  ): void => {
    if (timeTableObj.type === 'pause') {
      pasueAnimation(true);
      animFlag.current = true;
    } else if (animFlag.current && timeTableObj.type === 'normal') {
      animFlag.current = false;
      pasueAnimation(false);
    }
    timer = setTimeout(() => {
      timer && clearTimeout(timer);
      handleTimeTable(timeTable[index++ % len], index++);
    }, timeTableObj.time);
  };

  const pasueAnimation = (flag: boolean) => {
    if (flag && ulRef.current) {
      // 开始暂停
      ulRef.current.style.animationPlayState = 'paused';
      refArr.current?.map((item) => {
        if (item) {
          item.style.animationPlayState = 'paused';
        }
      });
    }
    if (!flag && ulRef.current) {
      ulRef.current.style.animationPlayState = 'running';
      refArr.current?.map((item) => {
        if (item) {
          item.style.animationPlayState = 'running';
        }
      });
    }
  };

  useEffect(() => {
    setCurWidth('80%');
    setPhotoWidth(document.body.clientWidth * 0.8);
    handleTimeTable(timeTable[0], 0);
    return () => {
      timer && clearTimeout(timer);
      animFlag.current = false;
    };
  }, []);

  const handleClick = () => {
    if (curWidth === '80%') {
      setPhotoWidth(document.body.clientWidth * 0.4);
      setCurWidth('40%');
    } else {
      setPhotoWidth(document.body.clientWidth * 0.8);
      setCurWidth('80%');
    }
  };

  const getRefElement = (dom: any) => {
    if (!dom) return;
    if (refArr?.current.length < items?.length) refArr?.current?.push(dom);
    else return;
  };

  return (
    <div
      style={{ width: curWidth }}
      className={styles.container}
      onClick={() => handleClick()}
    >
      <ul
        ref={ulRef}
        style={{
          '--s': 5,
          '--w': photoWidth,
          '--speed': '3.5s',
          fontSize: `${photoWidth / 3000 > 0.3 ? 0.3 : photoWidth / 3000}rem`,
        }}
      >
        {items.map((item) => {
          return (
            <li key={item.src} ref={(dom) => getRefElement(dom)}>
              <img src={item.src} alt="" />
              <p>{item.text}</p>
            </li>
          );
        })}
      </ul>
      <AudioPlay />
    </div>
  );
};

const AudioPlay = () => {
  return (
    <audio
      style={{ position: 'absolute', top: 0 }}
      src={voice1} // 引入本地音频
      autoPlay
      // loop
      // controls={true}
      onEnded={() => {
        console.log('what fuck');
      }}
      crossOrigin="anonymous"
    />
  );
};
interface IliProps {
  image: string;
  text: string;
}
//memo的使用在不希望一直跟随父组件更新的子组件上
export default React.memo(PhotoMode);
