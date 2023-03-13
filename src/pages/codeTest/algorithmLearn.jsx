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
  var minNumberOfHours = function (
    initialEnergy,
    initialExperience,
    energy,
    experience,
  ) {
    let sum = 0;
    for (const e of energy) {
      sum += e;
    }
    let trainingHours = initialEnergy > sum ? 0 : sum + 1 - initialEnergy;
    console.log(trainingHours);
    for (const e of experience) {
      if (initialExperience <= e) {
        trainingHours += 1 + (e - initialExperience);
        initialExperience = 2 * e + 1;
      } else {
        initialExperience += e;
      }
    }
    return trainingHours;
  };
  const handleClick = () => {
    console.time();
    const res = minNumberOfHours(
      11,
      23,
      [
        69, 22, 93, 68, 57, 76, 54, 72, 8, 78, 88, 15, 58, 61, 25, 70, 58, 91,
        79, 22, 91, 74, 90, 75, 31, 53, 31, 7, 51, 96, 76, 17, 64, 89, 83, 54,
        28, 33, 32, 45, 20,
      ],
      [
        51, 81, 46, 80, 56, 7, 46, 74, 64, 20, 84, 66, 13, 91, 49, 30, 75, 43,
        74, 88, 82, 51, 72, 4, 80, 30, 10, 19, 40, 27, 21, 71, 24, 94, 79, 13,
        40, 28, 63, 85, 70,
      ],
    );
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
