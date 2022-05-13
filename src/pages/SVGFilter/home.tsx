/*
 * @Description: SVG滤镜
 * @Author: KonmaMeiko
 * @Date: 2022-05-09 14:52:03
 * @LastEditTime: 2022-05-13 16:31:07
 * @LastEditors: KonmaMeiko
 */
import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import styles from './home.scss';
export interface prop {
    
}

interface IProps extends Partial<prop>{
    onSomething: ()=>void;
}

const SVGFilter:FC<IProps> = ({onSomething})=>{

    return (
        <div className={styles.home}>
            hello, world!
        </div>
    )
}
//memo的使用在不希望一直跟随父组件更新的子组件上
export default React.memo(SVGFilter);