import React, { Component } from 'react';
import styles from './Less2Stars.less'
class Less2Stars extends Component {
    render() {
        return (
            <div className={styles.body}>
                <h1 className={styles.txt1}>落霞与孤鹜齐飞</h1>
                <h1 className={styles.txt2}>秋水共长天一色</h1>
                <main>
                    <section className={styles.star1}></section>
                    <section className={styles.star2}></section>
                    <section className={styles.star3}></section>
                </main>
            </div>
        );
    }
}

export default Less2Stars;
