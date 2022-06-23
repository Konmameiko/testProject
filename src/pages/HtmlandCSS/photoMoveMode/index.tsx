/*
 * @Description: 照片选取页
 * @Author: ly-yuzh
 * @Date: 2022-06-20 17:43:18
 * @LastEditTime: 2022-06-23 22:17:11
 * @LastEditors: KonmaMeiko
 */
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import styles from './index.less';

import image1 from '@/assets/images/1.jpg';
import image2 from '@/assets/images/2.jpg';
import image3 from '@/assets/images/3.jpg';
import image4 from '@/assets/images/4.jpg';
import image5 from '@/assets/images/5.jpg';

import voice1 from '@/assets/audios/windy.mp3';
export interface IProps {}

const PhotoMode: FC<IProps> = () => {
  const [curWidth, setCurWidth] = useState<string>('30%');
  const [photoWidth, setPhotoWidth] = useState<number>(0);
  const bodyref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurWidth('50%');
    setPhotoWidth(document.body.clientWidth * 0.5);
  }, []);

  const handleClick = () => {
    if (curWidth === '80%') {
      setPhotoWidth(document.body.clientWidth * 0.5);
      setCurWidth('50%');
    } else {
      setPhotoWidth(document.body.clientWidth * 0.8);
      setCurWidth('80%');
    }
    // console.log(bodyref.current?.clientWidth);
  };

  return (
    <div
      style={{ width: curWidth }}
      ref={bodyref}
      className={styles.container}
      onClick={() => handleClick()}
    >
      <ul style={{ '--s': 5, '--w': photoWidth, '--speed': '3.5s' }}>
        <LiItem image={image1} text={'天姥连天向天横'} />
        <LiItem image={image2} text={'势拔五岳掩赤城'} />
        <LiItem image={image3} text={'天台四万八千丈'} />
        <LiItem image={image4} text={'对此欲倒东南倾'} />
        <LiItem image={image5} text={'我欲因之梦吴越'} />
        {/* 防止最后空缺 填补首图 */}
        <LiItem image={image1} text={'天姥连天向天横'} />
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
const LiItem = (props: IliProps) => {
  const { image, text } = props;
  return (
    <li>
      <img src={image} alt="" />
      <p>{text}</p>
    </li>
  );
};
//memo的使用在不希望一直跟随父组件更新的子组件上
export default React.memo(PhotoMode);
