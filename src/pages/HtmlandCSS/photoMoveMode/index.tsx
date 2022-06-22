/*
 * @Description: 照片选取页
 * @Author: ly-yuzh
 * @Date: 2022-06-20 17:43:18
 * @LastEditTime: 2022-06-22 22:58:54
 * @LastEditors: KonmaMeiko
 */
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import styles from './index.less';

import image1 from '@/assets/images/1.jpg';
import image2 from '@/assets/images/2.jpg';
import image3 from '@/assets/images/3.jpg';
import image4 from '@/assets/images/4.jpg';
import image5 from '@/assets/images/5.jpg';

export interface IProps {}

const PhotoMode: FC<IProps> = () => {
  const [curWidth, setCurWidth] = useState<string>('30%');
  const [photoWidth, setPhotoWidth] = useState<number>(456);
  const bodyref = useRef<HTMLDivElement>(null);
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
        <li>
          <img src={image1} alt="" />
        </li>
        <li>
          <img src={image2} alt="" />
        </li>
        <li>
          <img src={image3} alt="" />
        </li>
        <li>
          <img src={image4} alt="" />
        </li>
        <li>
          <img src={image5} alt="" />
        </li>
        {/* 防止最后空缺 填补首图 */}
        <li>
          <img src={image1} alt="" />
        </li>
      </ul>
    </div>
  );
};
//memo的使用在不希望一直跟随父组件更新的子组件上
export default React.memo(PhotoMode);
