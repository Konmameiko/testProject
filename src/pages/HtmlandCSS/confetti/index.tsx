import React, { Component , useEffect, useRef} from 'react';
import styles from './index.less'

function Index() {

    var raf = (function () {
        var TIME = Math.floor(1000 / 60);
        var frame, cancel;
        var frames:any = {};
        var lastFrameTime = 0;

        if (typeof requestAnimationFrame === 'function' && typeof cancelAnimationFrame === 'function') {
            frame = function (cb:any) {
                var id = Math.random();
                frames[id] = requestAnimationFrame(function onFrame(time) {
                    if (lastFrameTime === time || lastFrameTime + TIME - 1 < time) {
                        lastFrameTime = time;
                        delete frames[id];
                    cb();
                    } else {
                        frames[id] = requestAnimationFrame(onFrame);
                    }
                });

                return id;
            };
            cancel = function (id:number) {
                if (frames[id]) {
                    cancelAnimationFrame(frames[id]);
                }
            };
        } else {
            frame = function (cb:any) {
            return setTimeout(cb, TIME);
            };
            cancel = function (timer:any) {
            return clearTimeout(timer);
            };
        }

        return { frame: frame, cancel: cancel };
    }());

    // 设置基础参数
    const conRef = useRef<any>(0);
    let canvas:any = null;
    let context:any = null;
    // 设置彩花颜色值
    const colors = [
        '#26ccff',
        '#a25afd',
        '#ff5e7e',
        '#88ff5a',
        '#fcff42',
        '#ffa62d',
        '#ff36ff'
    ];
    // 设置动画元素
    var animationFrame:any = null;

    useEffect(() =>{
        canvas = conRef.current;
        context = canvas.getContext('2d');
        conRef.current.addEventListener('click', createConfetti)
    })

    // hex to rgb 方法
    function hexToRgb(str:string) {
        var val = String(str).replace(/[^0-9a-f]/gi, '');
  
        if (val.length < 6) {
          val = val[0] + val[0] + val[1] + val[1] + val[2] + val[2];
        }
  
        return {
          r: toDecimal(val.substring(0, 2)),
          g: toDecimal(val.substring(2, 4)),
          b: toDecimal(val.substring(4, 6))
        };
    }
    function toDecimal(str:string) {
        return parseInt(str, 16);
    }
     
    // 循环生成多个礼花参数(默认)
    var arr:any[] = [];
    for (let i = 0; i < 50; i++) {
        arr.push({
          "x": 100,
          "y": 100,
          "velocity": (25 * 0.5) + (Math.random() * 10),    // 喷出速度
          "angle2D": 1.5 * Math.PI + Math.random() * 1 / 4 * Math.PI,   // 喷出角度
          "tiltAngle":  Math.random() * Math.PI,
          "color": hexToRgb(colors[Math.floor(Math.random() * 7)]),
          "tick": 0,
          "totalTicks": 200,
          "decay": 0.9,
          "random": 0,
          "tiltSin": 20,
          "tiltCos": 10,
          "gravity": 3,
        })
    }

    // 更新传入参数
    function updateFetti(context:any, fetti:any){
        var progress = (fetti.tick++) / fetti.totalTicks;
        if (progress > 1) {
            return;
        }
        fetti.x += Math.cos(fetti.angle2D) * fetti.velocity; // 左下角
        fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity; // 左下角
  
        fetti.velocity *= fetti.decay;  // 纸屑开始减速
        fetti.tiltAngle += 0.1;  // 不断给这个四边形变化角度
        fetti.tiltSin = Math.sin(fetti.tiltAngle);
        fetti.tiltCos = Math.cos(fetti.tiltAngle);
        fetti.random = Math.random() * 5;  // 修改纸屑尺寸
  
        var x1 = fetti.x;
        var y1 = fetti.y;
  
        var x2 = fetti.x + (fetti.random * fetti.tiltCos); // 左上角
        var y2 = fetti.y + (fetti.random * fetti.tiltSin); // 左上角
  
        var x3 = x2 + fetti.random;
        var y3 = y2;
  
        var x4 = fetti.x + fetti.random;
        var y4 = fetti.y;
  
  
        context.fillStyle = 'rgba(' + fetti.color.r + ', ' + fetti.color.g + ', ' + fetti.color.b + ', ' + (1 - progress) + ')';
        context.beginPath();
  
        context.moveTo(Math.floor(x1), Math.floor(y1));
        context.lineTo(Math.floor(x2), Math.floor(y2));
        context.lineTo(Math.floor(x3), Math.floor(y3));
        context.lineTo(Math.floor(x4), Math.floor(y4));
  
        context.closePath();
        context.fill();
  
        return fetti.tick < fetti.totalTicks;
    }

    function update() {
        console.log('update')
        context.clearRect(0, 0, canvas.width, canvas.height);
        arr = arr.filter(item => {
            return updateFetti(context, item);
        });

        if (arr.length) {
            animationFrame = raf.frame(update);
        }
    }

    // 点击触发事件
    const createConfetti = () =>{
        if(!animationFrame) {
            animationFrame = raf.frame(update);
        } else {
            for (let i = 0; i < 50; i++) {
                arr.push({
                    "x": 100,
                    "y": 100,
                    "velocity": (25 * 0.5) + (Math.random() * 10),    // 喷出速度
                    "angle2D": 1.5 * Math.PI + Math.random() * 1 / 4 * Math.PI,   // 喷出角度
                    "tiltAngle":  1/2 * Math.random() * Math.PI,    // 倾斜角度
                    "color": hexToRgb(colors[Math.floor(Math.random() * 7)]),
                    "tick": 0,
                    "totalTicks": 200,
                    "decay": 0.9,   // 纸屑失去速度的效率 0最快 大于1会一直运动
                    "random": 0,
                    "tiltSin": 20,
                    "tiltCos": 10,
                    "gravity": 3,   // 纸屑下降时的重力因素
                    "scalar": 1
                })
            }
        }
    }

    return (
        <div className={styles.basic}>
             <p>Click Me</p>
            <canvas id='canvas' className={styles.confetti} ref={conRef}></canvas>
        </div>
    );
}

export default Index;
