/*
 * @Description: SVG滤镜
 * @Author: KonmaMeiko
 * @Date: 2022-05-09 14:52:03
 * @LastEditTime: 2022-05-27 16:35:31
 * @LastEditors: KonmaMeiko
 */
import React, { FC, useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import HaloEffect from './components/haloEffect';
import MosaicEffect from './components/mosaicEffect';
import styles from './home.scss';
export interface prop {}

const { Header, Sider, Content } = Layout;
interface IProps extends Partial<prop> {
  onSomething: () => void;
}

const SVGFilter: FC<IProps> = ({ onSomething }) => {
  const [itemKey, setItemKey] = useState<string>('item-1');
  const [indexKey, setIndexKey] = useState<Map<string, JSX.Element>>(new Map());
  const items = [
    // 菜单项务必填写 key
    { label: '光晕滤镜特效', key: 'item-1', component: <HaloEffect /> },
    { label: '马赛克滤镜特效', key: 'item-2', component: <MosaicEffect /> },
  ];

  useEffect(() => {
    const tempMap = new Map();
    for (let i of items) {
      tempMap.set(i.key, i.component);
    }
    setIndexKey(tempMap);
  }, []);

  const handleChange = (item: any) => {
    setItemKey(item.key);
  };

  const renderComponents = () => {
    if (indexKey.size != 0) {
      return indexKey.get(itemKey);
    } else {
      return <h1>Loading......</h1>;
    }
  };

  return (
    <Layout className={styles.home}>
      <Sider trigger={null} collapsible>
        <div className={styles.logo}>Not 摸</div>
        <Menu
          style={{ backgroundColor: 'white' }}
          onClick={(item) => handleChange(item)}
          items={items}
        />
      </Sider>
      <Layout className={styles.siteLayout}>
        <Content
          className={styles.siteLayoutBackground}
          style={{
            padding: 0,
            minHeight: '100vh',
          }}
        >
          {renderComponents()}
        </Content>
      </Layout>
    </Layout>
  );
};
//memo的使用在不希望一直跟随父组件更新的子组件上
export default React.memo(SVGFilter);
