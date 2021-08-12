import { Component } from 'react';
import styles from './todo.less';
export default class TodoList extends Component {

    state = {data:[{id:0,name:"吃饭",isdone:false}],total:0}

    componentDidMount(){
        const stroageData = localStorage.getItem('lists');
        var total = 0;
        if(stroageData){
            this.setState({data:JSON.parse(stroageData)},()=>{
                this.state.data.map((item)=>{
                    if(item.isdone === true)    total++;
                    this.setState({total:total});
                }
            )});
        }else{
            localStorage.setItem('lists',JSON.stringify([]));
        }
    }

    onSubmit = (e:any) =>{
        let length = this.state.data.length;
        let id = 1;
        if(length){
            id = this.state.data[0].id + 1;
        }
        if(e.keyCode == 13){
            if(e.target.value.trim()){
                let tmp = {id:id,name:e.target.value.trim(),isdone:false};
                this.setState({data:[tmp,...this.state.data]},()=>{
                    //清空数据
                     e.target.value = '';
                });
            }else{
                alert('数据不能为空');
            }
        }
    }

    handleCheck = (id:Number) =>{
        return (e:any)=>{
            var total = 0;
            this.state.data.map((item)=>{
                if(item.id === id){
                    item.isdone = e.target.checked;
                    
                }
                if(item.isdone === true){
                    total++;
                } 
            });
            this.setState({total:total});
        }
    }

    delOne = (id:Number) =>{
        return ()=>{
            if(confirm('确认要删除吗？')){
                console.log('测试');
                var total = this.state.total;
                const newdata = this.state.data.filter((item)=>{
                    if(item.id == id && item.isdone === true)   total--;
                    return item.id !== id;
                });
                this.setState({data:newdata,total:total});
            } 
        }  
    }

    delAll = () =>{
        this.setState({data:[],total:0});
    }

    saveAll = () =>{
        let data = this.state.data;
        localStorage.setItem('lists',JSON.stringify(data)); 
        alert('已保存');
    }

    render() {
        return (
            <div className={styles.todoList}>
                <input className={styles.input} type="text" placeholder="请输入任务名称，按回车确认" onKeyUp={this.onSubmit}/>
                <ul className={styles.lists}>
                    {
                        this.state.data.map((item) => {
                        return (
                            <li key={item.id} className={styles.list}>
                                <label>
                                    <input type="checkbox" defaultChecked={item.isdone} onChange={this.handleCheck(item.id)}/>
                                    <span>{item.name}</span>
                                </label>
                                <button className={styles.delButton} onClick={this.delOne(item.id)}>删除</button>
                            </li>
                        );
                    })}
                </ul>
                <div className={styles.footer}>
                    <span>当前任务总数为</span><span>{this.state.total}</span><span>/</span><span>{this.state.data.length}</span>
                    <button className={styles.saveButton} onClick={this.saveAll}>保存当前任务</button>
                    <button className={styles.fotButton} onClick={this.delAll}>删除当前所有任务</button>
                </div>
            </div>
        );
    }
}

