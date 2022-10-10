/*
 * @Description: 圆角滤镜
 * @Author: KonmaMeiko
 * @Date: 2022-10-10 17:53:17
 * @lastEditTime: Do not edit
 * @LastEditors: KonmaMeiko
 */

import React, { FC } from 'react';
import styles from './basic.less';
import img from '@/assets/images/2.jpg';
export interface IProps {}

const RoundRec: FC<IProps> = () => {
  return (
    <div className={styles.content}>
      <div
        style={{
          border: '60px solid transparent',
          borderLeft: '120px solid #f48',
          filter: 'url(#blur)',
        }}
      />
      <img src={img} style={{ width: 400, filter: 'url(#blur)' }} />
      <svg width="0">
        <filter id="blur" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="10" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0 10" />
          </feComponentTransfer>
        </filter>
      </svg>
    </div>
  );
};
//memo的使用在不希望一直跟随父组件更新的子组件上
export default React.memo(RoundRec);
