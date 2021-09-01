import React, { Component } from 'react';
import styles from './index.less';
import Scratch from 'react-scratch-perfect';


class PhotoErasure extends Component {

    handlePre = (e:any)=>{
        console.log("test")
    }

    onSuccess = () =>{
        console.log('完成')
    }

    render() {
        return (
            <div className={styles.body}>
                <Scratch
                    //填充图片
                    img={require('@/assets/images/8.jpg')}
                    //内部图片与上下左右的间距值
                    round={[0,0,0,0]}
                    //画笔直径
                    size={50}
                    //完成多少算结束
                    percentage={90}
                    //结束后是否清空画布
                    clear={true}
                    //鼠标抬起时触发事件
                    mode="end"
                    onChange = {this.handlePre}
                    onSuccess= {this.onSuccess}
                    className={styles.scratch}
                    /* imgRepeat:	
                        width: 宽度撑满，高度自适应并居中
                        ]height: 高度撑满，宽度自适应并居中
                        repeat: 重复填充
                        无值或者其他值会被拉伸铺满容器
                    */
                >
                    <img className={styles.img2} src={require('@/assets/images/2.jpg')} alt=""/>
                </Scratch>
            </div>
        );
    }
}

export default PhotoErasure;