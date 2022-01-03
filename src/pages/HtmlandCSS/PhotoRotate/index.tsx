import React, { Component } from 'react';
import styles from './index.less';


export default class PhotoRotate extends Component {

    piclist: any;
    btns: any;
    onRotate = (value:any) =>{
        return (e:any)=>{
            this.btns.children.forEach((element: any) => {
                if(element.className = styles.active){
                    element.className = '';
                }
            });
            e.target.className = styles.active;
            let current = -(value - 1) * 90;
            this.piclist.style.transform = 'rotateX('+current+'deg)';
        }
    }
    render() {
        return (
            <div className={styles.box}>
                <ul className={styles.piclist}>
                    <li  ref={(e) => this.piclist = e}>
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <span></span>
                        <span></span>
                    </li>
                </ul>
                <ol ref={(e) => this.btns = e} className={styles.btns}>
                    <li className={styles.active} onClick={this.onRotate(1)}>1</li>
                    <li onClick={this.onRotate(2)}>2</li>
                    <li onClick={this.onRotate(3)}>3</li>
                    <li onClick={this.onRotate(4)}>4</li>
                </ol>
            </div>
        );
    }
}