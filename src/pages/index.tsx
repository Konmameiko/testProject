import styles from './index.less';
import {Link} from "umi";
import React, {Component } from 'react';

export default class IndexPage extends Component<any, any>{
	timer: any | null = null;
	componentDidMount() {
		window.addEventListener('visibilitychange', this.onViewChange);
	}
	onViewChange() {
		let hidden = document.visibilityState;
		if (hidden == 'hidden') {
			clearTimeout(this.timer);
			document.title = "页面要崩溃了~";
		} else {
			document.title = "诶，好像又好了";
			this.timer = setTimeout(() => {
				document.title = "主页展示";
			}, 1500);
		}
	}
	componentWillUnmount() {
		this.timer && clearTimeout(this.timer);
		window.removeEventListener('visibilitychange', this.onViewChange);
	}
	render() {
		return (
			<div>
				<div className={styles.index}>
					<h1>Hello,world!</h1>
				</div>
				<ul className={styles.ul}>
					<li><Link to='/manage'>跳转至后台</Link></li>
					<li><Link to='/TodoLIst'>跳转至TodoList</Link></li>
					<li><Link to='/Test'>跳转至React生命周期学习页</Link></li>
					<li><Link to='/Test/Html_CSSLearn'>案例三:静态页面学习集合</Link></li>
				</ul>
				<ul className={styles.ul}>
					<li><Link to='/Test/Less2Stars'>案例四：星空特效（less循环）</Link></li>
					<li><Link to='/Test/SPAandRouter'>案例五：单页面及路由组件学习</Link></li>
					<li><Link to='/Test/axios'>案例六:AXIOS及ajax学习</Link></li>
					<li><Link to='/Test/clickProgressBar'>案例七:进度条点击</Link></li>
				</ul>
				<ul className={styles.ul}>
					<li><Link to='/Test/ReduxLearn'>案例八：Redux学习案例</Link></li>
					<li><Link to='/manage'>跳转至后台</Link></li>
					<li><Link to='/manage'>跳转至后台</Link></li>
					<li><Link to='/manage'>跳转至后台</Link></li>
				</ul>
				<ul className={styles.ul}>
					<li><Link to='/manage'>跳转至后台</Link></li>
					<li><Link to='/manage'>跳转至后台</Link></li>
					<li><Link to='/manage'>跳转至后台</Link></li>
					<li><Link to='/manage'>跳转至后台</Link></li>
				</ul>
				
				<div className={styles.anime}></div>
				<p className={styles.textStyle}>
					从去年起，仿佛听得有人说我是仇猫的。那根据自然是在我的那一篇《兔和猫》；这是自画招供，当然无话可说，——但倒也毫不介意。一到今年，我可很有点担心了。我是常不免于弄弄笔墨的， 写了下来，印了出去，对于有些人似乎总是搔着痒处的时候少，碰着痛处的时候多。万一不谨，甚而至于得罪了名人或名教授，或者更甚而至于得罪了“负有指导青年责任的前辈”之流，可就危险已 极。为什么呢？因为这些大脚色是“不好惹”的。怎地“不好惹”呢？就是怕要浑身发热之后，做一封信登在报纸上，广告道：“看哪！狗不是仇猫的么？鲁迅先生却自己承认是仇猫的，而他还说要 打‘落水狗’！”①这“逻辑”的奥义，即在用我的话，来证明我倒是狗，于是而凡有言说，全都根本推翻，即使我说二二得四，三三见九，也没有一字不错。这些既然都错，则绅士口头的二二得七 ，三三见千等等，自然就不错了。
				</p>
				<table className={styles.table0}>
					<tbody>
						<tr className={styles.list0}>
							<th>第一句</th>
							<th>第二句</th>
							<th>第三句</th>
							<th>第四句</th>
						</tr>
						<tr className={styles.list1}>
							<td>三十功名</td>
							<td>尘与土</td>
							<td>八千里路</td>
							<td>云和月</td>
						</tr>
						<tr className={styles.list2}>
							<td>西风吹老洞庭波</td>
							<td>一夜湘君白发多</td>
							<td>醉后不知天在水</td>
							<td>满船清梦压星河</td>
						</tr>
						<tr className={styles.list3}>
							<td>小时不识月</td>
							<td>呼作白玉盘</td>
							<td>又疑瑶台镜</td>
							<td>飞在青云端</td>
						</tr>
						<tr className={styles.list4}>
							<td>莫听穿林打叶声</td>
							<td>何妨吟啸且徐行</td>
							<td>竹杖芒鞋轻胜马</td>
							<td>谁怕</td>
						</tr>
					</tbody>
				</table>
				{/* <Manage /> */}
			</div>
		);
	}

}






