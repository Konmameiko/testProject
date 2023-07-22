const handleTimeSpend = (fn, args) => {
	console.log('传入参数：', typeof fn, ...args);
	console.time('test');
	const res = fn(...args);
	console.timeEnd('test'), console.log('运算结果为 ', res);
};

// 异步事件测试
function timeout(ms) {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
}
async function test() {
	console.log('hello');
	await timeout(2000);
	console.log('world');
	await timeout(2000);
	// await Promise.reject('is error');
	return 'A nice day~!';
}
// test().then(v => console.log(v)).catch(e => console.log(e));

// 循环实现some方法
Array.prototype.selfSome = function (fn, context) {
	// 将自定义方法绑定在原型链上
	let arr = Array.prototype.slice.call(this);
	if (!arr.length) return false;
	for (let i = 0; i < arr.length; i++) {
		if (!arr.hasOwnProperty(i)) continue; // 去除无效的空值
		let res = fn.call(context, arr[i], i, this); // 为传入的方法绑定参数
		if (res) return true;
	}
	return false;
};
const SomeFun = (item, index, array) => {
	return item > 10;
};
// console.log([1, 2, 3, , 11, 6, 7].selfSome(SomeFun))

// 循环实现reduce方法
Array.prototype.selfReduce = function (fn, initialValue) {
	let arr = Array.prototype.slice.call(this);
	let res;
	let startIndex;
	if (initialValue === undefined) {
		// 找到第一个非空单元的元素和下标
		for (let i = 0; i < arr.length; i++) {
			if (!arr.hasOwnProperty(i)) continue;
			startIndex = i;
			res = arr[i];
			break;
		}
	} else {
		res = initialValue;
	}
	for (let i = ++startIndex || 0; i < arr.length; i++) {
		if (!arr.hasOwnProperty(i)) continue;
		res = fn.call(null, res, arr[i], i, this);
	}
	return res;
};
const SomeFun1 = (prev, cur) => {
	return prev * cur;
};
// console.log([1, 2, 3, , 11, 6, 7].selfReduce(SomeFun1, undefined))

// 利用reduce实现flat方法
//flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
const selfFlat = function (depth = 1) {
	// 设定默认深度为1
	let arr = Array.prototype.slice.call(this);
	if (depth === 0) return arr;
	return arr.reduce((prev, cur) => {
		if (Array.isArray(cur)) {
			return [...prev, ...selfFlat.call(cur, depth - 1)];
		} else {
			return [...prev, cur];
		}
	}, []);
};
Array.prototype.selfFlat = selfFlat;
// console.log([1, 2, [2, 10], 5, 8, [1, [2, 6]]].selfFlat(1))

// 实现ES6的class语法
function inherit(subType, superType) {
	// 通过 Object.create 方法创造一个空对象，并将这个空对象继承 Object.create 方法的参数
	// 再让子类（subType）的原型对象等于这个空对象，就可以实现子类实例的原型等于这个空对象，
	// 而这个空对象的原型又等于父类原型对象（superType.prototype）的继承关系
	subType.prototype = Object.create(superType.prototype, {
		constructor: {
			enumerable: false, // 不可枚举
			configurable: true,
			writable: true,
			value: subType,
		},
	});
	// 将 superType 设置为 subType 的原型，从而能够从父类中继承静态方法和静态属性
	Object.setPrototypeOf(subType, superType);
}
function food(name, price) {
	this.name = name;
	this.price = price;
}
food.prototype.sayHi = function () {
	return this.color;
};
function rice(name, price, color) {
	food.call(this, name, price);
	this.color = color;
}
inherit(rice, food); // 继承原型外定义的属性 如sayHi
let instance0 = new food('rice', '15');
let instance1 = new rice('rice', '25', 'black');
// console.log(instance1.sayHi());

// 函数柯里化  将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术
const curry = function (fn) {
	if (fn.length <= 1) return fn;
	const generator = (...args) => {
		if (fn.length === args.length) {
			return fn(...args);
		} else {
			return (...args2) => {
				return generator(...args, ...args2);
			};
		}
	};
	return generator;
};
let add = (a, b, c, d, e) => a + b + c + d + e;
const curryAdd = curry(add);
// console.log(curryAdd(5)(6)(7)(8, 9));    // 35

// 斐波那契数列 memory函数存储
let fibonacci = function (n) {
	if (n < 1) throw new Error('invaild parameter');
	if (n === 1 || n === 2) return 1;
	return fibonacci(n - 1) + fibonacci(n - 2);
};
const memory = fn => {
	// 对于频繁依赖之前结果的计算能够节省大量的时间
	let obj = {};
	return function (n) {
		if (obj[n] === undefined) obj[n] = fn(n);
		return obj[n];
	};
};
function fibonacci_dp(n) {
	let res = 1;
	if (n === 1 || n === 2) return res;
	n = n - 2;
	let cur = 1;
	let pre = 1;
	while (n) {
		res = cur + pre;
		pre = cur;
		cur = res;
		n--;
	}
	return res;
}
// handleTimeSpend(fibonacci, [39])   // 未采用memory存储 447ms
// fibonacci = memory(fibonacci);      // 修改fibonacci的方法
// handleTimeSpend(fibonacci, [59])    // 采用memory存储 0-1ms
// handleTimeSpend(fibonacci_dp, [39])   // 采用动态规划 0-1ms

// bind() 方法创建一个新的函数，在 bind() 被调用时
// 这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用
const isComplexDataType = obj => (typeof obj === 'object' || typeof obj === 'function') && obj !== null;
// 实现一个简易的bind
const selfBind = function (bindTarget, ...args1) {
	if (typeof this !== 'function') throw new TypeError('Bind must be called on a function');
	const originFunc = this;
	const boundFunc = function (...args2) {
		// 使用new关键字调用返回新对象
		if (new.target) {
			let res = originFunc.call(this, ...args1, ...args2);
			//如果构造函数返回一个对象则返回这个对象
			if (isComplexDataType(res)) return res;
			//否则返回新建的对象
			return this;
		} else {
			return originFunc.call(bindTarget, ...args1, ...args2);
		}
	};
	/**
	 * 真正的 bind 创建的函数是没有 prototype 的，取而代之有个 [[TargetFunction]] 保存 bind 前的函数
	 * 使用 new 会将创建的对象的 __proto__ 连接 [[TargetFunction] prototype (非箭头函数)
	 * 这里给 bind 后的函数手动设置一个 prototype 属性，模拟这个行为
	 * **/
	// 箭头函数则没有 prototype
	if (originFunc.prototype) {
		boundFunc.prototype = originFunc.prototype;
	}

	// 定义绑定后函数的长度和名字
	const desc = Object.getOwnPropertyDescriptors(originFunc);
	Object.defineProperties(boundFunc, {
		length: desc.length,
		name: Object.assign(desc.name, {
			value: `bound ${desc.name.value}`,
		}),
	});
	return boundFunc;
};
Function.prototype.selfBind ||
	Object.defineProperty(Function.prototype, 'selfBind', {
		value: selfBind,
		enumerable: false,
		configurable: true,
		writable: true,
	});

// function oriFunc(name, age){
//     this.name = name;
//     this.age = age;
// }
// const obj ={color: 'blue'};
// const bouFunc = oriFunc.selfBind(obj);      // this指向obj对象
// new bouFunc(12, 23)
// console.log(obj)    // {color: 'blue'}
// bouFunc(23, 12)
// console.log(obj)    // {color: 'blue', name: 23, age: 12}

// call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。
const selfCall = function (context, ...args) {
	let func = this; // 指向当前方法    f(age, color){ this.age = age;    this.color = color;}
	// console.log(context, args)  // {a:1}   [18, 'red']
	context || (context = window); // 如果不存在绑定最外层
	if (typeof func !== 'function') throw new TypeError('Call must be called on a function');
	let caller = Symbol('caller');
	context[caller] = func;
	// console.log(context)    // {a: 1, Symbol(caller): ƒ}
	context[caller](...args); // fn(...args)
	delete context[caller];
	// return res;
};
Function.prototype.selfCall ||
	Object.defineProperty(Function.prototype, 'selfCall', {
		value: selfCall,
		enumerable: false,
		configurable: true,
		writable: true,
	});
// let func = function(age, color){
//     this.age = age;
//     this.color = color;
// }
// let example2 = {a: 1}
// func.selfCall(example2, 18, 'red')

// 防抖函数
// 在规定时间内再次触发事件会将上次的定时器清除，即不会执行函数并重新设置一个新的定时器，直到超过规定时间自动触发定时器中的函数
const debounce = (
	func,
	time = 100,
	options = {
		leading: false,
		context: null,
	},
) => {
	let timer;
	const _debounce = function (...args) {
		if (timer) {
			clearTimeout(timer);
		}
		if (options.leading && !timer) {
			timer = setTimeout(null, time);
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
		clearTimeout(timer);
		timer = null;
	};
	return _debounce;
};
const sayHi = function (name) {
	console.log('hello world ', name);
};
const test2 = debounce(sayHi, 2000);
// document.onclick = function (e) {
//      // 给防抖函数传参
//      test12('Alice');
// }

// 节流函数
// 每隔n的时间调用一次函数，而不是一触发事件就调用一次
const throttle = (
	func,
	time = 100,
	options = {
		leading: false,
		trailing: false,
		context: null,
	},
) => {
	let previous = new Date(0).getTime();
	let timer;
	const _throttle = function (...args) {
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
			clearTimeout(timer);
			timer = setTimeout(() => {
				func.apply(options.context, args);
			}, time);
		}
	};

	_throttle.cancel = () => {
		previous = 0;
		clearTimeout(timer);
		timer = null;
	};
	return _throttle;
};
const test3 = throttle(sayHi, 2000); // 将节流函数赋值给test3
// setInterval(()=>{
//     test3();
// }, 100)

// new关键字
const selfNew = function (fn, ...rest) {
	let instance = Object.create(fn.prototype);
	let res = fn.apply(instance, rest);
	return isComplexDataType(res) ? res : instance;
};
const test4 = selfNew(food, '12', 23);
// console.log(test4)  // {name: '12', price: 23}

//
