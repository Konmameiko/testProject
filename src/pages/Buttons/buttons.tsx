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
                    <button className={styles.btn3}><span>button3</span></button>
                    <button className={styles.btn4}><span>button4</span></button>
                    <button className={styles.btn5}><span>button5</span></button>
                    <button className={styles.btn6}><span>button6</span></button>
                    <button className={styles.btn7}>button7</button>
                    <button className={styles.btn8}>button8</button>
                    <button className={styles.btn9}>button9</button>
                    <button className={styles.btn10}>button10</button>
                    <button className={styles.btn11}>button11</button>
                    <button className={styles.btn12}>button12</button>
                    <button className={styles.btn13}>button13</button>
                    <button className={styles.btn14}>button14</button>
                    <button className={styles.btn15}>button15</button>
                    <button className={styles.btn16}>button16</button>
                    <button className={styles.btn17}>button17</button>
                </div>
                <p>天天摸鱼身体棒</p>
            </div>
        )
    }
}
