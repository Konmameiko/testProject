/*
 * @Description: 功能首页
 * @Author: ly-yuzh
 * @Date: 2022-07-28 16:21:56
 * @LastEditTime: 2022-07-28 16:24:13
 * @LastEditors: ly-yuzh
 */
import React, { FC } from 'react';
import SliceRender from './sliceRender/sliceRender';

interface IProps {
  onSomething: () => void;
}

const UtilsHome: FC<IProps> = ({ onSomething }) => {
  return <SliceRender></SliceRender>;
};
//memo的使用在不希望一直跟随父组件更新的子组件上
export default React.memo(UtilsHome);
