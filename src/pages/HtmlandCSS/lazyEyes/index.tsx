/*
 * @Description: 跟随鼠标转动的模拟眼睛
 * @Author: ly-yuzh
 * @Date: 2022-08-29 15:47:18
 * @LastEditTime: 2022-08-29 15:57:07
 * @LastEditors: ly-yuzh
 */
import React, { FC } from 'react';
import styles from './index.less';

export interface IProps {}

const LazyEye: FC<IProps> = () => {
  return (
    <div className={styles.body}>
      <div className={styles.eyeSocket}>
        <div className={styles.eyeBall}></div>
      </div>
    </div>
  );
};
//memo的使用在不希望一直跟随父组件更新的子组件上
export default React.memo(LazyEye);
