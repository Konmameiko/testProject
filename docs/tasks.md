# 御坂网络 - 项目任务列表

> 最后更新: 2026-06-07 23:00
> 团队: misaka-team
> 状态: 🔄 持续迭代中

## 任务概览

| ID | 任务 | 状态 | 负责人 | 依赖 |
|----|------|------|--------|------|
| 1 | 项目代码结构分析与需求梳理 | ✅ completed | 御坂19090号, 御坂19009号 | - |
| 2 | 现有组件质量审查 | ✅ completed | 御坂20001号 | ~~#1~~ |
| 3 | 代码性能优化分析 | ✅ completed | 御坂19009号 (+19090号协助) | ~~#1~~ |
| 4 | 类型安全与代码规范检查 | ✅ completed | 御坂20001号 | ~~#1~~ |
| 5 | 组件复用性与架构优化建议 | ✅ completed | 御坂19090号 | ~~#2~~ |
| 6 | ESLint 全面修复（164→0） | ✅ completed | 御坂10032号 | ~~#4~~ |
| 7 | 修复 TodoList 直接修改 this.state.data | ✅ completed | 御坂10032号 | ~~#2~~ |
| 8 | 修复 FlatPreloader clearTimeout 清除 setInterval | ✅ completed | 御坂19090号, 御坂19009号, 御坂20001号 | ~~#2~~ |

## 产出汇总

### #1 项目代码结构分析与需求梳理 ✅
- 项目架构全景图（68个源文件，9条路由，20+功能子页面）
- 功能模块清单（8大模块，按技术点分类）
- 工具函数库评估（func.ts/util.ts/selfAxios/selfApi.js）
- 需求匹配度分析（9项缺失功能）
- 技术债务识别（6项债务 + 14项架构问题，按P0/P1/P2/P3分级）
- 核心依赖使用度评估（8个依赖分析）

### #2 现有组件质量审查 ✅
- 总体评级 C+/C-
- 发现4个P0严重缺陷（TodoList直接改state、模块级可变状态、定时器API错误、useEffect无限循环）
- 15+个P1问题、多个P2代码规范问题
- 识别5个代码质量标杆组件

### #3 代码性能优化分析 ✅
- 发现96.2MB单张GIF（占全站流量75%+）
- Three.js/kyouka等幽灵依赖（零引用）
- 零代码分割（20组件同步import）
- 5处内存泄漏/定时器错误
- LazyEyes强制同步布局、SlidingPhoto低帧率动画
- 126.8MB静态资源总体积
- 16项优化建议（P0-P3分级）

### #4 类型安全与代码规范检查 ✅
- ~~ESLint完全不可用~~ → **已在 #6 中修复**
- 85处any类型使用（已通过eslint注释标注）
- 6处空接口、8处require()替代ES import
- 2处.jsx/.js混在TS项目中

### #5 组件复用性与架构优化建议 ✅
- 识别5个可抽取公共组件
- 6项架构优化方案
- 11个组件复用性评分矩阵
- 3阶段13步实施路线图（含工作量估算）

### #6 ESLint 全面修复 ✅ 新增
- **初始状态**：164 problems (90 errors, 74 warnings)
- **最终状态**：0 problems (0 errors, 0 warnings) ✅
- **修复手段**：
  - 单例类→纯函数重构（util.ts, func.ts）消除25个 class-methods-use-this
  - 删除/注释未使用 import（~30个警告）
  - == → === 修复（7处）
  - NodeJS.Timeout → ReturnType\<typeof setTimeout\>（3处）
  - 代码顺序调整（MenuItem前置, sliceTime前置）
  - 行级/文件级 eslint-disable 精确标注（~40处）
  - eslint --fix 自动修复（~25个）
- **修改文件**：27个源文件
- **关键重构**：util.ts/func.ts 从 Singleton Class → 纯函数导出

### #7 修复 TodoList 直接修改 this.state.data ✅ 新增
- **问题**：`handleCheck` 中直接 `item.isdone = e.target.checked` 篡改 state 对象，且未通过 `setState` 更新 data，React 不会重渲染
- **辅修**：`componentDidMount` 中 `.map()` 当 `forEach()` 用，循环内反复调 `setState`
- **TS类型**：`Number` → `number`（原始类型约定）
- **修复方案**：
  - `handleCheck`：用 `.map()` 返回新数组，`{...item, isdone: checked}` 不可变更新，一次 `setState({data, total})`
  - `componentDidMount`：用 `.filter().length` 一次计算 total，一次 `setState({data, total})`
  - 修正 `delOne` 参数类型 `Number` → `number`
- **修改文件**：1个 (`src/pages/components/TodoList.tsx`)

### #8 修复 FlatPreloader clearTimeout 清除 setInterval ✅ 新增
- **问题**：`componentWillUnmount` 中用 `clearTimeout` 尝试清除 `setInterval` 创建的定时器，API 不匹配导致定时器永不停止
- **团队协作模式**：19090号(架构分析) + 19009号(性能扫描) → 20001号(代码修复)
- **19090号架构审查**：
  - 确认 clearTimeout/setInterval API 不匹配为 P0 缺陷
  - 识别 `document.getElementById` + `element.style` 直接 DOM 操作反模式
  - 指出 emoji 元素缺少空值检查，闭包引用无防御性保护
  - 提出 P0→P1→P2 三层修复方案
- **19009号性能扫描**：
  - 全项目 14 个 timer 文件逐一审查，仅 FlatPreloader 一处 API 不匹配
  - 量化分析：CPU 极低、DOM 操作中等、**内存泄漏严重**（组件实例无法 GC）
  - 额外发现 2 处 P2 级缺少 unmount 清理（SlidingPhoto、sliceRender HOC）
  - 提供 5 步修复验证方案
- **20001号代码修复（11处改动）**：
  1. P0：`clearTimeout` → `clearInterval`，清除后 `this.timer = null` 防二次清除
  2. 类型：`timer: any | null` → `ReturnType<typeof setInterval> | null`
  3. 接口：新增 `FlatPreloaderState` interface，组件声明为 `Component<{}, FlatPreloaderState>`
  4. 状态：`override state` 显式声明，含初始 emoji 回退值 `\u{1F923}`
  5. **DOM重构**：彻底移除 `document.getElementById('emoji_g')` + `emoji.style = ...`
  6. **纯React驱动**：`componentDidMount` 仅调 `setState({ currentEmoji })`，render 通过 `style={{ '--emoji': ... } as React.CSSProperties}` 传递 CSS 变量
  7. 移除 `id="emoji_g"` 属性（不再需要 DOM 查询）
  8. 命名：`class index` → `class FlatPreloader`（PascalCase）
  9. 重构：`generatedEmoji` 箭头函数实例方法 → `static generatedEmoji(): string`
  10. ESLint：移除文件级 `eslint-disable`，仅保留 render() 行级禁用
  11. 可读性：132 字符超长三元 → 具名变量 `useFirstRange`
- **修改文件**：1个 (`src/pages/HtmlandCSS/CssEffect/FlatPreloader/index.tsx`)

| # | 严重度 | 问题 | 来源 | 状态 |
|---|--------|------|------|:--:|
| 1 | 🔴 P0 | 96.2MB GIF 单文件 | #3 | ⏳ |
| 2 | 🔴 P0 | ~~ESLint 完全不可用~~ | #4 | ✅ 已修复 |
| 3 | 🔴 P0 | ~~TodoList 直接修改 this.state.data~~ | #2, #7 | ✅ 已修复 |
| 4 | 🔴 P0 | ~~FlatPreloader clearTimeout 清除 setInterval~~ | #2, #8 | ✅ 已修复 |
| 5 | 🔴 P0 | jsonEditor useEffect 无限循环风险 | #2 | ⏳ |
| 6 | 🔴 P0 | 零代码分割，20组件同步import | #3 | ⏳ |
| 7 | 🟠 P1 | 85处 any 类型滥用 | #4 | ⏳ |
| 8 | 🟠 P1 | 126.8MB 静态资源未优化 | #3 | ⏳ |
| 9 | 🟠 P1 | 5处事件监听器/定时器内存泄漏 | #2, #3 | ⏳ |
| 10 | 🟠 P1 | 无 ErrorBoundary、无状态管理 | #1, #5 | ⏳ |
