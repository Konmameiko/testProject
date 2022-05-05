import React, { Component } from 'react'
import styles from './index.less'

export default class index extends Component {


    timeTitle = ['ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ES2021', 'ES2022']

    state = {
        number : -1,
    }
    handleClick = (index:number) =>{
        this.setState({number: index});
        console.log(index, '123')
    }

    render() {
        return (
            <div className={styles.simulateBody}>
                <div className={styles.bar}>
                    {
                        this.timeTitle.map((item, index)=>{
                            return <TimeLineItem 
                            key={index}
                            title={item} 
                            text={'yiquersanli'}
                            sortKey={index} 
                            isActive={index <= this.state.number}
                            isEnd={index === this.state.number}
                            handClick={this.handleClick}/>
                        })
                    }
                    <div className={styles.line} />
                    <div className={styles.activeLine} style={{width:`${(this.state.number) * (100/7)}%`}}/>
                </div>
            </div>
        )
    }
}
interface prop{
    title ?:string,
    text ?: string,
    sortKey: number,
    isActive: boolean,
    isEnd:boolean,
    handClick: (index:number)=>void,
}
const TimeLineItem = (props:prop) =>{
    const {title, text, isEnd, sortKey, isActive, handClick} = props;
    return(
        <div className={styles.item} onClick={()=>handClick(sortKey)}>
            {
               ((isActive && !isEnd) && <div className={styles.dotActive} />) ||
               (!isActive && <div className={styles.dot} />) ||
               (isEnd && <div className={styles.dotEnd} />)
            }
            <div className={styles.title}>{title}</div>
        </div>
    )
}
