import React from 'react'
import styles from './index.less'

function index() {

    return (
        <div className={styles.outer}>
            <div className={styles.shell}>
                <input type="checkbox" id='checkbox' className={styles.input0}/>
                <label htmlFor="checkbox" className={styles.label}></label>
                <input type="text" className={styles.input} id='input'/>
                <div className={styles.fonts}>
                    <span className={styles.font1}>s</span>
                    <span className={styles.font2}>e</span>
                    <span className={styles.font3}>a</span>
                    <span className={styles.font4}>r</span>
                    <span className={styles.font5}>c</span>
                    <span className={styles.font6}>h</span>
                    <span className={styles.font7}>.</span>
                    <span className={styles.font8}>.</span>
                    <span className={styles.font9}>.</span>
                    <span className={styles.font10}>.</span>
                    <span className={styles.font11}>.</span>
                    <span className={styles.font12}>.</span>
                </div>
            </div>
        </div>
    )
}

export default index
