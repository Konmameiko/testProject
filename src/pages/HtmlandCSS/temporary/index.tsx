import React, { Component } from 'react';
import styles from './index.less'

class Index extends Component {
    render() {
        return (
            <div className={styles.basic}>
                <div className={styles.photo1} />
                <div className={styles.photo2} />
                <div className={styles.photo3} />
            </div>
        );
    }
}

export default Index;
