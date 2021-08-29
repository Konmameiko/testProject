import React from 'react'
import styles from './index.less'

function index() {
    return (
        <div className={styles.body}>
            <div className={styles.text}>
                <p className={styles.name1}>简易</p>
                <p className={styles.name2}>的</p>
                <p className={styles.name3}>Login</p>
            </div>
            <div className={styles.a}>
                <div className={styles.b}>
                    <p className={styles.c}>Login</p>
                    <div className={styles.d}>
                        <input type="text" className={styles.e} placeholder='账号' />
                        <input type="password" className={styles.e} placeholder='密码' />
                        <div className={styles.f}>Go</div>
                    </div>
                    <div className={styles.g}>Forget the Password?<a href='#'>Retrieve</a></div>
                </div>
            </div>
        </div>
    )
}

export default index
