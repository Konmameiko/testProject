import styles from './index.less';
import { Link, history } from 'umi';
import React, { Component } from 'react';

export default class IndexPage extends Component<any, any> {
  timer: any | null = null;
  componentDidMount() {
    window.addEventListener('visibilitychange', this.onViewChange);
  }
  onViewChange(): void {
    let hidden = document.visibilityState;
    if (hidden == 'hidden') {
      this.timer && clearTimeout(this.timer);
      document.title = '页面要崩溃了~';
    } else {
      document.title = '诶，好像又好了';
      this.timer = setTimeout(() => {
        this.timer && clearTimeout(this.timer);
        document.title = '主页展示';
      }, 1500);
    }
  }

  goToListPage() {
    history.push('/Test');
    sessionStorage.setItem('test', '123');
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
    window.removeEventListener('visibilitychange', this.onViewChange);
  }

  render() {
    return (
      <div className={styles.content}>
        <div className={styles.index}>
          <h1>Hello,world!</h1>
        </div>
        <ul className={styles.ul}>
          <li>
            <Link to="/photoManage">
              <p className={styles.css}>图片处理</p>
            </Link>
          </li>
          <li>
            <Link to="/TodoLIst">
              <p className={styles.TS_JS}>TodoList</p>
            </Link>
          </li>
          <li onClick={() => this.goToListPage}>
            <p className={styles.TS_JS}>React生命周期</p>
          </li>
          <li>
            <Link to="/Test/Html_CSSLearn">
              <p className={styles.css}>StaticPages</p>
            </Link>
          </li>
          <li>
            <Link to="/Test/moreButtons">
              <p className={styles.css}>ButtonDemos</p>
            </Link>
          </li>
          <li>
            <Link to="/Test/axios">
              <p className={styles.TS_JS}>AXIOS学习</p>
            </Link>
          </li>
          <li>
            <Link to="/Test/Codes">
              <p className={styles.TS_JS}>算法临时</p>
            </Link>
          </li>
          <li>
            <Link to="/Test/ReduxLearn">
              <p className={styles.TS_JS}>Redux学习</p>
            </Link>
          </li>
          <li>
            <Link to="/Test/learnTsx">
              <p className={styles.TS_JS}>TSX学习</p>
            </Link>
          </li>
          <li>
            <Link to="/Test/text">
              <p className={styles.css}>FontDemos</p>
            </Link>
          </li>
          <li>
            <Link to="/Test/svgFilter">
              <p className={styles.css}>SVG滤镜</p>
            </Link>
          </li>
          <li>
            <Link to="/Test/utilsPages">
              <p className={styles.TS_JS}>前端功能集合</p>
            </Link>
          </li>
          <li>
            <Link to="/imgWrapper">
              <p className={styles.css}>图片瀑布流</p>
            </Link>
          </li>
          <li>
            <Link to="/manage">
              <p className={styles.css}>跳转至后台</p>
            </Link>
          </li>
          <li>
            <Link to="/manage">
              <p className={styles.css}>跳转至后台</p>
            </Link>
          </li>
        </ul>
        <audio src={require('@/assets/audios/windy.mp3')} />
        {/* <div className={styles.anime}></div> */}
        <p className={styles.textStyle}>
          从去年起，仿佛听得有人说我是仇猫的。那根据自然是在我的那一篇《兔和猫》；这是自画招供，当然无话可说，——但倒也毫不介意。
          一到今年，我可很有点担心了。我是常不免于弄弄笔墨的，
          写了下来，印了出去，
          对于有些人似乎总是搔着痒处的时候少，碰着痛处的时候多。
          万一不谨，甚而至于得罪了名人或名教授，或者更甚而至于得罪了“负有指导青年责任的前辈”之流，可就危险已极。
          为什么呢？因为这些大脚色是“不好惹”的。怎地“不好惹”呢？就是怕要浑身发热之后，做一封信登在报纸上，广告道：“看哪！狗不是仇猫的么？
          鲁迅先生却自己承认是仇猫的，而他还说要
          打‘落水狗’！”①这“逻辑”的奥义，即在用我的话，来证明我倒是狗，于是而凡有言说，
          全都根本推翻，即使我说二二得四，三三见九，也没有一字不错。这些既然都错，则绅士口头的二二得七
          ，三三见千等等，自然就不错了。
        </p>
        {/* <table className={styles.table0}>
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
				</table> */}
        {/* <Manage /> */}
        {/* <div className={styles.learnCSS}></div> */}
      </div>
    );
  }
}
