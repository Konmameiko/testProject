import React, { Component, useRef } from 'react';
import styles from './index.less';

export default class index extends Component {
  timeTitle = [
    {
      age: '屈原',
      title: '离骚',
      message:
        '帝高阳之苗裔兮，朕皇考曰伯庸。摄提贞于孟陬兮，惟庚寅吾以降。皇览揆余初度兮，肇锡余以嘉名：名余曰正则兮，字余曰灵均。纷吾既有此内美兮，又重之以修能。',
    },
    {
      age: '王勃',
      title: '滕王阁序',
      message:
        '睢园绿竹，气凌彭泽之樽；邺水朱华，光照临川之笔。四美具，二难并。穷睇眄于中天，极娱游于暇日。天高地迥，觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下，目吴会于云间。',
    },
    {
      age: '李白',
      title: '行路难',
      message:
        '金樽清酒斗十千，玉盘珍馐直万钱。停杯投箸不能食，拔剑四顾心茫然。欲渡黄河冰塞川，将登太行雪满山。闲来垂钓坐溪上，忽复乘舟梦日边。行路难，行路难，多歧路，今安在。长风破浪会有时，直挂云帆济沧海。',
    },
    {
      age: '张继',
      title: '枫桥夜泊',
      message:
        '月落乌啼霜满天，江枫渔火对愁眠。姑苏城外寒山寺，夜半钟声到客船。',
    },
    {
      age: '高适',
      title: '燕歌行',
      message:
        '汉家烟尘在东北，汉将辞家破残贼，男儿本自重横行，天子非常赐颜色。摐金伐鼓下榆关，旌旗逶迤碣石间。校尉羽书飞瀚海，单于猎火照狼山。',
    },
    {
      age: '李贺',
      title: '李凭箜篌引',
      message:
        '吴丝蜀桐张高秋，空山凝云颓不流。江娥啼竹素女愁，李凭中国弹箜篌。昆山玉碎凤凰叫，芙蓉泣露香兰笑。十二门前融冷光，二十三丝动紫皇。',
    },
    {
      age: '王安石',
      title: '游褒禅山记',
      message:
        '禅山亦谓之华山，唐浮图慧褒始舍于其址，而卒葬之；以故其后名之曰“褒禅”。今所谓慧空禅院者，褒之庐冢也。距其院东五里，所谓华山洞者，以其乃华山之阳名之也。',
    },
  ];

  state = {
    number: -1,
  };
  handleClick = (index: number) => {
    this.setState({ number: index });
  };

  render() {
    return (
      <div className={styles.simulateBody}>
        <div className={styles.content}>
          {this.timeTitle.map((item, index) => {
            const isEnd = index === this.state.number;
            return (
              <MessageItem
                key={item.title}
                title={item.title}
                text={item.message}
                isEnd={isEnd}
              />
            );
          })}
        </div>
        <div className={styles.bar}>
          {this.timeTitle.map((item, index) => {
            const isEnd = index === this.state.number;
            return (
              <TimeLineItem
                key={index}
                age={item.age}
                sortKey={index}
                isActive={index <= this.state.number}
                isEnd={isEnd}
                handClick={this.handleClick}
              />
            );
          })}
          <div className={styles.line} />
          <div
            className={styles.activeLine}
            style={{ width: `${(this.state.number + 1) * (100 / 7)}%` }}
          />
        </div>
      </div>
    );
  }
}
interface messageProp {
  title: string;
  text: string;
  isEnd: boolean;
}

const MessageItem = (props: messageProp) => {
  const { title, text, isEnd } = props;
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const handleTitle = (title: string) => {
    let element = [];
    for (let i of title) {
      const randomX = Math.random() * 100;
      const randomY = Math.random() * 100;
      if (isEnd) {
        element.push(<span className={styles.isTitle}>{i}</span>);
      } else {
        element.push(
          <span style={{ left: `${randomX}%`, top: `${randomY}%` }}>{i}</span>,
        );
      }
    }
    return element;
  };

  const handleMessage = (text: string) => {
    let element = [];

    for (let i of text) {
      const randomX = Math.random() * 100;
      const randomY = Math.random() * 100;
      if (isEnd) {
        element.push(<span className={styles.isText}>{i}</span>);
      } else {
        element.push(
          <span style={{ left: `${randomX}%`, top: `${randomY}%` }}>{i}</span>,
        );
      }
    }
    return element;
  };
  return (
    <div className={styles.message}>
      <div className={styles.title} ref={titleRef}>
        {handleTitle(title)}
      </div>
      <div className={styles.text} ref={textRef}>
        {handleMessage(text)}
      </div>
    </div>
  );
};

interface prop {
  age: string;
  sortKey: number;
  isActive: boolean;
  isEnd: boolean;
  handClick: (index: number) => void;
}
const TimeLineItem = (props: prop) => {
  const { age, isEnd, sortKey, isActive, handClick } = props;
  return (
    <div className={styles.item} onClick={() => handClick(sortKey)}>
      {(isActive && !isEnd && <div className={styles.dotActive} />) ||
        (!isActive && <div className={styles.dot} />) ||
        (isEnd && <div className={styles.dotEnd} />)}
      <div className={styles.age}>{age}</div>
    </div>
  );
};
