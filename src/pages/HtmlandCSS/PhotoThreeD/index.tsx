import React from 'react';
import styles from './index.less';

function index() {
  return (
    <div className={styles.simulateBody}>
      <div className={styles.outer}>
        <div className={styles.photos}>
          <div className={styles.photo1}></div>
          <div className={styles.photo2}></div>
          <div className={styles.photo3}></div>
          <div className={styles.photo4}></div>
        </div>
      </div>
    </div>
  );
}

export default index;
