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
        </div>
      </div>
    );
  }
}
