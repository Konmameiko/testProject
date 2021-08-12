import React, { Component } from 'react';
import styles from '../index.less';
import {history} from 'umi';
class Manage extends Component<any,any> {
    render() {
        return (
            <div>
                <div className={styles.manage}>
                    <div className={styles.column}>
                        <img className={styles.managePhoto} src={require('@/assets/3.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/6.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/8.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/7.png')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/1.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/10.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/2.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/4.jpg')} alt="智子"/>
                    </div>
                    <div className={styles.column}>
                        <img className={styles.managePhoto} src={require('@/assets/3.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/2.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/8.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/13.png')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/3.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/1.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/9.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/12.png')} alt="智子"/>
                    </div>
                    <div className={styles.column}>
                        <img className={styles.managePhoto} src={require('@/assets/5.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/11.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/7.png')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/4.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/10.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/3.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/12.png')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/8.jpg')} alt="智子"/>
                    </div>
                    <div className={styles.column}>
                        <img className={styles.managePhoto} src={require('@/assets/5.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/6.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/7.png')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/8.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/10.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/11.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/12.png')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/9.jpg')} alt="智子"/>
                    </div>
                </div>  
                <button onClick={()=>this.props.history.go(-1)}>返回</button>
            </div>
            
        );
    }
}

export default Manage;
