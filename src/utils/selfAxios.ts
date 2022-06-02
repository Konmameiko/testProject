/*
 * @Description: 自定义封装axios
 * @Author: ly-yuzh
 * @Date: 2022-06-02 14:58:57
 * @LastEditTime: 2022-06-02 17:52:01
 * @LastEditors: ly-yuzh
 */
/* 参考网址：https://juejin.cn/post/7071518211392405541 */
import axios, { AxiosResponse } from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface RequestInterceptors<T> {
  // 请求拦截
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (err: any) => any;
  // 响应拦截
  responseInterceptors?: (config: T) => T;
  responseInterceptorsCatch?: (err: any) => any;
}
// 自定义传入的参数
export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>;
}
export interface CancelRequestSource {
  [index: string]: () => void;
}

class Request {
  // axios 实例
  instance: AxiosInstance;
  // 拦截器对象
  interceptorsObj?: RequestInterceptors<AxiosResponse>;
  /* 存放取消方法的集合
   * 在创建请求后将取消请求方法 push 到该集合中
   * 封装一个方法，可以取消请求，传入 url: string|string[]
   * 在请求之前判断同一URL是否存在，如果存在就取消请求
   */
  cancelRequestSourceList?: CancelRequestSource[];
  /* 存放所有请求URL的集合
   * 请求之前将URL Push到该集合中
   * 请求完毕之后将URL从集合中删除
   * 添加在发送之前， 删除在响应之后
   */
  requestUrlList?: string[];

  constructor(config: RequestConfig) {
    this.requestUrlList = [];
    this.cancelRequestSourceList = [];
    this.instance = axios.create(config);
    this.interceptorsObj = config.interceptors;

    // 拦截器执行顺序 接口请求 -> 实例请求 -> 全局请求 -> 实例响应 -> 全局响应 -> 接口响应
    // 类拦截器
    this.instance.interceptors.request.use(
      (res: AxiosRequestConfig) => {
        return res; // 全局请求拦截器   发送请求之前doSomething
      },
      (error: any) => error,
    );
    // 使用实例拦截器
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch,
    );
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch,
    );
    // 全局响应拦截器最后执行
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res.data; // 全局响应拦截器   获取数据之后doSomething
      },
      (error: any) => error /* 超过2XX的状态码触发错误 */,
    );
  }

  /**
   * @description: 获取指定 url 在 cancelRequestSourceList 中的索引
   * @param {string} url
   * @returns {number} 索引位置
   */
  private getSourceIndex(url: string): number {
    return this.cancelRequestSourceList?.findIndex(
      (item: CancelRequestSource) => {
        return Object.keys(item)[0] === url;
      },
    ) as number;
  }
  /**
   * @description: 删除 requestUrlList 和 cancelRequestSourceList
   * @param {string} url
   * @returns {*}
   */
  private delUrl(url: string) {
    const urlIndex = this.requestUrlList?.findIndex((u) => u === url);
    const sourceIndex = this.getSourceIndex(url);
    // 删除url和cancel方法
    urlIndex !== -1 && this.requestUrlList?.splice(urlIndex as number, 1);
    sourceIndex !== -1 &&
      this.cancelRequestSourceList?.splice(sourceIndex as number, 1);
  }

  // 接口拦截
  request<T>(config: RequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 如果为单个请求设置拦截器 这里使用单个请求的拦截器
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config);
      }

      const url = config.url;
      // url存在则保存取消请求方法与当前请求url
      if (url) {
        this.requestUrlList?.push(url);
        config.cancelToken = new axios.CancelToken((c) => {
          this.cancelRequestSourceList?.push({
            [url]: c,
          });
        });
      }

      this.instance
        .request<any, AxiosResponse>(config)
        .then((res) => {
          // 如果为单个响应设置拦截器 这里使用单个响应的拦截器
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res);
          }
          resolve(res);
        })
        .catch((err: any) => {
          reject(err);
        })
        .finally(() => {
          url && this.delUrl(url);
        });
    });
  }

  // 取消请求
  cancelRequest(url: string | string[]) {
    if (typeof url === 'string') {
      // 取消单个
      const sourceIndex = this.getSourceIndex(url);
      sourceIndex >= 0 && this.cancelRequestSourceList?.[sourceIndex][url]();
    } else {
      // 存在多个需要取消请求的地址
      url.forEach((u) => {
        const sourceIndex = this.getSourceIndex(u);
        sourceIndex >= 0 && this.cancelRequestSourceList?.[sourceIndex][u]();
      });
    }
  }
  // 取消全部请求
  cancelAllRequest() {
    this.cancelRequestSourceList?.forEach((source) => {
      const key = Object.keys(source)[0];
      source[key]();
    });
  }
}

export default Request;

// 使用实例
// interface Req {
//     apiKey: string
//     area?: string
//     areaID?: string
// }
// interface Res {
//     area: string
//     areaCode: string
//     areaid: string
//     dayList: any[]
// }
// const get15DaysWeatherByArea = (data: Req) => {
//     return request<Req, Res>({
//       url: '/api/common/weather/get15DaysWeatherByArea',
//       method: 'GET',
//       data,
//       interceptors: {
//         requestInterceptors(res) {
//           console.log('接口请求拦截')

//           return res
//         },
//         responseInterceptors(result) {
//           console.log('接口响应拦截')
//           return result
//         },
//       },
//     })
// }
