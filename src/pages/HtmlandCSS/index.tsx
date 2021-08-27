import React,{ Component } from 'react'
import { Layout,Tabs} from 'antd';
import Rotate from './PhotoRotate';
import Sliding from './SlidingPhoto';
import Erasure from './PhotoErasure';
import ThreeD from './PhotoThreeD'
import TimerShaft from './TimeShaftMake'
import SimpleSearch from './simpleSearch'
import SimpleLogin from './simpleLogin'
import styles from './index.less'


const { Header, Content} = Layout;
const { TabPane } = Tabs;
const array = [
    {name:"图片立方体旋转",index:"1",components:<Rotate />},
    {name:"轮播图与滚动图片",index:"2",components:<Sliding />},
    {name:"图片擦除",index:"3",components:<Erasure />},
    {name:"图片3D 轮播",index:"4",components:<ThreeD />},
    {name:"时间轴制作",index:"5",components:<TimerShaft />},
    {name:"简易搜索框",index:"6",components:<SimpleSearch />},
    {name:"简易登陆界面",index:"7",components:<SimpleLogin />},
    {name:"视觉差名片",index:"8",components:<Rotate />},
    {name:"3D变形分裂卡片",index:"9",components:<Rotate />},
    {name:"鼠标悬停灯泡字",index:"10",components:<Rotate />},
    {name:"灰度悬停效果",index:"11",components:<Rotate />},
    {name:"简单的视差滚动效果",index:"12",components:<Rotate />},
    {name:"简单的视差滚动效果",index:"13",components:<Rotate />},
];
class index extends Component {

    state = {
        key : 1
    }

    switchDemo = (value:any) =>{
        const MyComponent = array[value-1].components;
        return MyComponent;
    }

    setTabKey = (key:any) =>{
        this.setState({key:Number(key)+1})
    }

    render() {
        const {key} = this.state;
        return (
            <Layout className={styles.layout}>
                <Header>
                <div className={styles.logo} />
                    <Tabs className={styles.tabs} defaultActiveKey="0" onChange={this.setTabKey}>
                        {array.map((obj, index) => {
                            return <TabPane tab={obj.name} key={index}></TabPane>
                        })}
                    </Tabs>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                <div className={styles.site_layout_content}>
                    {
                        this.switchDemo(key)
                    }
                </div>
                </Content>
            </Layout>
        )
    }
}
export default index;
