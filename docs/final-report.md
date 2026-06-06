# 项目改进总览文档 -- 御坂网络 Team 最终交付物

> 生成日期: 2026-06-06  
> 团队: misaka-team (御坂19090号 + 御坂19009号 + 御坂20001号)  
> 审查范围: testProject (UmiJS/max + React + TypeScript)  
> 数据来源: #1 需求分析 + #2 组件质量审查 + #3 性能优化分析 + #4 类型安全检查 + #5 架构优化建议

---

## 目录

1. [执行摘要](#1-执行摘要)
2. [问题汇总矩阵](#2-问题汇总矩阵)
3. [快速修复清单](#3-快速修复清单)
4. [改进路线图](#4-改进路线图)
5. [架构优化方案详述](#5-架构优化方案详述)
6. [组件质量审查详述](#6-组件质量审查详述)
7. [性能优化详述](#7-性能优化详述)
8. [类型安全详述](#8-类型安全详述)
9. [附录：组件复用性矩阵](#9-附录组件复用性矩阵)

---

## 1. 执行摘要

### 1.1 项目概况

| 项目 | 详细 |
|------|------|
| 技术栈 | UmiJS/max 4.6.57 + React 18.2.0 + TypeScript 5.3.3 + antd 6.4.3 |
| 源文件 | 68 个（不含 node_modules/.git/dist） |
| 路由 | 12 条，覆盖 8 大功能模块、20+ 功能子页面 |
| 样式方案 | Less (18) + SCSS (8) + CSS (1) 混用 |
| 组件模式 | Class Component (14) + Function Component (17) + React.memo (10) 混用 |
| 静态资源 | 128 MB（图片 125.9 MB + 音频 2.9 MB），无懒加载 |
| 总体评级 | **C+** — 功能丰富，技术债务重 |

### 1.2 团队产出

| 任务 | 负责人 | 关键发现数 |
|------|--------|-----------|
| #1 需求分析 | 19090号 + 19009号 | 14 项架构问题 |
| #2 组件质量审查 | 20001号 | 4 个 P0 + 15+ 个 P1 + 多个 P2 |
| #3 性能优化分析 | 19009号 + 19090号 | 16 项优化建议 |
| #4 类型安全检查 | 20001号 | 85 处 any + ESLint 不可用 |
| #5 架构优化建议 | 19090号 | 5 个可抽取组件 + 3 阶段路线图 |

### 1.3 Top 10 关键发现

| # | 严重度 | 问题 | 来源 |
|---|--------|------|------|
| 1 | P0 | 100.9 MB GIF 单文件（`12.gif`）占全站流量 75%+ | #3 |
| 2 | P0 | ESLint 完全不可用（`babel-eslint` 未安装） | #4 |
| 3 | P0 | `TodoList.tsx` 直接修改 `this.state.data` 破坏 React 不可变原则 | #2 |
| 4 | P0 | `FlatPreloader` 用 `clearTimeout` 清除 `setInterval` 返回的 ID | #2, #3 |
| 5 | P0 | `jsonEditor` 中 `useEffect` 依赖数组引用不稳定，存在无限循环风险 | #2 |
| 6 | P0 | 零代码分割，20+ 组件通过同步 `import` 打入主 bundle | #3 |
| 7 | P1 | 85 处 `any` 类型滥用，TypeScript 类型安全形同虚设 | #4 |
| 8 | P1 | 128 MB 静态资源无懒加载/压缩/按需加载 | #3 |
| 9 | P1 | 5 处事件监听器/定时器/ResizeObserver 内存泄漏 | #2, #3 |
| 10 | P1 | 无 ErrorBoundary、无状态管理、无公共组件层 | #1, #5 |

---

## 2. 问题汇总矩阵

> 合并 #1-#5 全部发现，去重后按优先级排列。每个问题标注来源任务编号。

### 2.1 P0 — 严重/阻塞级（必须立即修复）

| ID | 问题 | 涉及文件 | 影响 | 来源 |
|----|------|----------|------|------|
| **P0-1** | `12.gif` 100.9 MB 单文件 | `src/assets/images/12.gif` | 全站流量 75%+，首屏加载分钟级 | #3 |
| **P0-2** | ESLint 不可用（`babel-eslint` 未安装） | `.eslintrc.js` | 零代码规范保障 | #4 |
| **P0-3** | `TodoList` 直接修改 `this.state.data` | `components/TodoList.tsx:19,51` | 状态不一致、渲染异常 | #2 |
| **P0-4** | `FlatPreloader` 用 `clearTimeout` 清除 `setInterval` | `FlatPreloader/index.tsx:16` | 定时器泄漏，内存持续增长 | #2, #3 |
| **P0-5** | `jsonEditor` 中 `useEffect` 无限循环风险 | `jsonEditor/index.tsx:66-75` | 页面卡死风险 | #2 |
| **P0-6** | 零代码分割，所有组件同步加载 | `.umirc.ts` (未配置 `dynamicImport`) | 首屏 bundle > 2MB（预估） | #3 |
| **P0-7** | `canvas` 全局变量（模块级可变状态） | `drag2drawText/index.tsx:29-32` | 多实例冲突、SSR 不兼容 | #2 |

### 2.2 P1 — 高优先级（本迭代修复）

| ID | 问题 | 涉及文件 | 影响 | 来源 |
|----|------|----------|------|------|
| **P1-1** | 85 处 `any` 类型滥用 | 全项目散布 | TypeScript 类型安全失效 | #4 |
| **P1-2** | 128 MB 静态资源无懒加载 | 全部 `img` 标签 | 首屏加载全量资源 | #3 |
| **P1-3** | 5 处事件监听/定时器/观察者未清理 | drag2drawText, flatPreloader, photoMoveMode, lazyEyes, index | 内存泄漏 | #2, #3 |
| **P1-4** | 6 处空接口定义 | 404, imgWrapper, photoMoveMode, recharge, lazyEyes, frostedGlassBg | 无意义的类型声明 | #4 |
| **P1-5** | 8 处 `require()` 替代 ES `import` | SlidingPhoto, PhotoErasure, Manage | Tree-shaking 失效 | #4 |
| **P1-6** | 2 个 `.js`/`.jsx` 文件混在 TS 项目中 | `utils/selfApi.js`, `pages/codeTest/algorithmLearn.jsx` | 类型检查盲区 | #4 |
| **P1-7** | 无 ErrorBoundary | 全部路由 | 运行时错误导致白屏 | #1, #5 |
| **P1-8** | `tsconfig.json` 含废弃配置项 | `tsconfig.json` | 编译警告 | #4 |
| **P1-9** | `Manage.tsx` 无效的 `index <= length-1` 判断 | `Manage.tsx:127` | 死代码 | #2 |
| **P1-10** | `SlidingPhoto` 用 `margin-left` 做动画（触发布局回流） | `SlidingPhoto/index.tsx:48-59` | 低帧率动画 | #2, #3 |
| **P1-11** | `Interstellar` 800 个 `box-shadow` 逐帧重绘 | `Interstellar/index.less:76-106` | GPU 合成开销大 | #3 |
| **P1-12** | 15 个 Loading 动画同时渲染（870 行 CSS） | `FlatPreloader/index.tsx` | 初始渲染卡顿 | #3 |
| **P1-13** | `lazyEyes` 中 `handleMouseMove` 强制同步布局 | `lazyEyes/index.tsx:60-61` | 每帧触发布局抖动 | #2, #3 |
| **P1-14** | `lazyEyes` 组件内定义 `timer` 变量而非实例属性 | `lazyEyes/index.tsx:18` | 跨渲染丢失引用 | #2 |
| **P1-15** | `timeTitle` 在 class 实例上定义（非 state） | `TimeShaftMake/index.tsx:5-47` | 非响应式数据 | #2 |
| **P1-16** | `Menu` 作为 class 实例属性阻止热更新 | `index.tsx:30` | 开发体验差 | #2 |

### 2.3 P2 — 中优先级（下迭代修复）

| ID | 问题 | 涉及文件 | 影响 | 来源 |
|----|------|----------|------|------|
| **P2-1** | 样式方案混用：Less (18) + SCSS (8) + CSS (1) | 全项目 | 维护混乱 | #1 |
| **P2-2** | 导入路径混用：`@/` (9) + `../../../` (13) | imgWrapper, mosaicEffect 等 | 重构困难 | #1, #5 |
| **P2-3** | Class Component (14) 与 Function Component (17) 混用 | 全项目 | 学习曲线陡、维护不一致 | #1, #5 |
| **P2-4** | `canvas` 中 `mousemove` 无 `requestAnimationFrame` 节流 | `drag2drawText/index.tsx:44` | 过度绘制 | #3 |
| **P2-5** | `ResizeObserver` 未在 `componentWillUnmount` 清理 | `drag2drawText/index.tsx:52-54` | 内存泄漏 | #3 |
| **P2-6** | 分片渲染 HOC 最终生成 5000 个 DOM 节点 | `sliceRender/hoc.tsx` | 内存占用高、交互卡顿 | #3 |
| **P2-7** | 无组件懒加载（`React.lazy`/`Suspense`） | 全部路由页面 | 首屏 JS 体积大 | #3 |
| **P2-8** | `3.0 MB` MP3 音频无压缩 | `photoMoveMode/index.tsx:134` | 加载慢 | #3 |
| **P2-9** | `darksoul.gif` 9.2 MB 仅用于 hover 效果 | `index.tsx:20` | 加载代价极高 | #3 |
| **P2-10** | `jinx.gif` 6.7 MB 无压缩 | `src/assets/images/jinx.gif` | 流量浪费 | #3 |
| **P2-11** | `windy.mp3` 无用户交互自动播放 | `photoMoveMode/index.tsx:135` | 自动播放策略可能阻止 | #3 |

### 2.4 P3 — 低优先级（技术债偿还）

| ID | 问题 | 涉及文件 | 影响 | 来源 |
|----|------|----------|------|------|
| **P3-1** | 无用依赖：`kyouka`（无使用痕迹） | `package.json` | bundle 膨胀 ~200KB | #1, #3 |
| **P3-2** | 无用依赖：`nanoid`（无使用痕迹） | `package.json` | bundle 膨胀 ~10KB | #1, #3 |
| **P3-3** | `three` 依赖声明但代码中无 `import` | `package.json` | bundle 膨胀 ~600KB（若被打入） | #3 |
| **P3-4** | 无单元测试（仅有 `@umijs/test` 依赖） | 全项目 | 回归风险 | #1 |
| **P3-5** | `src/config/config.ts` 为空占位文件 | `config/config.ts` | 误导 | #1 |
| **P3-6** | Nginx gzip 配置未确认 | `nginx/nginx.conf` | 传输未压缩 | #3 |
| **P3-7** | `simpleLogin` 用 `document.getElementsByName` 操作 DOM | `simpleLogin/index.tsx:15` | 违背 React 范式 | #1 |
| **P3-8** | `frostedGlassBg` 用 `document.querySelector('css-doodle')` | `frostedGlassBg/index.tsx:8` | 非 React 模式 | #1 |
| **P3-9** | `glitchGIF` 空 Props 接口定义 | `GlitchGIF/index.tsx:3` | 冗余代码 | #4 |
| **P3-10** | `photoMode` 中 `AudioPlay` 应为独立提取组件 | `photoMoveMode/index.tsx:130-144` | 内联定义 | #5 |
| **P3-11** | `IconGIF` 背景切换用 `document.getElementById` 操作 DOM | `index.tsx:93-94` | 非 React 范式 | #1 |

---

## 3. 快速修复清单

> P0 级问题中无需架构变更、可立即动手修复的项。按修复时间排序。

| # | 修复项 | 文件 | 预计耗时 | 操作 |
|---|--------|------|----------|------|
| 1 | 修复 `FlatPreloader` 定时器 API 错误 | `FlatPreloader/index.tsx:16` | 5 min | `clearTimeout` -> `clearInterval` |
| 2 | 修复 `jsonEditor` useEffect 依赖数组 | `jsonEditor/index.tsx:66-75` | 10 min | 将 `renderJsonEditor` 和 `renderHighLightStr` 移入 useEffect 内部或用 `useCallback` 包裹 |
| 3 | 修复 `TodoList` 直接修改 state | `TodoList.tsx:19,51` | 15 min | `this.state.data.map` -> `[...this.state.data].map`，用 `this.setState` 替代 `item.isdone = ...` |
| 4 | 修复 `drag2drawText` 全局变量 | `drag2drawText/index.tsx:29-32` | 10 min | 将 `canvas`, `context`, `position`, `mouse` 移为实例属性 |
| 5 | 修复 `lazyEyes` timer 变量作用域 | `lazyEyes/index.tsx:18` | 5 min | `let timer` -> `const timerRef = useRef<NodeJS.Timeout | null>(null)` |
| 6 | 修复 `Manage.tsx` 无效判断 | `Manage.tsx:127` | 2 min | 移除 `if (index <= codeStr.length - 1)` 死代码 |
| 7 | 删除 `src/config/config.ts` 空文件 | `config/config.ts` | 1 min | 删除或填入 TODO 注释 |
| 8 | 转换 `12.gif` (100.9 MB) 为 webm | `assets/images/12.gif` | 20 min | `ffmpeg -i 12.gif -c:v libvpx-vp9 -crf 30 -b:v 0 12.webm` |
| 9 | 转换 `darksoul.gif` (9.2 MB) 为 webm | `assets/darksoul_icon/darksoul.gif` | 10 min | 同上 |
| 10 | 转换 `jinx.gif` (6.7 MB) 为 webm | `assets/images/jinx.gif` | 10 min | 同上 |
| 11 | 所有 `<img>` 添加 `loading="lazy"` | 全项目 `img` 标签 | 10 min | 批量替换 |
| 12 | 安装 `@babel/eslint-parser` 恢复 ESLint | `package.json` | 5 min | `yarn add -D @babel/eslint-parser` |

> **快速修复合计**: 约 1.5 小时可消除 7 个 P0 问题 + 3 个性能问题 + 1 个工程问题。

---

## 4. 改进路线图

> 基于 #5（御坂19090号）的 3 阶段 13 步框架，填入 #2/#3/#4 发现的具体修复点。

### 阶段一：基础设施搭建（预计 4-6 小时）

| 步骤 | 内容 | 关联问题 | 工作量 |
|------|------|----------|--------|
| 1.1 | 创建 `src/components/` 目录 | — | 5 min |
| 1.2 | 抽取 `BackHomeButton` 公共组件，替换 4 处重复 | P3-7 相关 | 20 min |
| 1.3 | 添加 `ErrorBoundary` 组件，包裹主要路由 | P1-7 | 30 min |
| 1.4 | 创建 `src/types/common.ts` 统一 Props 类型 | P1-1 (85 any), P1-4 (6 空接口) | 30 min |
| 1.5 | 添加 `@assets`、`@components`、`@hooks` 别名 | P2-2 (路径混用) | 10 min |
| 1.6 | 安装 `@babel/eslint-parser`，恢复 ESLint | P0-2 | 15 min |
| 1.7 | 配置 `.umirc.ts` 添加 `dynamicImport: {}` | P0-6 (零代码分割) | 5 min |
| 1.8 | 执行 [快速修复清单](#3-快速修复清单) 全部 12 项 | P0-1~P0-7 | 1.5 h |

### 阶段二：统一规范（预计 8-12 小时）

| 步骤 | 内容 | 关联问题 | 工作量 |
|------|------|----------|--------|
| 2.1 | 抽取 `PageHeader`、`SectionBlock` 布局组件 | P2-1, P2-3 相关 | 1 h |
| 2.2 | 8 个 `.scss` 文件迁移到 `.less` | P2-1 (样式混用) | 2 h |
| 2.3 | 统一导入路径（消除所有 `../../../`） | P2-2 | 1 h |
| 2.4 | 创建自定义 Hooks: `useTimer`, `useDebounce`, `useThrottle` | P1-3 (内存泄漏) | 2 h |
| 2.5 | 修复 5 处事件监听/定时器/ResizeObserver 泄漏 | P1-3 | 1 h |
| 2.6 | 修复 `SlidingPhoto` margin-left -> transform 动画 | P1-10 | 30 min |
| 2.7 | 修复 `lazyEyes` handleMouseMove 同步布局 | P1-13 | 30 min |
| 2.8 | 修复 `TimeShaftMake` 非响应式数据 | P1-15 | 20 min |
| 2.9 | 替换 `require()` 为 ES `import`（8 处） | P1-5 | 30 min |
| 2.10 | 转换 `.js`/`.jsx` 为 `.ts`/`.tsx`（2 个文件） | P1-6 | 1 h |

### 阶段三：深度优化（预计 6-10 小时）

| 步骤 | 内容 | 关联问题 | 工作量 |
|------|------|----------|--------|
| 3.1 | Class Component -> Function Component 迁移（14 个） | P2-3 | 4-6 h |
| 3.2 | 抽取 `ShowcaseCard` 通用卡片组件 | P3-9 相关 | 1 h |
| 3.3 | `JsonEditor` 解耦 DOM 操作，使用 `useRef` | P0-5, P3-8 | 1 h |
| 3.4 | 图片资源全面优化（压缩 + 懒加载 + webp） | P0-1, P1-2, P2-8~P2-10 | 2 h |
| 3.5 | 分片渲染替换为虚拟列表 | P2-6 | 1 h |
| 3.6 | Canvas mousemove 添加 rAF 节流 | P2-4 | 15 min |
| 3.7 | `Interstellar` 800 box-shadow 改为 Canvas | P1-11 | 1 h |
| 3.8 | 清理无用依赖：`kyouka`、`nanoid` | P3-1, P3-2 | 5 min |
| 3.9 | 评估 `three` 依赖：移除或真正使用 | P3-3 | 10 min |
| 3.10 | 移除 `src/config/config.ts` 空文件 | P3-5 | 1 min |

### 工作量汇总

| 阶段 | 预计工时 | 包含步骤数 | 消除问题数 |
|------|----------|-----------|-----------|
| 阶段一 | 4-6 h | 8 | 12 (含 7 P0) |
| 阶段二 | 8-12 h | 10 | 18 (含 8 P1) |
| 阶段三 | 6-10 h | 10 | 15 (含 5 P2 + 8 P3) |
| **合计** | **18-28 h** | **28** | **45** |

---

## 5. 架构优化方案详述

> 来源: #5 (御坂19090号)

### 5.1 目标目录结构

```
src/
  components/         ← [新建] 公共组件层
    BackButton/       → BackHomeButton (替换 4 处重复)
    PageHeader/       → 页面标题头 (替换 2 处重复)
    SectionBlock/     → 分类展示区块 (替换 2 处重复)
    ShowcaseCard/     → 卡片展示组件 (替换 3 处相似)
    ErrorBoundary/    → 错误边界 (新增)
  pages/              ← 保持，后续拆分页面级组件
  hooks/              ← [新建] 自定义 Hooks
    useTimer.ts       → 统一定时器生命周期管理
    useDebounce.ts    → 防抖 Hook（func.ts + selfApi.js 逻辑合并）
    useThrottle.ts    → 节流 Hook
    useSearchParam.ts → URL 参数同步
    useThemeDetect.ts → 系统主题检测
  types/              ← [新建] 共享类型定义
    common.ts         → BackButtonProps, PageHeaderProps, SectionProps, CardProps
  utils/              ← 保持，函数工具库
  styles/             ← [新建] 全局 Less 变量
    variables.less    → 颜色、间距、断点、Mixin
  assets/
    images/           ← [优化] 压缩 + 懒加载
    audios/           ← [优化] 压缩
    icons/            ← [新建] 从 darksoul_icon 迁移
```

### 5.2 可抽取公共组件

| 组件 | 重复处 | 优先级 | 接口设计 |
|------|--------|--------|----------|
| **BackHomeButton** | 4 处 | P0 | `{ to?, label?, direction? }` |
| **PageHeader** | 2 处 | P1 | `{ title: string }` |
| **SectionBlock** | 2 处 | P1 | `{ title: string, children: ReactNode }` |
| **ShowcaseCard** | 3 处 | P2 | `{ label: string, children: ReactNode }` |
| **AudioPlayer** | 1 处 | P3 | `{ src: string, autoPlay?, loop?, controls? }` |

### 5.3 样式方案统一

**目标**: 全部迁移至 Less（UmiJS 原生支持，已配置 `lessLoader`）。

| 迁移项 | 当前格式 | 文件数 |
|--------|----------|--------|
| SVGFilter home | `.scss` | 1 |
| Manage | `.scss` | 1 |
| starSky | `.scss` | 1 |
| recharge | `.scss` | 1 |
| frostedGlass | `.scss` | 1 |
| frostedGlassBg | `.scss` | 1 |
| GlitchGIF | `.scss` | 1 |
| SlidingPhoto | `.scss` | 1 |
| text | `.scss` | 1 |

### 5.4 导入路径别名扩展

```ts
// .umirc.ts — 建议补充
alias: {
  '@': path.resolve(__dirname, './src'),
  '@pages': path.resolve(__dirname, './src/pages'),
  '@assets': path.resolve(__dirname, './src/assets'),           // 新增
  '@components': path.resolve(__dirname, './src/components'),    // 新增
  '@hooks': path.resolve(__dirname, './src/hooks'),              // 新增
  '@types': path.resolve(__dirname, './src/types'),              // 新增
}
```

---

## 6. 组件质量审查详述

> 来源: #2 (御坂20001号) + #1 交叉验证

### 6.1 P0 严重缺陷

#### P0-3: TodoList 直接修改 this.state.data

```tsx
// src/pages/components/TodoList.tsx:19,51
// 问题代码：
this.state.data.map(item => {
  if (item.isdone === true) total++;
  this.setState({ total: total });  // 循环内多次 setState
});
// handleCheck 中：
this.state.data.map(item => {
  if (item.id === id) {
    item.isdone = e.target.checked;  // 直接修改 state！
  }
});
```

**修复**: 使用 `[...this.state.data].map()` + `this.setState` 整体更新。

#### P0-4: FlatPreloader 定时器 API 错误

```tsx
// src/pages/HtmlandCSS/CssEffect/FlatPreloader/index.tsx:9,16
componentDidMount() {
  this.timer = setInterval(() => { ... }, 2000);  // 返回 interval ID
}
componentWillUnmount() {
  this.timer && clearTimeout(this.timer);  // 用 clearTimeout 清除！
}
```

**修复**: `clearTimeout` -> `clearInterval`。

#### P0-5: jsonEditor useEffect 无限循环

```tsx
// src/pages/HtmlandCSS/HtmlComponent/jsonEditor/index.tsx:66-75
useEffect(() => {
  renderJsonEditor();
  renderHighLightStr();
  return () => { if (jsonEditor) { jsonEditor.destroy(); } };
}, [renderJsonEditor, renderHighLightStr, jsonRef]);
// renderJsonEditor 和 renderHighLightStr 是普通函数，
// 每次渲染都会创建新引用，导致 effect 无限循环
```

**修复**: 将函数定义移入 `useEffect` 内部，或用 `useCallback` 包裹。

#### P0-7: canvas 全局变量

```tsx
// src/pages/HtmlandCSS/FunnyPage/drag2drawText/index.tsx:29-32
let canvas: HTMLCanvasElement;
let context: CanvasRenderingContext2D;
let position: ptType = { x: 0, y: 0 };
let mouse: pt2Type = { x: 0, y: 0, down: false };
// 模块级可变状态，多实例冲突，SSR 不兼容
```

**修复**: 移入类实例属性或使用 `useRef`。

### 6.2 代码质量标杆组件

审查中识别出的高代码质量组件，可作为其他组件迁移的参考模板：

| 组件 | 优点 |
|------|------|
| `CssGraph` | 纯 Function Component + React.memo，数据类型清晰，结构简洁 |
| `Buttons` | 状态管理使用 Set 数据结构，renderCard 模式清晰 |
| `text/index` | 数据驱动渲染（renderCard），分类结构好 |
| `starSky/Less2Stars` | useMemo 优化，CSS 变量传参，批量生成雪花 |
| `SVGFilter/home` | Tab 导航 + Map 组件查找模式 |

---

## 7. 性能优化详述

> 来源: #3 (御坂19009号 + 御坂19090号)

### 7.1 资源体积分析

```
src/assets/images/       114 MB  (30 张图)
  ├── 12.gif             100.9 MB  ← 单文件占 88%，需转 webm
  ├── jinx.gif             6.7 MB  ← 需转 webm
  ├── 30.jpg               2.8 MB  ← 需压缩
  └── 其余 27 张 webp     ~3.6 MB  ← 体积尚可
src/assets/audios/         2.9 MB
  └── windy.mp3            2.9 MB  ← 需压缩至 128kbps
src/assets/darksoul_icon/ 11.0 MB
  ├── darksoul.gif         9.2 MB  ← 需转 webm
  └── 8 张 PNG            ~1.8 MB  ← 需压缩
────────────────────────────────
合计:                    ~128 MB
```

### 7.2 CSS 动画性能热点

| 组件 | 问题 | 帧率影响 | 修复方案 |
|------|------|----------|----------|
| Interstellar | 800 box-shadow 逐帧重绘 | 高 | Canvas 绘制星空替代 |
| wave | `margin-left` 触发布局回流 | 中 | 改为 `transform: translateX()` |
| FlatPreloader | 15 个 Loading 同时渲染 | 中 | `content-visibility: auto` + 选项卡式展示 |
| lazyEyes | SVG feTurbulence 实时滤镜 | 高 | 降低滤镜频率或预渲染 |

### 7.3 JS 运行时

| 文件 | 问题 | 修复 |
|------|------|------|
| drag2drawText | mousemove 无节流 | `requestAnimationFrame` 包裹 draw() |
| drag2drawText | ResizeObserver 未清理 | componentWillUnmount 中 disconnect |
| sliceRender/hoc.tsx | 5000 个 DOM 节点 | 虚拟列表（react-window） |
| TimeShaftMake | 500 个 span 含随机样式 | CSS 随机替代 JS 随机位置 |

---

## 8. 类型安全详述

> 来源: #4 (御坂20001号)

### 8.1 ESLint 不可用（P0-2）

`.eslintrc.js` 中 parser 为 `babel-eslint`（已废弃包名），实际包名为 `@babel/eslint-parser`。

**修复**: `yarn add -D @babel/eslint-parser`，并更新 `.eslintrc.js` parser 配置。

### 8.2 any 类型分布

| 类别 | 估算数量 | 典型位置 |
|------|----------|----------|
| 组件 Props | ~30 | `props: any`, `Component<any, any>` |
| 事件处理 | ~15 | `event: any`, `e: any` |
| DOM 操作 | ~15 | `document.getElementById(...) as any` |
| 工具函数 | ~15 | `func.ts` / `selfApi.js` 参数 |
| 其他 | ~10 | 临时变量、回调 |
| **合计** | **~85** | |

### 8.3 空接口

| 文件 | 接口 | 
|------|------|
| `404.tsx:11` | `interface IProps { onSomething?: () => void }` — onSomething 未使用 |
| `imgWrapper/index.tsx:22` | `export interface IProps {}` — 完全空 |
| `photoMoveMode/index.tsx:18` | `export interface IProps {}` — 完全空 |
| `recharge/index.tsx:10-12` | `export interface Iprops {}` + `interface IProps extends Partial<Iprops> {}` — 双层空 |
| `lazyEyes/index.tsx:11` | `export interface IProps {}` — 完全空 |
| `frostedGlassBg/index.tsx:5` | `export interface IProps {}` — 完全空 |

### 8.4 require() 替代

| 文件 | 行号 | 修复 |
|------|------|------|
| `SlidingPhoto/index.tsx:76,79,82,85,88` | 5 处 `require('@/assets/...')` | 改为顶部 `import` |
| `PhotoErasure/index.tsx:18,37` | 2 处 `require('@/assets/...')` | 同上 |
| `Manage.tsx:32` | 1 处 `require('./codeStr.json')` | 改为 `import` |

---

## 9. 附录：组件复用性矩阵

> 来源: #5 (御坂19090号)

| 组件 | 复用性 | 可抽取度 | 理由 |
|------|--------|----------|------|
| **BackHomeButton** | 高 | 高 | 4 处完全相同的返回按钮模式 |
| **PageHeader** | 高 | 高 | 3 处相同结构（Buttons, text, SVGFilter） |
| **SectionBlock** | 高 | 高 | 2 处完整重复（Buttons, text） |
| **ShowcaseCard** | 中 | 中 | 3 处相似但细节不同 |
| **AudioPlayer** | 低 | 中 | 1 处使用但功能完整 |
| **HOC 分片渲染** | 中 | 高 | 可独立为通用工具 |
| **TodoList** | 低 | 低 | 业务耦合度高 |
| **JsonEditor 封装** | 中 | 中 | 需解耦 DOM 操作 |
| **菜单导航 Icon** | 中 | 高 | index.tsx 中 MenuItem 子组件 |
| **雪花粒子** | 低 | 低 | 纯展示，样式高度耦合 |
| **Loading 动画集** | 低 | 中 | 15 种可拆分为独立展示组件 |

---

## 附录 A: 数据来源交叉引用

| 本文档章节 | 关联任务 |
|-----------|----------|
| 第 2 节 问题矩阵 | #1 + #2 + #3 + #4 + #5 |
| 第 3 节 快速修复 | #2 + #3 (可直接修复的 P0) |
| 第 4 节 路线图 | #5 (框架) + #2, #3, #4 (填充) |
| 第 5 节 架构优化 | #5 |
| 第 6 节 组件质量 | #2 |
| 第 7 节 性能优化 | #3 |
| 第 8 节 类型安全 | #4 |
| 第 9 节 组件矩阵 | #5 |

---

## 附录 B: 团队成员贡献

| 御坂编号 | 角色 | 负责任务 | 核心产出 |
|----------|------|----------|----------|
| 御坂19090号 | 需求分析 + 架构优化 | #1, #5, #3(协助) | 需求全景图、架构路线图、5 组件抽取方案、CSS/图片性能分析 |
| 御坂19009号 | 需求分析 + 性能优化 | #1(协助), #3 | 需求匹配度评估、Canvas/css-doodle/Three.js 性能分析 |
| 御坂20001号 | 质量审查 + 类型检查 | #2, #4 | 4 P0 缺陷、15+ P1 问题、85 any 统计、ESLint 修复方案 |

---

*本报告由御坂19090号整合撰写。御坂认为这份文档可以作为后续重构的技术蓝图，御坂认真地盖上御坂网络的印章。*
