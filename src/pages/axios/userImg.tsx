import React, { Component } from 'react';
import styles from './app.less';

export default class UserImg extends Component<any, any> {
  render() {
    const { url, avatar, name } = this.props;
    return (
      <div className={styles.userInfo}>
        <a href={url} target="blank">
          <img className={styles.avatar} src={avatar}></img>
        </a>
        <p className={styles.username}>{name}</p>
      </div>
    );
  }
}
