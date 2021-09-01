import React, { Component } from 'react'
import styles from './index.less'

export default class index extends Component<any,any> {
    disX:number;
    disY:number;
    constructor(props:any) {
        super(props)
        this.state = {
            needX: 100,
            needY: 100,
        }
        this.disX = 0;
        this.disY = 0;
    }

    fnDown(e:any) {
        // 第二步：记录拖拽起始位置，鼠标按下时document绑定onmousemove事件，实时改变元素的布局style
        this.disX = e.clientX - e.target.offsetLeft;
        this.disY = e.clientY - e.target.offsetTop;
        document.onmousemove = this.fnMove.bind(this)
    }
    fnMove(e:any) {
        this.setState({
            needX: e.clientX - this.disX,
            needY: e.clientY - this.disY
        })
    }
    fnUp() {
        // 第三步：鼠标放开时document移除onmousemove事件
        document.onmousemove = null
    }

    render() {
        // 第一步：拖拽元素绑定onmousedown，onmouseup事件
        const {needX, needY} = this.state;
        return(
            <div>
                <div
                    className={styles.drapable}
                    style={{left:needX,top:needY}}
                    onMouseDown = {this.fnDown.bind(this)}
                    onMouseUp = {this.fnUp.bind(this)}
                />
            </div>
        )
    }
}