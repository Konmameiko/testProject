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
import FrostedGlass from './frostedGlass/frosted';
import FrostedGlassBg from './frostedGlassBg';
import NotFound from './404';
import Recharge from './recharge';

import styles from './index.less'

const { Header, Content} = Layout;
const { TabPane } = Tabs;

class index extends Component {

    state = {
        key : sessionStorage.getItem('HtmlDemoIndex') || '0'
    }
    array = [
        {name:"图片立方体旋转",index:"1", component: <Rotate/>},
        {name:"轮播图与滚动图片",index:"2", component: <Sliding/>},
        {name:"图片擦除",index:"3", component: <Erasure/>},
        {name:"图片3D 轮播",index:"4", component: <ThreeD/>},
        {name:"时间轴制作",index:"5", component: <TimerShaft/>},
        {name:"简易搜索框",index:"6", component: <SimpleSearch/>},
        {name:"简易登陆界面",index:"7", component: <SimpleLogin/>},
        {name:"拖拽缩放页面",index:"8", component: <Drop/>},
        {name:"load组件页",index:"9", component: <FlatPreloader/>},
        {name:"拖拽生成字符串",index:"10", component: <DrawText/>},
        {name:"雪花特效",index:"11", component: <StarSky/>},
        {name:"海浪动画",index:"12", component: <Wave/>},
        {name:"简单的视差滚动效果",index:"13", component: <NotFound/>},
        {name:"星际穿越",index:"14", component: <Interstellar/>},
        {name:"临时Demo页",index:"15", component: <Temporary/>},
        {name:"毛玻璃效果",index:"16", component: <FrostedGlass/>},
        {name:"毛玻璃渐变背景",index:"17", component: <FrostedGlassBg/>},
        {name:"安卓手机充电效果",index:"18", component: <Recharge/>},
    ];

    switchDemo = (value:any) =>{
        return this.array[value].component;
    }

    setTabKey = (key:any) =>{
        sessionStorage.setItem('HtmlDemoIndex', key);
        this.setState({key})
    }

    render() {
        const {key} = this.state;
        return (
            <Layout className={styles.layout}>
                <Header>
                    <Tabs className={styles.tabs} defaultActiveKey="0" onChange={this.setTabKey} activeKey={key+''} destroyInactiveTabPane={true} type={'line'}>
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