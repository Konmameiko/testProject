/*
 * @Description: 跟随鼠标转动的模拟眼睛
 * @Author: KonmaMeiko
 * @Date: 2022-08-29 15:47:18
 * @LastEditTime: 2022-08-30 17:42:56
 * @LastEditors: KonmaMeiko
 */
import e from '@umijs/deps/compiled/express';
import React, { FC, useState, useRef, useCallback, useEffect } from 'react';
import styles from './index.less';

export interface IProps {}

const LazyEye: FC<IProps> = () => {
  const [eyeState, setEyeState] = useState<number>(0);
  const eyeRef = useRef<HTMLDivElement>(null);
  const ballref = useRef<HTMLDivElement>(null);
  const stateArr = ['sleeping', 'angry', 'veryAngry', 'work'];
  let timer: NodeJS.Timeout | null = null;

  useEffect(() => {
    if (eyeState === 0) {
      eyeRef.current &&
        (eyeRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`);
      ballref.current &&
        (ballref.current.style.transform = `translate(0px, 0px)`);
    }
    if (eyeState === 2) {
      timer = setTimeout(() => {
        setEyeState(3);
        timer && clearTimeout(timer);
      }, 5000);
    }
    if (eyeState === 3) {
      timer = setTimeout(() => {
        setEyeState(0);
        timer && clearTimeout(timer);
      }, 10000);
    }
    return () => {
      timer && clearTimeout(timer);
    };
  }, [eyeState]);

  const changeState = () => {
    setEyeState((eyeState + 1) % 4);
  };

  const handleMouseMove = (e: any) => {
    if (timer) {
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
        setEyeState(0);
        timer && clearTimeout(timer);
      }, 10000);
    } else {
      timer = setTimeout(() => {
        setEyeState(0);
        timer && clearTimeout(timer);
      }, 10000);
    }
    // 视口尺寸，获取到整个视口的大小
    let clientWidth = document.body.clientWidth;
    let clientHeight = document.body.clientHeight;
    // 原点，即bigEye中心位置，页面中心
    let origin = [clientWidth / 2, clientHeight / 2];
    // 鼠标坐标
    let mouseCoords = [e.clientX - origin[0], origin[1] - e.clientY];
    // 移出div则复原
    console.log(clientHeight, clientWidth, '1223123123123');
    const tmpX = (document.body.clientWidth - 200) / 2;
    const tmpY = (document.body.clientHeight - 200) / 2;
    if (
      mouseCoords[0] < -tmpX ||
      mouseCoords[0] > tmpX ||
      mouseCoords[1] > tmpY ||
      mouseCoords[1] < -tmpY
    ) {
      eyeRef.current &&
        (eyeRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`);
      ballref.current &&
        (ballref.current.style.transform = `translate(0px, 0px)`);
    } else {
      // 旋转角度
      let eyeXDeg = (mouseCoords[1] / clientHeight) * 80; // 这里的80代表的是最上下边缘大眼X轴旋转角度
      let eyeYDeg = (mouseCoords[0] / clientWidth) * 60;
      eyeRef.current &&
        (eyeRef.current.style.transform = `rotateY(${eyeYDeg}deg) rotateX(${eyeXDeg}deg)`);
      ballref.current &&
        (ballref.current.style.transform = `translate(${eyeYDeg / 1.5}px, ${
          -eyeXDeg / 1.5
        }px)`);
    }
  };

  return (
    <div
      className={styles.body}
      onClick={() => changeState()}
      onMouseMove={
        eyeState === 3
          ? (e) => handleMouseMove(e)
          : () => {
              return null;
            }
      }
    >
      <p>维克兹当前的状态：{stateArr[eyeState]}</p>
      <div
        ref={eyeRef}
        className={`${styles.eyeSocket} ${styles[stateArr[eyeState]]}`}
      >
        <div ref={ballref} className={styles.eyeBall}></div>
      </div>
      {/* SVG滤镜 */}
      <div
        className={styles.filter}
        style={{ opacity: `${eyeState === 2 ? 1 : 0}` }}
      >
        <div className={styles.eyeSocket} id="eyeFilter" />
      </div>
      <svg width="0">
        <filter id="filter">
          <feTurbulence baseFrequency="1">
            <animate
              id="animate1"
              attributeName="baseFrequency"
              dur="1s"
              from="0.5"
              to="0.55"
              begin="0s;animate1.end"
            ></animate>
            <animate
              id="animate2"
              attributeName="baseFrequency"
              dur="1s"
              from="0.55"
              to="0.5"
              begin="animate2.end"
            ></animate>
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            scale="50"
            xChannelSelector="R"
            yChannelSelector="B"
          />
        </filter>
      </svg>
    </div>
  );
};
//memo的使用在不希望一直跟随父组件更新的子组件上
export default React.memo(LazyEye);
