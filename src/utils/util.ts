/*
 * @Description: 常用API方法
 * @Author: ly-yuzh
 * @Date: 2022-06-02 14:41:45
 * @LastEditTime: 2022-06-02 14:57:15
 * @LastEditors: ly-yuzh
 */
class Utiles {
  private static utils: Utiles = new Utiles();

  private constructor() {}

  /* 获取路由参数 */
  public getURLObj(): object {
    const url: string = window.location.search || window.location.hash;
    const theRequest: any = {};
    if (url.indexOf('?') != -1) {
      let str: string = url.substr(1);
      //是否为哈希路由
      if (/^\/\?||[a-zA-z0-9]+\?/.test(str)) {
        str = str.substr(str.indexOf('?') + 1);
      }
      let strs = str.split('&');
      for (var i = 0; i < strs.length; i++) {
        let temps: any = strs[i].split('=')[0];
        theRequest[temps] = decodeURIComponent(strs[i].split('=')[1]);
      }
    }
    return theRequest;
  }

  /* 获取随机数 */
  public getNoncestr(): string {
    let d = new Date().getTime();
    let noncestr = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(
      /[x]/g,
      function (c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
      },
    );
    return noncestr;
  }

  /* 获取url中的参数方法 */
  public getUrlParam = (name: string) => {
    //构造一个含有目标参数的正则表达式对象
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    //匹配目标参数
    const r = window.location.search.substr(1).match(reg);

    //返回参数
    if (r != null) {
      return r[2];
    } else {
      return null;
    }
  };

  /* 判断n是否为质数 */
  public getPrimeNum = (n: number): boolean => {
    if (n == 2 || n == 3) {
      return true;
    }
    if (n % 6 !== 1 && n % 6 !== 5) {
      return false;
    }
    for (let i = 5; i <= Math.sqrt(n); i += 6) {
      if (n % i == 0 || n % (i + 2) == 0) return false;
    }
    return true;
  };
}

export default Utiles;
