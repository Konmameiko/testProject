/*
 * @Description:
 * @Author: KonmaMeiko
 * @Date: 2022-07-30 17:46:09
 * @lastEditTime: Do not edit
 * @LastEditors: KonmaMeiko
 */
import React from 'react';
const ProgressDemos = () => {
  // let x = 2;
  // let n = 10;
  var myPow = (nums1, nums2) => {
    const n = nums1.length;
    const idx = new Array(n).fill(0);
    for (let i = 0; i < n; i++) idx[i] = i;
    nums1.sort((a, b) => a - b);
    idx.sort((i, j) => nums2[i] - nums2[j]);
    let L = 0,
      R = n - 1; // nums2(索引)的左右指针
    for (let i of nums1) {
      console.log(i, nums2[idx[L]], idx);
      if (i > nums2[idx[L]])
        nums2[idx[L++]] = i; // 可以满足 nums1[i] > nums2[i]
      else nums2[idx[R--]] = i; //丢到数组最后
    }
    return nums2;
  };
  const handleClick = () => {
    return myPow([2, 7, 11, 15], [1, 9, 4, 11]);
  };

  return (
    <div>
      <button onClick={() => console.log(handleClick())}>点击</button>
    </div>
  );
};

export default ProgressDemos;
