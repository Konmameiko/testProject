import { Table, Tabs } from 'antd';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';

const { TabPane } = Tabs;
class test extends Component<any, any> {
  count = 1;
  state = {
    opacity: 1,
    formValues: {},
    val: 0,
  };

  // componentWillMount(){
  //     this.count++;
  //     console.log(this.count,"willmount");
  // }

  //如果state的值完全取决于props，那么可以使用该方法
  // static getDerivedStateFromProps(props:any,state:any){
  //     console.log('getDerivedStateFromProps',props,state);
  //     return {count:99};
  // }

  componentDidMount() {
    this.count++;
    const temp = sessionStorage.getItem('test');
    console.log(this.count, 'didmount', temp);
    this.setState({ opacity: 0.1 });
  }

  // shouldComponentUpdate(){
  //     this.count++;
  //     console.log(this.count,"shouldUpdate");
  //     return true;
  // }

  // componentWillUpdate(){
  //     this.count++;
  //     console.log(this.count,"willUpdate");
  // }
  componentWillUnmount() {
    this.count++;
    // console.log(this.count,"Unmount");
  }

  getSnapshotBeforeUpdate() {
    this.count++;
    // console.log(this.count,"GetSnapshot");
    return { test: 1 };
  }

  componentDidUpdate(preProps: any, preState: any, snapShot: any) {
    this.count++;
    // console.log(this.count,"didUpdate");
    // console.log("preprops: " , preProps);
    // console.log("preState: " , preState);
    // console.log("snapshot: " , snapShot);
  }

  click = (key: any) => {
    console.log(key);
  };

  render() {
    this.count++;
    // console.log(this.count,"render");
    return (
      <div>
        <h1>---Test Zero---</h1>
        <div>
          {(() => {
            return <h1>hello world</h1>;
          })()}
        </div>
        <Tabs onTabClick={this.click}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
        {/* <div onClick={this.click(1)}>test2</div> */}
        <h2>---please see see console.log---</h2>
      </div>
    );
  }
}

export default test;
