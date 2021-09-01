import React, { Component } from 'react';
import styles from '../index.less';
import {history} from 'umi';
class Manage extends Component<any,any> {
    render() {
        return (
            <div>
                <div className={styles.manage}>
                    <div className={styles.column}>
                        <img className={styles.managePhoto} src={require('@/assets/images/3.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/6.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/8.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/7.png')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/1.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/10.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/2.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/4.jpg')} alt="智子"/>
                    </div>
                    <div className={styles.column}>
                        <img className={styles.managePhoto} src={require('@/assets/images/3.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/2.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/8.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/13.png')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/3.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/1.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/9.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/12.png')} alt="智子"/>
                    </div>
                    <div className={styles.column}>
                        <img className={styles.managePhoto} src={require('@/assets/images/5.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/11.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/7.png')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/4.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/10.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/3.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/12.png')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/8.jpg')} alt="智子"/>
                    </div>
                    <div className={styles.column}>
                        <img className={styles.managePhoto} src={require('@/assets/images/5.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/6.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/7.png')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/8.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/10.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/11.jpg')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/12.png')} alt="智子"/>
                        <img className={styles.managePhoto} src={require('@/assets/images/9.jpg')} alt="智子"/>
                    </div>
                </div>
                <button onClick={()=>this.props.history.go(-1)}>返回</button>
            </div>
        );
    }
}

export default Manage;
