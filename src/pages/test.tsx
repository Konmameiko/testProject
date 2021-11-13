import { Table } from 'antd';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less'

class test extends Component<any,any>{
    count = 1;
    state={
        opacity: 1,
        formValues:{},
    }

    // componentWillMount(){
    //     this.count++;
    //     console.log(this.count,"willmount");
    // }

    //如果state的值完全取决于props，那么可以使用该方法
    // static getDerivedStateFromProps(props:any,state:any){
    //     console.log('getDerivedStateFromProps',props,state);
    //     return {count:99};
    // }

    componentDidMount(){
        this.count++;
        console.log(this.count,"didmount");
        this.setState({opacity:0.1});
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
    componentWillUnmount(){
        this.count++;
        console.log(this.count,"Unmount");
    }

    getSnapshotBeforeUpdate(){
        this.count++;
        console.log(this.count,"GetSnapshot");
        return {test:1}; 
    }
    componentDidUpdate(preProps:any,preState:any,snapShot:any){
        this.count++;
        console.log(this.count,"didUpdate");
        console.log("preprops: " , preProps);
        console.log("preState: " , preState);
        console.log("snapshot: " , snapShot);
    }
    render() {
        this.count++; 
        console.log(this.count,"render");
        return (
            <div>
                <h1>---Test Zero---</h1>
                <h2>---please see see console.log---</h2>
            </div>
        );
    }
}

export default test;
