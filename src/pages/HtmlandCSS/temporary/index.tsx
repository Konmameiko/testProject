import React, { Component } from 'react';
import styles from './index.less'

class Index extends Component {

    current = false;
    state={
        count: 1,
        isDisable: false,
        color: 'blue',
    } 

    handleClick = () =>{
        if(this.current === false){
            let timer = setTimeout(() => {
                this.setState({isDisable: true})
                clearTimeout(timer)
                console.log('已禁止', timer)
            },  5000 );
            this.current = true;
        }
        let {count} = this.state;
        this.setState({count: ++count})
    }

    render() {
        const {count, isDisable, color} = this.state;
        return (
            <div className={styles.basic}>
                {/* <div className={styles.photo1} />
                <div className={styles.photo2} />
                <div className={styles.photo3} /> */}
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0"
                    width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 30 30" xmlSpace="preserve" filter='url(#puzzleNormalShadow)'>
                    {/* <path fill="#fff" d="M0 86.60254037844386L50 0L150 0L200 86.60254037844386L150 173.20508075688772L50 173.20508075688772Z"/> */}
                    <path fill={color} d="M50 119.28203230275508L90 50L170 50L210 119.28203230275508L170 188.56406460551017L90 188.56406460551017Z" />
                    <filter id="puzzleNormalShadow" x="-50%" y="-50%" width="200%" height="200%">
                        {/* 模糊作用 in表示作用区域 SourceAlpha表示透明区域 13表示模糊的程度 */}
                        <feGaussianBlur in="SourceAlpha" stdDeviation="13" />
                        {/* feMorphology是用来扩大或者缩小内容的。operator="dilate"表示扩大。result表示记录产物为offsetblur */}
                        <feMorphology operator="dilate" radius="6" result="offsetblur" />
                        {/* 表示填充的颜色 可指定透明度 */}
                        <feFlood flood-color="#ffe4b1" flood-opacity="0.75" />
                        {/* 合并图像 有in和**in2 **2个属性。其中，in缺省则自动使用上一步的产物 */}
                        {/* operator采用Porter-Duff合成里的over、in、atop、xor */}
                        <feComposite result="outblur" in2="offsetblur" operator="in" />
                        {/* 内发光的制作过程  与外发光相似  */}
                        <feFlood flood-color="#ffe4b1" flood-opacity="0.75" />
                        <feComposite in2="SourceGraphic" operator="out" />
                        <feGaussianBlur stdDeviation="13" />
                        <feComposite result="inblur" in2="SourceGraphic" operator="atop" />
                        {/* 将二者合并 */}
                        <feMerge>
                            <feMergeNode in="outblur" />
                            <feMergeNode in="inblur" />
                        </feMerge>
                    </filter>
                </svg>
                <button className={styles.btn} disabled={isDisable} onClick={this.handleClick}>{count}</button>
                <div className={styles.circle} />
            </div>
        );
    }
}

export default Index;
