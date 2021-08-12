import React, { Component } from 'react'
import styles from '../SPA.less'
import {NavLink, Route} from 'umi';
import news from './News'
import message from './Message';

export default class Home extends Component {
	render() {
		return (
			<div>
				<h3>我是Home的内容</h3>
				<div>
					<NavLink to="/Test/SPAandRouter/home/news" className={styles.news} activeClassName={styles.act}>news</NavLink>
					<NavLink to={{pathname:`/Test/SPAandRouter/home/message`, state:{id:1, name:'test'}}} className={styles.message}  activeClassName={styles.act}>message</NavLink>
				</div>
				<div className={styles.tip1}>
                    {/* *注册路由*/}
                    <Route path='/Test/SPAandRouter/home/news' component={news}></Route>
                    <Route path='/Test/SPAandRouter/home/message' component={message}></Route>
                    {/* <About/>
                    <Home/> */}
                </div>
			</div>
		)
	}
}

