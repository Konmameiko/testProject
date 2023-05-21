import React, { Component } from 'react';
import axios from 'axios';
import styles from './app.less';
import UserImg from './userImg';
import { Spin, Alert } from 'antd';

type StateType = {
  txt: string;
  user: Array<any>;
  isloading: boolean;
};
interface App {
  state: StateType;
}
class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      txt: '',
      user: [],
      isloading: false,
    };
  }
  updateAppstate = () => {
    //获取输入框的值
    let txt = this.state.txt;
    //设置loading
    this.setState({ isloading: true });
    //发送网络请求
    axios.get(`https://api.github.com/search/users?q=${txt}`).then(
      (response: { data: any }) => {
        this.setState({ user: response.data.items, isloading: false });
        console.log('获取成功', response.data);
      },
      (error) => {
        console.log('获取失败');
      },
    );
  };
  inputChange = (e: any) => {
    this.setState({ txt: e.target.value });
  };
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <input
            type="text"
            className={styles.input}
            onChange={this.inputChange}
          />
          <button className={styles.button} onClick={this.updateAppstate}>
            点击搜索
          </button>
        </div>

        {this.state.isloading ? (
          <Spin tip="Loading..." className={styles.loading}>
            <Alert
              message="加载中"
              description="not 急， please 等等。let us sing a song!"
              type="info"
            />
          </Spin>
        ) : (
          <div className={styles.body}>
            {this.state.user.map((element) => {
              return (
                <UserImg
                  key={element.node_id}
                  id={element.id}
                  name={element.login}
                  avatar={element.avatar_url}
                  url={element.html_url}
                ></UserImg>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default App;
