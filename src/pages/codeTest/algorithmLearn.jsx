/*
 * @Description:
 * @Author: KonmaMeiko
 * @Date: 2022-07-30 17:46:09
 * @lastEditTime: Do not edit
 * @LastEditors: KonmaMeiko
 */
import React from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';

const ProgressDemos = () => {
  // 解压缩字符串 '2<A>' AA
  // 'A2<B2<CE>>' ABCECEBCECE
  var myPow = (str) => {
    const stack = [];
    let res = '';
    let num = 0;
    for (let c of str) {
      if (c === '[') {
        stack.push([num, res]);
        [num, res] = [0, ''];
      } else if (c === ']') {
        let [preNum, preRes] = stack.pop();
        res = preRes + res.repeat(preNum);
      } else if (!isNaN(c)) {
        num = num * 10 + parseInt(c);
      } else {
        res += c;
      }
    }
    return res;
  };
  const handleClick = () => {
    console.time();
    const res = myPow('A2<B2<CE>>');
    console.timeEnd();
    return res;
  };

  const onChange = (time, timeString) => {
    console.log(time, timeString);
  };

  return (
    <div>
      <TimePicker
        onChange={onChange}
        defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
      />
      <p>shoudonghuanhang</p>
      <button onClick={() => console.log(handleClick())}>点击</button>
    </div>
  );
};

export default ProgressDemos;
