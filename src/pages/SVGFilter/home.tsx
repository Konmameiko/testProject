/*
 * @Description: SVG滤镜
 * @Author: KonmaMeiko
 * @Date: 2022-05-09 14:52:03
 * @LastEditTime: 2022-05-26 22:55:59
 * @LastEditors: KonmaMeiko
 */
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Layout, Menu } from 'antd';
import styles from './home.scss';
export interface prop {}

const { Header, Sider, Content } = Layout;
interface IProps extends Partial<prop> {
  onSomething: () => void;
}

const SVGFilter: FC<IProps> = ({ onSomething }) => {
  const handleChange = (item: any) => {
    console.log(item);
  };

  const items = [
    { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key
    { label: '菜单项二', key: 'item-2' },
    {
      label: '子菜单',
      key: 'submenu',
      children: [{ label: '子菜单项', key: 'submenu-item-1' }],
    },
  ];

  return (
    <Layout className={styles.home}>
      <Sider trigger={null} collapsible>
        <div className={styles.logo} />
        <Menu onClick={(item) => handleChange(item)} items={items} />
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
};
//memo的使用在不希望一直跟随父组件更新的子组件上
export default React.memo(SVGFilter);
