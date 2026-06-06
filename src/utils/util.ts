/*
 * @Description: 常用API方法
 * @Author: KonmaMeiko
 * @Date: 2022-06-02 14:41:45
 * @LastEditTime: 2026-06-06
 * @LastEditors: KonmaMeiko + 御坂10032号
 */

interface Arr2treeProps {
	id: number;
	name: string;
	pid: number;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}

/* 获取路由参数 */
export const getURLObj = (): { [key: string]: string } => {
	const url: string = window.location.search || window.location.hash;
	const theRequest: { [key: string]: string } = {};
	if (url.indexOf('?') !== -1) {
		let str: string = url.substr(1);
		// 是否为哈希路由
		if (/^\/\?||[a-zA-z0-9]+\?/.test(str)) {
			str = str.substr(str.indexOf('?') + 1);
		}
		const strs = str.split('&');
		for (let i = 0; i < strs.length; i++) {
			const temps: string = strs[i].split('=')[0];
			theRequest[temps] = decodeURIComponent(strs[i].split('=')[1]);
		}
	}
	return theRequest;
};

/* 获取随机数 */
export const getNoncestr = (): string => {
	let d = new Date().getTime();
	const noncestr = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, c => {
		const r = (d + Math.random() * 16) % 16 | 0;
		d = Math.floor(d / 16);
		return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
	});
	return noncestr;
};

/* 获取url中的参数方法 */
export const getUrlParam = (name: string): string | null => {
	// 构造一个含有目标参数的正则表达式对象
	const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
	// 匹配目标参数
	const r = window.location.search.substr(1).match(reg);

	// 返回参数
	if (r !== null) {
		return r[2];
	}
	return null;
};

/* 判断n是否为质数 */
export const getPrimeNum = (n: number): boolean => {
	if (n === 2 || n === 3) {
		return true;
	}
	if (n % 6 !== 1 && n % 6 !== 5) {
		return false;
	}
	for (let i = 5; i <= Math.sqrt(n); i += 6) {
		if (n % i === 0 || n % (i + 2) === 0) return false;
	}
	return true;
};

/* 判断字符串是否符合括号规则 */
export const isBracket = (str: string): boolean => {
	const openHandle = ['(', '{', '['];
	const handlePair = new Map([
		[')', '('],
		['}', '{'],
		[']', '['],
	]);
	const list: string[] = [];
	for (const i of str) {
		if (openHandle.indexOf(i) > -1) {
			list.push(i);
		} else if (handlePair.has(i)) {
			if (list.pop() !== handlePair.get(i)) return false;
		}
	}
	return true;
};

/* 扁平化数组转tree结构 */
export const array2tree = (array: Array<Arr2treeProps>): Arr2treeProps[] => {
	const result: Arr2treeProps[] = [];
	const itemMap: { [key: number]: Arr2treeProps & { children: Arr2treeProps[] } } = {};

	for (const item of array) {
		const { id, pid } = item;

		if (!itemMap[id]) {
			itemMap[id] = {
				...item,
				children: [],
			};
		}

		itemMap[id] = {
			...item,
			children: itemMap[id]['children'],
		};

		const treeItem = itemMap[id];

		if (pid === 0) {
			result.push(treeItem);
		} else {
			if (!itemMap[pid]) {
				itemMap[pid] = {
					...({} as Arr2treeProps),
					children: [],
				};
				itemMap[pid].id = pid;
				itemMap[pid].name = '';
				itemMap[pid].pid = 0;
			}
			itemMap[pid].children.push(treeItem);
		}
	}
	return result;
};

/* 输入框自动匹配标点符号 光标居中 */
export const PunctuationMatch = (): void => {
	/*
	 * @desc: 自动匹配标点符号
	 * @email: yanwenbin1991@live.com
	 * @author: XboxYan
	 */
	const quotes: { [key: string]: string } = {
		"'": "'",
		'"': '"',
		'(': ')',
		'（': '）',
		'【': '】',
		'[': ']',
		'《': '》',
		'「': '」',
		'『': '』',
		'{': '}',
		'“': '”',
		'‘': '’',
		'”': '“',
		'’': '‘',
	};

	const quotesReverse = ['”', '’'];

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function commonInput(this: HTMLElement, ev: any): void {
		const tagName = (ev.target as HTMLElement).tagName;
		if (tagName === 'TEXTAREA' || tagName === 'INPUT') {
			inputTextArea.call(ev.target, ev);
		} else {
			input.call(ev.target, ev);
		}
	}
	document.addEventListener('compositionend', commonInput);
	document.addEventListener('input', commonInput);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function inputTextArea(this: HTMLTextAreaElement | HTMLInputElement, ev: any): void {
		const quote = quotes[ev.data];
		if (quote && (ev.inputType === 'insertText' || ev.type === 'compositionend')) {
			const reverse = quotesReverse.includes(ev.data);
			if (reverse) {
				this.setSelectionRange(this.selectionStart - 1, this.selectionEnd - 1);
			}
			this.setRangeText(quote);
			if (reverse) {
				this.setSelectionRange(this.selectionStart + 1, this.selectionEnd + 1);
			}
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function input(this: Node, ev: any): void {
		const quote = quotes[ev.data];
		const selection = document.getSelection();
		if (quote && ev.inputType === 'insertText' && selection) {
			const newQuote = document.createTextNode(quote);
			const range = selection.getRangeAt(0);
			const reverse = quotesReverse.includes(ev.data);
			if (reverse) {
				const { startContainer, startOffset, endContainer, endOffset } = range;
				range.setStart(startContainer, startOffset - 1);
				range.setEnd(endContainer, endOffset - 1);
			}
			range.insertNode(newQuote);
			if (reverse) {
				range.setStartAfter(newQuote);
			} else {
				range.setEndBefore(newQuote);
			}
			range.commonAncestorContainer.normalize();
		}
	}
};
