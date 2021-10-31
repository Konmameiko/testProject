import React,{ useState, Component, useEffect } from 'react'
import { number } from 'yargs';
// import {} from 'react-router/node_modules/@types/react';
import styles from './index.less'

interface sonType{
    name:string,
}

function index() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState('');

    let myDate = new Date();

    useEffect(()=>{
        let timer2 = setInterval(()=>{
            setTime(myDate.toLocaleDateString() + myDate.toLocaleTimeString());
        }, 1000)

        return () => {
            clearInterval(timer2)
        }
    },[time])

    useEffect(()=>{
        document.title = `TS学习 ${count} times`
    },[count])
    
    return (
        <div className={styles.body}>
            <h1>hello, world</h1>
            <p>you click {count} times</p>
            <button onClick={()=>{setCount(count + 1)}}>
                add
            </button>
            <div id={styles.text}>
                <li className={styles.child1}>文字1</li>
                <li className={styles.child2}>文字2</li>
                <li className={styles.child3}>文字3</li>
                <li className={styles.child4}>文字4</li>
                <li className={styles.child5}>文字5</li>
                <li className={styles.child6}>文字6</li>
            </div>
            <Son name={time} />
        </div>
    )
}
export default index

type IPlanTagProps = {
    color?: string;
  };

type tagsProps = {
        [propName: string]: IPlanTagProps;
}
class Son extends Component<sonType>{
    constructor(props:sonType){
        super(props);
    }

    showValue = () =>{
        let istrue: boolean = false;
        let num1: number = 8;
        let obj1: tagsProps = {a:{color:'blue'}, b:{color:''}}
        let arr2: ReadonlyArray<string> = ['1', '2', '3'];
        
        let list: Array<number|string> = [1,2,3,4,5,'555']
        let str1: string = istrue ? (num1 + '-true') : (num1 + '-false');
        return str1 + ' ' + list[3] + ' '
    }

    f1 = (data:any) =>{
        const str = '{"platForm":"wechat","result":"1"}'

    }
    

    render(){
        const {name} = this.props;
        return (
            <div>
                <p>逝者如斯夫, {name}</p>
                <p>{this.showValue()}</p>
                <button onClick={this.f1}>点击事件</button>
            </div>
        )
    }
}
