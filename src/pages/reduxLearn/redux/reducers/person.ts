import {ADD_PERSON} from '../constant'

const initState = [{id:'001', name:"thresh", job:"典狱长"}]//初始化状态
export default function countReducer(preState=initState,action:any){
	//从action对象中获取：type、data
	const {type,data} = action
	//根据type决定如何加工数据
	switch (type) {
		case ADD_PERSON: //如果是加
			return [data,...preState]
		default:
			return preState
	}
}