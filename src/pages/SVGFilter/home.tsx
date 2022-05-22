/*
 * @Description: SVG滤镜
 * @Author: KonmaMeiko
 * @Date: 2022-05-09 14:52:03
 * @LastEditTime: 2022-05-22 19:46:31
 * @LastEditors: KonmaMeiko
 */
import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import { Layout, Menu } from 'antd';
import styles from './home.scss';
export interface prop {}

const { Header, Sider, Content } = Layout;
interface IProps extends Partial<prop>{
    onSomething: ()=>void;
}

const SVGFilter:FC<IProps> = ({onSomething})=>{

    const handleChange = (item:any) =>{
        console.log(item);
    }

    return (
        <Layout className={styles.home}>
            <Sider trigger={null} collapsible>
                <div className={styles.logo} />
                <Menu onClick={(item)=>handleChange(item)}>
                    <Menu.Item>菜单项一</Menu.Item>
                    <Menu.Item>菜单项二</Menu.Item>
                </Menu>;
            </Sider>
            <Layout className={styles.siteLayout}>
                <Content
                    className={styles.siteLayoutBackground}
                    style={{
                    padding: 24,
                    minHeight: '100vh',
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
}
//memo的使用在不希望一直跟随父组件更新的子组件上
export default React.memo(SVGFilter);