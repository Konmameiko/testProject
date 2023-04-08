import React, { Component } from 'react';
import styles from './index.less';

// 原项目地址  https://codepen.io/tholman/pen/qCnfB
let counter = 0;
let minFontSize = 3;
let letters = `时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。
    俨骖騑于上路，访风景于崇阿；临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。
    鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。
    闾阎扑地，钟鸣鼎食之家；舸舰弥津，青雀黄龙之舳。云销雨霁，彩彻区明。
    落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨；雁阵惊寒，声断衡阳之浦。
    遥襟甫畅，逸兴遄飞。爽籁发而清风生，纤歌凝而白云遏。睢园绿竹，气凌彭泽之樽；邺水朱华，光照临川之笔。
    四美具，二难并。穷睇眄于中天，极娱游于暇日。天高地迥，觉宇宙之无穷；兴尽悲来，识盈虚之有数。
    望长安于日下，目吴会于云间。地势极而南溟深，天柱高而北辰远。关山难越，谁悲失路之人？萍水相逢，尽是他乡之客。
    怀帝阍而不见，奉宣室以何年？`;

interface ptType {
  x: number;
  y: number;
}

interface pt2Type {
  x: number;
  y: number;
  down: boolean;
}

// Drawing variables
let canvas: HTMLCanvasElement;
let context: CanvasRenderingContext2D;
let position: ptType = { x: 0, y: window.innerHeight / 2 };
let mouse: pt2Type = { x: 0, y: 0, down: false };
export default class index extends Component {
  componentDidMount() {
    canvas = document.getElementById('canvas') as HTMLCanvasElement;
    context = canvas.getContext('2d') as CanvasRenderingContext2D;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    canvas.addEventListener('mousemove', this.mouseMove, false);
    canvas.addEventListener('mousedown', this.mouseDown, false);
    canvas.addEventListener('mouseup', this.mouseUp, false);
    canvas.addEventListener('mouseout', this.mouseUp, false);
    canvas.addEventListener('dblclick', this.doubleClick, false);

    window.onresize = function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
  }

  // 移动事件
  mouseMove = (event: any) => {
    // 减去div外的宽高
    mouse.x = event.pageX - 76;
    mouse.y = event.pageY - 90;
    this.draw();
  };

  draw = () => {
    if (mouse.down) {
      const d = this.distance(position, mouse);
      const fontSize = minFontSize + d / 2;
      const letter = letters[counter];
      const stepSize = this.textWidth(letter);
      if (d > stepSize) {
        // 返回从原点(0,0)到(x,y)点的线段与x轴正方向之间的平面角度 (0-> π -π -> 0)
        const angle = Math.atan2(mouse.y - position.y, mouse.x - position.x);
        context.font = fontSize + 'px kaiTi';
        context.save();
        context.translate(position.x, position.y);
        context.rotate(angle);
        context.fillText(letter, 0, 0);
        context.restore();
        counter++;
        if (counter > letters.length - 1) {
          counter = 0;
        }

        position.x = position.x + Math.cos(angle) * stepSize;
        position.y = position.y + Math.sin(angle) * stepSize;
      }
    }
  };

  distance = (pt: ptType, pt2: pt2Type) => {
    var xs = 0;
    var ys = 0;

    xs = pt2.x - pt.x;
    xs = xs * xs;

    ys = pt2.y - pt.y;
    ys = ys * ys;

    // console.log(pt, pt2)
    return Math.sqrt(xs + ys);
  };

  mouseDown = (event: any) => {
    mouse.down = true;
    position.x = event.pageX - 76;
    position.y = event.pageY - 90;
    const infoHtml = document.getElementById('info') as HTMLSpanElement;
    infoHtml.style.display = 'none';
  };

  mouseUp = () => {
    mouse.down = false;
  };

  doubleClick = () => {
    canvas.width = canvas.width;
    const infoHtml = document.getElementById('info') as HTMLSpanElement;
    infoHtml.style.display = 'inline';
  };

  textWidth = (string: string): number => {
    if (context.fillText !== null) {
      // 返回字体的宽度
      return context.measureText(string).width;
    }
    return 10;
  };

  render() {
    return (
      <div className={styles.body}>
        <canvas id="canvas"></canvas>
        <span id="info">Click and drag to draw!</span>
      </div>
    );
  }
}
