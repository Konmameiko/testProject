import React, { Component } from 'react'
import styles from './index.less'

// 原项目地址  https://codepen.io/tholman/pen/qCnfB
let counter = 0;
let minFontSize = 3;
let letters = "'壬戌之秋,七月既望，苏子与客泛舟游于赤壁之下。清风徐来，水波不兴，举酒属客，诵明月之诗，歌窈窕之章。少焉，月出于东山之上，裴回于斗牛之间。白露横江，水光接天，纵一苇之所如，凌万顷之茫然。浩浩乎如冯虚御风，而不知其所止；飘飘乎如遗世独立，羽化而登仙。于是饮酒乐甚，扣舷而歌之。歌曰：“桂棹兮兰桨，击空明兮溯流光。渺渺兮予怀，望美人兮天一方。”客有吹洞箫者，倚歌而和之。其声呜呜然，如怨如慕，如泣如诉，余音袅袅，不绝如缕。舞幽壑之潜蛟，泣孤舟之嫠妇。苏子愀然，正襟危坐而问客曰：“何为其然也？”客曰：“月明星稀，乌鹊南飞，此非曹孟德之诗乎？西望夏口，东望武昌，山川相缪，郁乎苍苍，此非孟德之困于周郎者乎？方其破荆州，下江陵，顺流而东也，舳舻千里，旌旗蔽空，酾酒临江，横槊赋诗，固一世之雄也，而今安在哉？况吾与子渔樵于江渚之上，侣鱼虾而友麋鹿，驾一叶之扁舟，举匏樽以相属。寄蜉蝣于天地，渺沧海之一粟。哀吾生之须臾，羡长江之无穷。挟飞仙以遨游，抱明月而长终。知不可乎骤得，托遗响于悲风。'";


interface ptType{
    x:number, 
    y:number,
}

interface pt2Type{
    x:number, 
    y:number,
    down: boolean,
}


// Drawing variables
let canvas:HTMLCanvasElement;
let context:CanvasRenderingContext2D;
let position:ptType = {x: 0, y: window.innerHeight/2};
let mouse:pt2Type = {x: 0, y: 0, down: false};
export default class index extends Component {

    componentDidMount(){
        canvas = document.getElementById( 'canvas' ) as HTMLCanvasElement;
        context = canvas.getContext( '2d' ) as CanvasRenderingContext2D;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        canvas.addEventListener('mousemove', this.mouseMove, false);
        canvas.addEventListener('mousedown', this.mouseDown, false);
        canvas.addEventListener('mouseup', this.mouseUp, false);
        canvas.addEventListener('mouseout', this.mouseUp, false);  
        canvas.addEventListener('dblclick', this.doubleClick, false);
        
        window.onresize = function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    }

    // 移动事件
    mouseMove = ( event:any ) =>{
        // 减去div外的宽高
        mouse.x = event.pageX - 76;
        mouse.y = event.pageY - 90;
        this.draw();
    }
      
    draw = () => {
        if ( mouse.down ) {
            const d = this.distance( position, mouse );
            const fontSize = minFontSize + d/2;
            const letter = letters[counter];
            const stepSize = this.textWidth( letter);
            if (d > stepSize) {
                // 返回从原点(0,0)到(x,y)点的线段与x轴正方向之间的平面角度 (0-> π -π -> 0)
                const angle = Math.atan2(mouse.y-position.y, mouse.x-position.x);
                context.font = fontSize + "px kaiTi";
                context.save();
                context.translate( position.x, position.y);
                context.rotate(angle);
                context.fillText(letter, 0, 0);
                context.restore();
                counter++;
                if (counter > letters.length-1) {
                    counter = 0;
                }
            
                //console.log (position.x + Math.cos( angle ) * stepSize)
                position.x = position.x + Math.cos(angle) * stepSize;
                position.y = position.y + Math.sin(angle) * stepSize;
            }
        }   
        console.log(position, mouse)  
    }
      
    distance = ( pt:ptType, pt2:pt2Type ) =>{
        var xs = 0;
        var ys = 0;
       
        xs = pt2.x - pt.x;
        xs = xs * xs;
       
        ys = pt2.y - pt.y;
        ys = ys * ys;
       
        // console.log(pt, pt2)
        return Math.sqrt( xs + ys );
    }
      
    mouseDown = ( event:any) =>{
        mouse.down = true;
        position.x = event.pageX - 76;
        position.y = event.pageY - 90;
        const infoHtml = document.getElementById('info') as HTMLSpanElement;
        infoHtml.style.display = 'none';
    }
      
    mouseUp = () =>{
        mouse.down = false;
    }
      
    doubleClick = () =>{
        canvas.width = canvas.width; 
        const infoHtml = document.getElementById('info') as HTMLSpanElement;
        infoHtml.style.display = 'inline';
    }
      
    textWidth = ( string:string): number =>{
        if ( context.fillText !== null) {
            // 返回字体的宽度
            return context.measureText( string ).width;
        } 
        return 10;
        // else if ( context.mozDrawText) {
        //     return context.mozMeasureText( string );
        // }
    };

    render() {
        return (
            <div className={styles.body}>
                <canvas id='canvas'></canvas>
                <span id='info'>Click and drag to draw!</span>
            </div>
        )
    }
}
