import React, { Component } from 'react'
import styles from './index.less'
export default class index extends Component {
    render() {
        return (
            <div className={styles.content}>
                <div className={styles.title}>CSS3 Loading animations</div>
                {/* loading1 */}
                <div className={styles.wrapper}>
                    <p>loading 1</p>
                    <div className={styles.load1}>
                        <hr/><hr/><hr/><hr/>
                    </div>
                </div>
                {/* loading2 */}
                <div className={styles.wrapper}>
                    <p>loading 2</p>
                    <div className={styles.load2}>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                    </div>
                </div>
                {/* loading3 */}
                <div className={styles.wrapper}>
                    <p>loading 3</p>
                    <div className={styles.load3}>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                    </div>
                </div>
                {/* loading4 */}
                <div className={styles.wrapper}>
                    <p>loading 4</p>
                    <div className={styles.load4}>
                        <div className={styles.circleCore}></div>
                    </div>
                </div>
                {/* loading5 */}
                <div className={styles.wrapper}>
                    <p>loading 5</p>
                    <div className={styles.load5}>
                        <div>G</div>
                        <div>N</div>
                        <div>I</div>
                        <div>D</div>
                        <div>A</div>
                        <div>O</div>
                        <div>L</div>
                    </div>
                </div>

                {/* loading6 */}
                <div className={styles.wrapper}>
                    <p>loading 6</p>
                    <div className={styles.load6}>
                        <div className={styles.petal}></div>
                        <div className={styles.petal}></div>
                        <div className={styles.petal}></div>
                        <div className={styles.petal}></div>
                        <div className={styles.petal}></div>
                        <div className={styles.petal}></div>
                        <div className={styles.petal}></div>
                        <div className={styles.petal}></div>
                    </div>
                </div>  
                {/* loading7 */}
                <div className={styles.wrapper}>
                    <p>loading 7</p>
                </div>
                {/* loading8 */}
                <div className={styles.wrapper}>
                    <p>loading 8</p>
                </div>
                {/* loading9 */}
                <div className={styles.wrapper}>
                    <p>loading 9</p>
                </div>
                {/* loading10 */}
                <div className={styles.wrapper}>
                    <p>loading 10</p>
                </div>
            </div>
        )
    }
}
