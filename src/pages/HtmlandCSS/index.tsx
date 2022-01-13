import { Component } from 'react'
import { Layout,Tabs} from 'antd';
import Rotate from './PhotoRotate';
import Sliding from './SlidingPhoto';
import Erasure from './PhotoErasure';
import ThreeD from './PhotoThreeD';
import TimerShaft from './TimeShaftMake';
import SimpleSearch from './simpleSearch';
import SimpleLogin from './simpleLogin';
import Drop from './drop';
import FlatPreloader from './FlatPreloader';
import Wave from './wave/wave';
import DrawText from './drag2drawText';
import Temporary from './temporary';
import StarSky from './starSky/Less2Stars';
import Interstellar from './Interstellar';


import styles from './index.less'
const { Header, Content} = Layout;
const { TabPane } = Tabs;

class index extends Component {

    state = {
        key : 1
    }
    array = [
        {name:"图片立方体旋转",index:"1"},
        {name:"轮播图与滚动图片",index:"2"},
        {name:"图片擦除",index:"3"},
        {name:"图片3D 轮播",index:"4"},
        {name:"时间轴制作",index:"5"},
        {name:"简易搜索框",index:"6"},
        {name:"简易登陆界面",index:"7"},
        {name:"拖拽及缩放页面",index:"8"},
        {name:"平缓的缓冲效果",index:"9"},
        {name:"拖拽生成字符串",index:"10"},
        {name:"星空特效",index:"11"},
        {name:"海浪动画",index:"12"},
        {name:"简单的视差滚动效果",index:"13"},
        {name:"星际穿越",index:"14"},
        {name:"临时Demo页",index:"15"},
    ];

    switchDemo = (value:any) =>{
        console.log(value);
        switch(value){
            case 1:
                return <Rotate/>
            case 2:
                return <Sliding/>
            case 3:
                return <Erasure/>
            case 4:
                return <ThreeD/>
            case 5:
                return <TimerShaft/>
            case 6:
                return <SimpleSearch/>
            case 7:
                return <SimpleLogin/>
            case 8:
                return <Drop/>
            case 9:
                return <FlatPreloader/>
            case 10:
                return <DrawText/>
            case 11:
                return <StarSky/>
            case 12:
                return <Wave/>
            case 14:
                return <Interstellar/>
            case 15:
                return <Temporary/>
            default:
                return <FlatPreloader/>
        }
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
                    <Tabs className={styles.tabs} defaultActiveKey="0" onChange={this.setTabKey} destroyInactiveTabPane={true} type={'line'}>
                        {this.array.map((obj, index) => {
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
