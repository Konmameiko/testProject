import React, { Component } from 'react'
import styles from './index.less'

export default class index extends Component {
    render() {
        return (
            <div className={styles.simulateBody}>
                <div className={styles.wrap}>
                    <div className={styles.box}>
                        <div className={styles.left}>桑桑在校园里随便走走，就走到了小屋前。这时，桑桑被一股浓烈的苦艾味包围了。他的眼前是一片艾。艾前后左右地包围了小屋。当风吹过时，艾叶哗啦哗啦地翻卷着。</div>
                        <div className={styles.center}>
                            <span>2001</span>
                        </div>
                        <div className={styles.right}></div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.left}></div>
                        <div className={styles.center}>
                            <span>2007</span>
                        </div>
                        <div className={styles.right}>秃鹤的秃，是很地道的。他用长长的好看的脖子，支撑起那么一颗光溜溜的脑袋，这颗脑袋绝无一丝瘢痕，光滑得竟然那么均匀，阳光下，这颗脑袋像打了蜡一般地亮</div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.left}>世间的一切虚伪，正像过眼云烟，只有真理才是处世接物的根据。虚伪的黑暗，必为真理的光辉所消灭。</div>
                        <div className={styles.center}>
                            <span>2011</span>
                        </div>
                        <div className={styles.right}></div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.left}></div>
                        <div className={styles.center}>
                            <span>2016</span>
                        </div>
                        <div className={styles.right}>他发现了人类行为的一大法则，自己还不知道——那就是，为了要使一个大人或小孩极想干某样事情，只需要设法把那件事情弄得不易到手就行了。</div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.left}>你以为我贫穷、相貌平平就没有感情吗？我向你发誓，如果上帝赋予我财富和美貌，我会让你无法离开我，就像我现在无法离开你一样。虽然上帝没有这么做，可我们在精神上依然是平等的。</div>
                        <div className={styles.center}>
                            <span>2021</span>
                        </div>
                        <div className={styles.right}></div>
                    </div>
                </div>
            </div>
        )
    }
}
