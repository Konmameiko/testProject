/*
 * @Description:
 * @Author: KonmaMeiko
 * @Date: 2023-03-11 17:03:20
 * @lastEditTime: Do not edit
 * @LastEditors: KonmaMeiko
 */
import styles from './index.less';
import { Link, history } from 'umi';
import React, { Component } from 'react';

export default class IndexPage extends Component<any, any> {
  timer: any | null = null;
  componentDidMount() {
    // 关闭首页下方滚动波浪
    // window.addEventListener('visibilitychange', this.onViewChange);
    // if ('paintWorklet' in CSS) {
    //   // 将文件放入public文件夹下方便引入
    //   (CSS as any).paintWorklet.addModule('worklet/CSSHoudini.js');
    // }
  }

  onViewChange(): void {
    let hidden = document.visibilityState;
    if (hidden == 'hidden') {
      this.timer && clearTimeout(this.timer);
      document.title = '页面要崩溃了~';
    } else {
      document.title = '诶，好像又好了';
      this.timer = setTimeout(() => {
        this.timer && clearTimeout(this.timer);
        document.title = '主页展示';
      }, 1500);
    }
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
    window.removeEventListener('visibilitychange', this.onViewChange);
  }

  render() {
    return (
      <div className={styles.homeBody}>
        <div className={styles.glass} />
        <div className={styles.content}>
          <div className={styles.index}>
            <h1>Hello,world!</h1>
          </div>
          <ul className={styles.ul}>
            <li>
              <Link to="/photoManage">
                <p className={styles.css}>图片处理</p>
              </Link>
            </li>
            <li>
              <Link to="/Test/Html_CSSLearn">
                <p className={styles.css}>静态页面</p>
              </Link>
            </li>
            <li>
              <Link to="/Test/moreButtons">
                <p className={styles.css}>按钮组件</p>
              </Link>
            </li>
            <li>
              <Link to="/Test/Codes">
                <p className={styles.TS_JS}>算法临时</p>
              </Link>
            </li>
            <li>
              <Link to="/Test/text">
                <p className={styles.css}>字体组件</p>
              </Link>
            </li>
            <li>
              <Link to="/Test/svgFilter">
                <p className={styles.css}>SVG滤镜</p>
              </Link>
            </li>
            <li>
              <Link to="/imgWrapper">
                <p className={styles.css}>图片瀑布流</p>
              </Link>
            </li>
          </ul>
          <p className={styles.textStyle}>
            这个故事还和一本书有关，这本书名叫《银河系搭车客指南》。它不是地球书，从未在
            地球上出版过，直到那场恐怖大灾难降临为止，也没有哪个地球人见过甚至听说过这本书。
            然而，这本书实在是非同凡响的圣品。
            说真的，这恐怕是小熊星座那些出版业巨头推出过的最非同凡响的书籍了，当然，也没
            有哪个地球人听见过这些巨头的名字。
            这本书不止是非同凡响的圣品，同时也获得了极大成功——比《天国家庭护理百科全
            书》更流行，比《零重力下五十三件必做之事·续》更畅销，比欧龙·克鲁飞名噪一时的哲学三
            部曲《上帝错在哪里？》、《上帝的更多大错误？》和《上帝这家伙究竟是谁？》更引人争议。
            在银河外东沿区更加悠闲处世的许多文明世界里，《搭车客指南》已经取代了《大银河
            系百科全书》的地位，成为所有知识和智慧的标准储藏库，因为尽管此书冗余颇多，且收纳
            了为数不少的杜撰篇章（至少也是缺乏实据的谬误猜想），但在两个重要方面胜过了那部历
            史更悠久、内容更无趣的著作。
          </p>
        </div>
      </div>
    );
  }
}
