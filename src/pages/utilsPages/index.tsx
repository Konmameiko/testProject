/*
 * @Description: 功能首页
 * @Author: KonmaMeiko
 * @Date: 2022-07-28 16:21:56
 * @LastEditTime: 2022-07-28 16:24:13
 * @LastEditors: KonmaMeiko
 */
import React, { FC, Suspense, lazy } from 'react';

const SliceRender = lazy(() => import('./sliceRender/sliceRender'));

interface IProps {
	onSomething: () => void;
}

const UtilsHome: FC<IProps> = ({ onSomething }) => {
	return (
		<Suspense fallback={<div style={{ padding: 40, textAlign: 'center' }}>Loading...</div>}>
			<SliceRender />
		</Suspense>
	);
};
// memo的使用在不希望一直跟随父组件更新的子组件上
export default React.memo(UtilsHome);
