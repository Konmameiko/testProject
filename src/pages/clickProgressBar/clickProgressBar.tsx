import React, { Component } from 'react';
import styles from './clickProgressBar.less';

var width = 0;
class clickProgressBar extends Component {
  bar: any;
  interval: NodeJS.Timeout | null = null;
  tick() {
    width -= 6;
    if (width < 0) {
      width = 0;
    }
    this.bar.style.width = width + 'px';
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 500);
  }

  componentWillUnmount() {
    this.interval && clearInterval(this.interval);
  }
  addProgressBar = () => {
    width += 40;
    if (width <= 400) {
      this.bar.style.width = width + 'px';
    } else {
      width = 400;
      this.bar.style.width = width + 'px';
      this.interval && clearInterval(this.interval);
    }
  };
  clearProgressBar = () => {
    width = 0;
    this.bar.style.width = width + 'px';
  };
  render() {
    return (
      <div className={styles.body}>
        <div className={styles.box}>
          <div className={styles.bar} ref={(e) => (this.bar = e)}></div>
        </div>
        <button className={styles.btn} onClick={this.addProgressBar}>
          点击
        </button>
        <button className={styles.btn} onClick={this.clearProgressBar}>
          清除
        </button>
      </div>
    );
  }
}

export default clickProgressBar;
