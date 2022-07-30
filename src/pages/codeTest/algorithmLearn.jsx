import React from 'react';
const ProgressDemos = () => {
  // let x = 2;
  // let n = 10;
  var myPow = (x, n) => {
    console.log(x, n);
    if (n == 0 || n == 1) {
      return n == 0 ? 1 : x;
    } else if (n < 0) {
      return myPow(1 / x, Math.abs(n));
    } else {
      return n % 2 == 0
        ? myPow(x * x, n / 2)
        : myPow(x * x, Math.floor(n / 2)) * x;
    }
  };
  const handleClick = () => {
    return myPow(2, 10);
  };

  return (
    <div>
      <button onClick={() => console.log(handleClick())}>点击</button>
    </div>
  );
};

export default ProgressDemos;
