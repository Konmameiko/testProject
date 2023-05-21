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
import icon1 from '../assets/darksouls_icon/1.png';
import icon2 from '../assets/darksouls_icon/2.png';
import icon3 from '../assets/darksouls_icon/3.png';
import icon4 from '../assets/darksouls_icon/4.png';
import icon5 from '../assets/darksouls_icon/5.png';
import icon6 from '../assets/darksouls_icon/6.png';
import icon7 from '../assets/darksouls_icon/7.png';
import icon8 from '../assets/darksouls_icon/8.png';

interface menuItemProps {
  text?: string;
  icon?: string;
  router?: string;
}

export default class IndexPage extends Component<any, any> {
  timer: any | null = null;
  MenuItemArr = [
    { router: '/photoManage', text: '图片处理', icon: icon1 },
    { router: '/Test/Html_CSSLearn', text: '静态页面', icon: icon2 },
    { router: '/Test/moreButtons', text: '按钮组件', icon: icon3 },
    { router: '/Test/Codes', text: '算法临时', icon: icon4 },
    { router: '/Test/text', text: '字体组件', icon: icon5 },
    { router: '/Test/svgFilter', text: 'SVG滤镜', icon: icon6 },
    { router: '/imgWrapper', text: '图片瀑布流', icon: icon7 },
    { router: '/404', text: '404', icon: icon8 },
  ];
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
            <h1>HELLO WORLD</h1>
          </div>
          <div className={styles.menus}>
            {this.MenuItemArr.map((item) => {
              return (
                <MenuItem
                  router={item.router}
                  text={item.text}
                  icon={item.icon}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const MenuItem = ({ text, icon, router }: menuItemProps) => {
  return (
    <div className={styles.muneItenBody}>
      <div className={styles.routerBtn}>
        <Link to={router}>
          <img className={styles.menuIcon} src={icon} alt="图标" />
          <span className={styles.text}>{text}</span>
        </Link>
      </div>
    </div>
  );
};
