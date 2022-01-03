import React, { Component } from 'react';
import styles from './index.less';

export default class buttons extends Component {
    render() {
        return (
            <div className={styles.home}>
                <h1 className={styles.title}>hello, there are some buttons!</h1>
                <div className={styles.buttons}>
                    <button className={styles.btn1}>button1</button>
                    <button className={styles.btn2}>button2</button>
                    <button className={styles.btn3}>button3</button>
                    <button className={styles.btn4}>button4</button>
                    <button className={styles.btn5}>button5</button>
                    <button className={styles.btn6}>button6</button>
                    <button className={styles.btn7}>button7</button>
                    <button className={styles.btn8}>button8</button>
                    <button className={styles.btn9}>button9</button>
                    <button className={styles.btn10}>button10</button>
                    <button className={styles.btn11}>button11</button>
                </div>
                <p>天天摸鱼身体棒</p>
            </div>
        )
    }
}
