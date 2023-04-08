/*
 * @Description:
 * @Author: KonmaMeiko
 * @Date: 2023-03-11 17:03:20
 * @lastEditTime: Do not edit
 * @LastEditors: KonmaMeiko
 */
import React, { Component } from 'react';
import styles from './index.less';

export default class SlidingPhoto extends Component {
  photolist: any;
  componentDidMount() {
    for (let i = 1; i < 5; i++) {
      this.photolist.children[i].style.left = 850 - 280 + (i - 1) * 70 + 'px';
    }
  }
  onmouseover = (value: any) => {
    return () => {
      for (let i = 0; i < 5; i++) {
        if (i <= value) {
          this.statrMove(this.photolist.children[i], { left: i * 70 }, '');
        } else {
          this.statrMove(
            this.photolist.children[i],
            { left: 850 - 280 + (i - 1) * 70 },
            '',
          );
        }
      }
    };
  };
  getStyle = (obj: any, attr: any) => {
    if (obj.currentStyle) {
      return obj.currentStyle[attr];
    } else {
      return getComputedStyle(obj, 'false')[attr];
    }
  };
  statrMove = (obj: any, json: any, endFn: any) => {
    clearInterval(obj.timer);
    obj.timer = setInterval(() => {
      var bBtn = true;
      for (var attr in json) {
        var iCur = 0;
        if (attr == 'opacity') {
          if (Math.round(parseFloat(this.getStyle(obj, attr)) * 100) == 0) {
            iCur = Math.round(parseFloat(this.getStyle(obj, attr)) * 100);
          } else {
            iCur =
              Math.round(parseFloat(this.getStyle(obj, attr)) * 100) || 100;
          }
        } else {
          iCur = parseInt(this.getStyle(obj, attr)) || 0;
        }
        var iSpeed = (json[attr] - iCur) / 8;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        if (iCur != json[attr]) {
          bBtn = false;
        }
        if (attr == 'opacity') {
          obj.style.filter = 'alpha(opacity=' + (iCur + iSpeed) + ')';
          obj.style.opacity = (iCur + iSpeed) / 100;
        } else {
          obj.style[attr] = iCur + iSpeed + 'px';
        }
      }
      if (bBtn) {
        clearInterval(obj.timer);
        if (endFn) {
          endFn.call(obj);
        }
      }
    }, 30);
  };

  render() {
    return (
      <div className={styles.box}>
        <ul ref={(e) => (this.photolist = e)}>
          <li className={styles.photo} onMouseOver={this.onmouseover(0)}>
            <img src={require('@/assets/images/3.jpg')} alt="" />
          </li>
          <li onMouseOver={this.onmouseover(1)}>
            <img src={require('@/assets/images/4.jpg')} alt="" />
          </li>
          <li onMouseOver={this.onmouseover(2)}>
            <img src={require('@/assets/images/7.png')} alt="" />
          </li>
          <li onMouseOver={this.onmouseover(3)}>
            <img src={require('@/assets/images/28.png')} alt="" />
          </li>
          <li onMouseOver={this.onmouseover(4)}>
            <img src={require('@/assets/images/25.jpg')} alt="" />
          </li>
        </ul>
      </div>
    );
  }
}
