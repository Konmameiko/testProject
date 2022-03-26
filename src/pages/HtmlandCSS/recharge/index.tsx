import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import styles from './index.scss'
export interface Iprops {
    
}

interface IProps extends Partial<Iprops>{}

const Recharge:FC<IProps> = ({})=>{

    return (
        <div className={styles.content}>
            <div className={styles.recharge}>
                <p className={styles.number}> 77.7%</p>
                <div className={styles.primary}>
                    <div className={styles.circle} />
                    <ul className={styles.bubbles}>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
//memo的使用在不希望一直跟随父组件更新的子组件上
export default React.memo(Recharge);