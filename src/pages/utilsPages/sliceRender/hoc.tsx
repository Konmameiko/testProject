/*
 * @Description: HOC组件
 * @Author: KonmaMeiko
 * @Date: 2022-07-29 10:18:34
 * @LastEditTime: 2026-06-06
 * @LastEditors: KonmaMeiko + 御坂10032号
 */
import { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const waitList: any[] = []; // 等待队列

const HOC =
	// eslint-disable-next-line @typescript-eslint/no-explicit-any

		(Component: any) =>
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		({ list, ...props }: any) => {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const [data, setData] = useState<any[]>([]);

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const sliceTime = (listParam: any[], times = 0, number = 100): void => {
				if (times === Math.ceil(listParam.length / number) + 1) return; // 判断条件
				// 每隔500ms 渲染100条数据
				setTimeout(() => {
					const newList = listParam.slice(times * number, (times + 1) * number);
					waitList.push(...newList);
					setData([...waitList]);
					sliceTime(listParam, times + 1, number);
				}, 500);
			};

			useEffect(() => {
				if (list.length !== 0) {
					sliceTime(list, 0);
				}
			}, [list]);

			if (list.length === 0) return <></>;

			return (
				<>
					{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
					{data.map((item: any) => (
						<Component id={item} {...props} key={item} />
					))}
				</>
			);
		};

export default HOC;
