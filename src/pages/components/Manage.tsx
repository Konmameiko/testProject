import React, { Component } from 'react';
import { history } from 'umi';
import styles from './manage.less';

class Manage extends Component<any,any> {

    
    timer:NodeJS.Timeout | null = null;

    handleScroll(e:any){
        console.log('zhengzaigundong')
        this.timer && clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            console.log('停止')
        }, 300);
    }

    render() {
        return (
            <div onWheel={(e) => this.handleScroll(e)}>
                <div className={styles.manage}>
                    <div className={styles.column}>
                        <img className={`${styles.managePhoto} ${styles.blur}`} src={require('@/assets/images/18.png')}/>
                        <span>图片模糊</span>
                    </div>
                    <div className={styles.column}>
                        <img className={`${styles.managePhoto} ${styles.brightness}`} src={require('@/assets/images/18.png')}/>
                        <span>图片暗化</span>
                    </div>
                    <div className={styles.column}>
                        <img className={`${styles.managePhoto} ${styles.contrast}`} src={require('@/assets/images/18.png')}/>
                        <span>图片对比度</span>
                    </div>
                    <div className={styles.column}>
                        <img className={`${styles.managePhoto} ${styles.hueRotate}`} src={require('@/assets/images/18.png')}/>
                        <span>色相变化</span>
                    </div>
                </div>  
                <button className={styles.btn} onClick={()=>history.go(-1)}>返回</button>
            </div>
            
        );
    }
}

export default Manage;
