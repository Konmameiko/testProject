import React, { useState, Component, useEffect } from 'react';
import { number } from 'yargs';
// import {} from 'react-router/node_modules/@types/react';
import styles from './index.less';

interface sonType {
  name: string;
}

function index() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState('');

  let myDate = new Date();

  useEffect(() => {
    let timer2 = setInterval(() => {
      setTime(myDate.toLocaleDateString() + myDate.toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer2);
    };
  }, [time]);

  useEffect(() => {
    document.title = `TS学习 ${count} times`;
  }, [count]);

  return (
    <div className={styles.body}>
      <h1>hello, world</h1>
      <p>you click {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
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
      <div className={styles.wrap}>冷冷清清</div>
      <div className={styles.background1}>
        <p>乘风好去</p>
        <p>长空万里</p>
        <p>直下看山河</p>
      </div>
      <div className={styles.background2}></div>
      <Son name={time} />
    </div>
  );
}
export default index;

type IPlanTagProps = {
  color?: string;
};

type tagsProps = {
  [propName: string]: IPlanTagProps;
};

function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map((n) => {
    console.log(n, o[n]);
    return o[n];
  });
}

let sym2 = Symbol('key');
let sym3 = Symbol('key');
let obj = {
  [sym2]: 'value',
  [sym3]: 'value3',
};
console.log(obj[sym2], obj[sym3]);
class Son extends Component<sonType> {
  constructor(props: sonType) {
    super(props);
  }

  showValue = () => {
    let istrue: boolean = false;
    let num1: number = 8;
    let obj1: tagsProps = { a: { color: 'blue' }, b: { color: '' } };
    let arr2: ReadonlyArray<string> = ['1', '2', '3'];

    let list: Array<number | string> = [1, 2, 3, 4, 5, '555'];
    let str1: string = istrue ? num1 + '-true' : num1 + '-false';
    return str1 + ' ' + list[3] + ' ';
  };

  f1 = (data: any): void => {
    console.log(123);
  };

  render() {
    const { name } = this.props;
    return (
      <div>
        <p>逝者如斯夫, {name}</p>
        <p>{this.showValue()}</p>
        <button className={styles.button1} onClick={this.f1}>
          点击事件
        </button>
      </div>
    );
  }
}

function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T,
) {
  return class extends constructor {
    newProperty = 'new property';
    hello = 'override';
  };
}

@classDecorator
class Greeter {
  property = 'property';
  hello: string;
  constructor(m: string) {
    this.hello = m;
  }
}

console.log(new Greeter('world'));
// {property: 'property', hello: 'override', newProperty: 'new property'}
