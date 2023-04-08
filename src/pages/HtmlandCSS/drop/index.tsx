import React, { Component } from 'react';
import styles from './index.less';

export default class index extends Component<any, any> {
  disX: number;
  disY: number;
  constructor(props: any) {
    super(props);
    this.state = {
      needX: 0,
      needY: 0,
      flag: 0,
      radio: 88,
    };
    this.disX = 0;
    this.disY = 0;
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  fnDown(e: any) {
    // 第二步：记录拖拽起始位置，鼠标按下时document绑定onmousemove事件，实时改变元素的布局style
    this.setState({
      flag: 0,
    });
    document.onmousemove = this.fnMove.bind(this);
  }

  fnMove(e: any) {
    this.setState({
      needX: e.clientX - 248,
      needY: e.clientY - 208,
      flag: 1,
      scale: 1,
    });
  }

  fnUp() {
    // 第三步：鼠标放开时document移除onmousemove事件
    document.onmousemove = null;
  }

  handleClick() {
    const { flag } = this.state;
    if (flag == 0) {
      document.onmousemove = null;
    }
  }

  largeScale = () => {
    const { scale } = this.state;
    this.setState({ scale: scale * 1.1 });
  };

  smallScale = () => {
    const { scale } = this.state;
    this.setState({ scale: scale * 0.9 });
  };

  handleResize = () => {
    // window.devicePixelRatio
    const value =
      ((((document.body.clientWidth * 43) / 48) * 0.6 * 191) / 273 - 400) / 2;
    console.log(value, 'value');
    this.setState({ radio: value });
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  render() {
    // 第一步：拖拽元素绑定onmousedown，onmouseup事件
    const { needX, needY, scale, radio } = this.state;
    return (
      <div
        style={{
          transform: `scale(${scale},${scale})`,
          border: '3px pink solid',
          width: '100%',
          height: '100%',
        }}
      >
        <button onClick={this.largeScale}>点击放大</button>
        <button onClick={this.smallScale}>点击缩小</button>
        <p>字体变化</p>
        <div
          className={styles.drapable}
          style={{ left: needX, top: needY }}
          onMouseDown={this.fnDown.bind(this)}
          onMouseUp={this.fnUp.bind(this)}
          onClick={this.handleClick.bind(this)}
        />
        <div className={styles.imageDiv}>
          <img
            src={require('@/assets/images/25.jpg')}
            alt="御坂"
            className={styles.image}
            style={{ marginTop: `-${radio}px` }}
          />
        </div>
      </div>
    );
  }
}
