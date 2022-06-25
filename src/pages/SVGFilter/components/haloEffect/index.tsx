/*
 * @Description: SCG滤镜实现光晕特效
 * @Author: KonmaMeiko
 * @Date: 2022-05-27 14:13:47
 * @LastEditTime: 2022-05-27 16:28:36
 * @LastEditors: KonmaMeiko
 */
import React, { FC } from 'react';
import styles from '../basic.less';

export interface IProps {}

const HaloEffect: FC<IProps> = () => {
  return (
    <div className={styles.content}>
      <div
        style={{
          width: '40%',
          height: '100%',
          border: '1px solid pink',
          display: 'inline-block',
        }}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0"
          y="0"
          width="300px"
          height="300px"
          viewBox="0 0 300 300"
          xmlSpace="preserve"
          filter="url(#puzzleNormalShadow)"
        >
          <path
            fill={'rgba(255, 255, 255, 1)'}
            d="M50 119.28203230275508L90 50L170 50L210 119.28203230275508L170 188.56406460551017L90 188.56406460551017Z"
          />
          <filter
            id="puzzleNormalShadow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            {/* 模糊作用 in表示作用区域 SourceAlpha表示透明区域 13表示模糊的程度 */}
            <feGaussianBlur in="SourceAlpha" stdDeviation="13" />
            {/* feMorphology是用来扩大或者缩小内容的。operator="dilate"表示扩大。result表示记录产物为offsetblur */}
            <feMorphology operator="dilate" radius="15" result="offsetblur" />
            {/* 表示填充的颜色 可指定透明度 */}
            <feFlood floodColor="green" floodOpacity="0.75" />
            {/* 合并图像 有in和**in2 **2个属性。其中，in缺省则自动使用上一步的产物 */}
            {/* operator采用Porter-Duff合成里的over、in、atop、xor */}
            <feComposite result="outblur" in2="offsetblur" operator="in" />
            {/* 内发光的制作过程  与外发光相似  */}
            <feFlood floodColor="green" floodOpacity="0.75" />
            <feComposite in2="SourceGraphic" operator="out" />
            <feGaussianBlur stdDeviation="50" />
            <feComposite result="inblur" in2="SourceGraphic" operator="atop" />
            {/* 将二者合并 */}
            <feMerge>
              <feMergeNode in="outblur" />
              <feMergeNode in="inblur" />
            </feMerge>
          </filter>
        </svg>
      </div>
      <div
        style={{
          width: '40%',
          height: '100%',
          border: '1px solid pink',
          display: 'inline-block',
        }}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0"
          y="0"
          width="300px"
          height="600px"
          viewBox="0 0 300 600"
          xmlSpace="preserve"
          filter="url(#puzzleNormalShadow1)"
        >
          <path
            fill={'rgba(255, 255, 255, 1)'}
            d="M50 50 L50 100 L100 100 L50 200z"
          />
          <filter
            id="puzzleNormalShadow1"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur in="SourceAlpha" stdDeviation="13" />
            <feMorphology operator="dilate" radius="15" result="offsetblur" />
            <feFlood floodColor="gold" floodOpacity="0.75" />
            <feComposite result="outblur" in2="offsetblur" operator="in" />
            {/* <feFlood floodColor="gold" floodOpacity="0.75" />
                        <feComposite in2="SourceGraphic" operator="out" />
                        <feGaussianBlur stdDeviation="23" />
                        <feComposite result="inblur" in2="SourceGraphic" operator="atop" /> */}
            <feMerge>
              <feMergeNode in="outblur" />
              <feMergeNode in="inblur" />
            </feMerge>
          </filter>
        </svg>
      </div>
    </div>
  );
};
//memo的使用在不希望一直跟随父组件更新的子组件上
export default React.memo(HaloEffect);
