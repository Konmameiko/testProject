/*
 * @Description:
 * @Author: KonmaMeiko
 * @Date: 2021-04-01 10:07:29
 * @lastEditTime: Do not edit
 * @LastEditors: KonmaMeiko
 */
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.png';
declare module '*.jpg';
declare module '*.mp3';
declare module '*.gif';
declare module '*.json';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
declare namespace JSX {
  interface IntrinsicElements {
    'css-doodle': {};
  }
}
