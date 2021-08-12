import React, { Component } from 'react'
import Count from './components/count' //引入的Count的容器组件
import Person from './components/person' //引入的Person的容器组件

export default class reduxLearn extends Component {
	render() {
		return (
			<div>
				<Count/>
				<hr/>
				<Person/>
			</div>
		)
	}
}
