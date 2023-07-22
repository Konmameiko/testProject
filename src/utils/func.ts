/*
 * @Description: 常用函數API
 * @Author: KonmaMeiko
 * @Date: 2022-06-02 14:34:29
 * @LastEditTime: 2022-06-02 14:52:02
 * @LastEditors: KonmaMeiko
 */
class Normal {
	private static Normal: Normal = new Normal();

	private constructor() {}

	public static getInstance(): Normal {
		return this.Normal;
	}

	// 方法耗时测试
	public handleTimeSpend = (fn: any, args: any[]): void => {
		console.log('传入参数：', typeof fn, ...args);
		console.time('test');
		const res = fn(...args);
		console.timeEnd('test'), console.log('运算结果为 ', res);
	};

	/**
	 *
	 * @param fn
	 * @returns 函数柯里化  将使用多个参数的一个函数转换成一系列使用一个参数的函数
	 */
	public curry = function (fn: any): Function {
		if (fn.length <= 1) return fn;
		const generator = (...args: any[]) => {
			if (fn.length === args.length) {
				return fn(...args);
			} else {
				return (...args2: any[]) => {
					return generator(...args, ...args2);
				};
			}
		};
		return generator;
	};
	// let add = (a, b, c, d, e) => a + b + c + d + e;
	// const curryAdd = curry(add);
	// console.log(curryAdd(5)(6)(7)(8, 9));    // 35

	/**
	 *
	 * @param func 防抖函数
	 * @param time 规定时间
	 * @param options 可传入参数
	 * @returns 在规定时间内再次触发事件会将上次的定时器清除，
	 * 即不会执行函数并重新设置一个新的定时器，
	 * 直到超过规定时间自动触发定时器中的函数
	 */
	public debounce = (
		func: Function,
		time = 100,
		options = {
			leading: false,
			context: null,
		},
	) => {
		let timer: NodeJS.Timeout | null;
		const _debounce = function (...args: any[]) {
			if (timer) {
				clearTimeout(timer);
			}
			if (options.leading && !timer) {
				timer = setTimeout(() => {}, time);
				func.apply(options.context, args);
			} else {
				timer = setTimeout(() => {
					func.apply(options.context, args);
					timer = null;
				}, time);
			}
		};
		/**
		 * @description 取消函数
		 **/
		_debounce.cancel = function () {
			timer && clearTimeout(timer);
			timer = null;
		};
		return _debounce;
	};
	// const sayHi = function (name) {
	// 	console.log('hello world ', name)
	// }
	// const test2 = debounce(sayHi, 2000);
	// document.onclick = function (e) {
	//      // 给防抖函数传参
	//      test12('Alice');
	// }

	// 节流函数
	// 每隔n的时间调用一次函数，而不是一触发事件就调用一次
	public throttle = (
		func: Function,
		time = 100,
		options = {
			leading: false,
			trailing: false,
			context: null,
		},
	) => {
		let previous = new Date(0).getTime();
		let timer: NodeJS.Timeout | null;
		const _throttle = function (...args: any[]) {
			let now = new Date().getTime();
			if (!options.leading) {
				if (timer) return;
				timer = setTimeout(() => {
					func.apply(options.context, args);
					timer = null;
				}, time);
			} else if (now - previous > time) {
				func.apply(options.context, args);
				previous = now;
			} else if (options.trailing) {
				timer && clearTimeout(timer);
				timer = setTimeout(() => {
					func.apply(options.context, args);
				}, time);
			}
		};

		_throttle.cancel = () => {
			previous = 0;
			timer && clearTimeout(timer);
			timer = null;
		};
		return _throttle;
	};
	// const test3 = throttle(sayHi, 2000); // 将节流函数赋值给test3
	// setInterval(()=>{
	//     test3();
	// }, 100)
}
export default Normal;
