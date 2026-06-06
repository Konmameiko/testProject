/*
 * @Description: 常用函數API
 * @Author: KonmaMeiko
 * @Date: 2022-06-02 14:34:29
 * @LastEditTime: 2026-06-06
 * @LastEditors: KonmaMeiko + 御坂10032号
 */

// 方法耗时测试
export const handleTimeSpend = (fn: (...args: unknown[]) => unknown, ...args: unknown[]): void => {
	// eslint-disable-next-line no-console
	console.time('test');
	const res = fn(...args);
	// eslint-disable-next-line no-console
	console.timeEnd('test');
	// eslint-disable-next-line no-console
	console.log('运算结果为 ', res);
};

/**
 * @param fn 函数柯里化——将使用多个参数的一个函数转换成一系列使用一个参数的函数
 */
export const curry = (fn: (...args: unknown[]) => unknown): ((...args: unknown[]) => unknown) => {
	if (fn.length <= 1) return fn;
	const generator = (...args: unknown[]): unknown => {
		if (fn.length === args.length) {
			return fn(...args);
		}
		return (...args2: unknown[]) => generator(...args, ...args2);
	};
	return generator;
};

/**
 * @param func 防抖函数
 * @param time 规定时间
 * @param options 可传入参数
 * @returns 在规定时间内再次触发事件会将上次的定时器清除，
 * 即不会执行函数并重新设置一个新的定时器，
 * 直到超过规定时间自动触发定时器中的函数
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = (
	func: (...args: any[]) => void,
	time = 100,
	options: {
		leading?: boolean;
		trailing?: boolean; // eslint-disable-next-line @typescript-eslint/no-explicit-any
		context?: any;
	} = {
		leading: false,
		context: null,
	},
): ((...args: unknown[]) => void) => {
	let timer: ReturnType<typeof setTimeout> | null;
	const _debounce = (...args: unknown[]): void => {
		if (timer) {
			clearTimeout(timer);
		}
		if (options.leading && !timer) {
			timer = setTimeout(() => {
				/* leading: skip first call */
			}, time);
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
	 */
	_debounce.cancel = () => {
		if (timer) clearTimeout(timer);
		timer = null;
	};
	return _debounce;
};

// 节流函数
// 每隔n的时间调用一次函数，而不是一触发事件就调用一次
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const throttle = (
	func: (...args: any[]) => void,
	time = 100,
	options: {
		leading?: boolean;
		trailing?: boolean; // eslint-disable-next-line @typescript-eslint/no-explicit-any
		context?: any;
	} = {
		leading: false,
		trailing: false,
		context: null,
	},
): ((...args: unknown[]) => void) => {
	let previous = new Date(0).getTime();
	let timer: ReturnType<typeof setTimeout> | null;
	const _throttle = (...args: unknown[]): void => {
		const now = new Date().getTime();
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
			if (timer) clearTimeout(timer);
			timer = setTimeout(() => {
				func.apply(options.context, args);
			}, time);
		}
	};

	_throttle.cancel = () => {
		previous = 0;
		if (timer) clearTimeout(timer);
		timer = null;
	};
	return _throttle;
};
