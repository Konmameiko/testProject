import React, { Component } from 'react';
import styles from './index.less'
class Index extends Component {
    render() {
        return (
            <div>
                <div className={styles.box}>
                    <div className={styles.inner}>
                        <div className={styles.part1}></div>
                        <div className={styles.part2}></div>
                        <div className={styles.part3}></div>
                        <div className={styles.part4}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;
