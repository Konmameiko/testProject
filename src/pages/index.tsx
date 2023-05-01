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

interface menuItemProps {
  text?: string;
  icon?: string;
  router?: string;
}

export default class IndexPage extends Component<any, any> {
  timer: any | null = null;
  MenuItemArr = [
    { router: '/photoManage', text: '图片处理', icon: '' },
    { router: '/Test/Html_CSSLearn', text: '静态页面', icon: '' },
    { router: '/Test/moreButtons', text: '按钮组件', icon: '' },
    { router: '/Test/Codes', text: '算法临时', icon: '' },
    { router: '/Test/text', text: '字体组件', icon: '' },
    { router: '/Test/svgFilter', text: 'SVG滤镜', icon: '' },
    { router: '/imgWrapper', text: '图片瀑布流', icon: '' },
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
            <h1>Hello,world!</h1>
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
