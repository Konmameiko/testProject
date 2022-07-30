import React, { useState, useEffect } from 'react';
import image1 from '@/assets/images/1.jpg';
import SlicingHoc from './hoc';

// 分片渲染：简单的说就是一个执行完再执行下一个，其思想是建立一个队列，
// 通过定时器来进行渲染，比如说一共有3次，先把这三个放入到数组中，
// 当第一个执行完成后，并剔除执行完成的，在执行第二个，直到全部执行完毕，渲染队列清空

// 但是分片渲染的问题在于没有必要在开始时就渲染全部的数据
// 虚拟列表：实际上是一种实现方案，只对可视区域进行渲染，对
// 非可视区域中的区域不渲染或只渲染一部分（渲染的部分叫缓冲区，不渲染的部分叫虚拟区）

const Item: React.FC<{ id: any }> = ({ id }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: 5,
        marginRight: 50,
      }}
    >
      <img src={image1} width={100} height={60} alt="" />
      <p style={{ width: 80 }}>列表{id}</p>
    </div>
  );
};

const ItemHoc = SlicingHoc(Item);

const SliceRender = () => {
  const [list, setList] = useState<Array<number>>([]);

  useEffect(() => {
    let arr: number[] = [];
    for (let i = 0; i < 5000; i++) {
      arr.push(i);
    }
    setList(arr);
    return () => {
      setList([]);
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      <ItemHoc list={list} />
    </div>
  );
};

//memo的使用在不希望一直跟随父组件更新的子组件上
export default React.memo(SliceRender);
