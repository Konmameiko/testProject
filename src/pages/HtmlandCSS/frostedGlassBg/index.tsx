import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import 'css-doodle';   // 该组件将通过其内部的规则（纯 CSS）生成一个 div 网格 可用以生成图形模式或动画图形。
import styles from './index.scss'

export interface IProps{
    
}

const GlassBg:FC<IProps> = ({})=>{

    const doodle = document.querySelector('css-doodle') as any;
    const updateCss = () =>{
        doodle && doodle.update();
    }

    return (
        // 参考网址 https://juejin.cn/post/7057330357556740127
        // GPU的占用率极高  使用时应尽量减少rand函数
        <div className={styles.Bg}>
            <p onClick={()=>updateCss()}>Click Me</p>
            <css-doodle>
                {`
                    :doodle {
                        @grid: 3x3/ 100Vmin;
                    }
                    @place-cell: center;
                    width: @rand(20Vmin, 60Vmin);
                    height: @rand(20Vmin, 60Vmin);
                    transform: translate(@rand(-50%, 100%), @rand(-30%, 60%)) scale(@rand(.8, 1.8)) skew(@rand(45deg));
                    clip-path: polygon(
                        @r(0, 30%) @r(0, 50%), 
                        @r(30%, 60%) @r(0%, 30%), 
                        @r(60%, 100%) @r(0%, 50%), 
                        @r(60%, 100%) @r(50%, 100%), 
                        @r(30%, 60%) @r(60%, 100%),
                        @r(0, 30%) @r(60%, 100%)
                    );
                    background: @pick(#f44336, #e91e63, #9c27b0, #673ab7, #3f51b5, #60569e, #e6437d, #ebbf4d, #00bcd4, #03a9f4, #2196f3, #009688, #5ee463, #f8e645, #ffc107, #ff5722, #43f8bf);
                    opacity: .5;
                    position: relative;
                    top: @rand(-20%, 80%);
                    left: @rand(-20%, 80%);
                    animation: colorChange 10s infinite -1.5s linear alternate;
                    @keyframes colorChange {
                        100% {
                        left: 0;
                        top: 0;
                        filter: hue-rotate(360deg);
                        }
                    }
                `}
            </css-doodle>
        </div>
    )
}
//memo的使用在不希望一直跟随父组件更新的子组件上
export default React.memo(GlassBg);