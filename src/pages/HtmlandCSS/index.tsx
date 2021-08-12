import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import styles from './index.less'
import { NavLink, Route } from 'umi';
import Rotate from './PhotoRotate';
import Sliding from './SlidingPhoto';
import Erasure from './PhotoErasure';

const { Header, Content, Footer } = Layout;

export default class index extends Component {
    array = [
        {name:"图片立方体旋转", router:"/Test/Html_CSSLearn/photoRotate"},
        {name:"轮播图与滚动图片", router:"/Test/Html_CSSLearn/slidingPhoto"},
        {name:"图片擦除", router:"/Test/Html_CSSLearn/photoErasure"},
        {name:"图片3D 轮播", router:"/Test/Html_CSSLearn/photoErasure"},
        {name:"时间轴制作", router:"/Test/Html_CSSLearn/photoErasure"},
        {name:"简易搜索框", router:"/Test/Html_CSSLearn/photoErasure"},
        {name:"简易登陆界面", router:"/Test/Html_CSSLearn/photoErasure"},
        {name:"简单的视差滚动效果", router:"/Test/Html_CSSLearn/photoErasure"},
    ];
    render() {
        return (
            <Layout className={styles.layout}>
                <Header>
                <div className={styles.logo} />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    {this.array.map((obj, index) => {
                        const key = index + 1;
                        return <Menu.Item key={key}><NavLink to={obj.router}>{obj.name}</NavLink></Menu.Item>;
                    })}
                </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb> */}
                <div className={styles.site_layout_content}>
                    {/* *注册路由*/}
                    <Route path='/Test/Html_CSSLearn/photoRotate' component={Rotate}></Route>
                    <Route path='/Test/Html_CSSLearn/slidingPhoto' component={Sliding}></Route>
					<Route path='/Test/Html_CSSLearn/photoErasure' component={Erasure}></Route>
                </div>
                </Content>
            </Layout>
//   mountNode,
        )
    }
}
