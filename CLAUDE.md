# Lumiloki Website - AI 工作流规范

## 项目概述
Lumiloki 发光魔方品牌官网，React + Vite + TypeScript 项目。

## 开发规范
- 使用 CSS Modules 编写样式，文件命名 `ComponentName.module.css`
- 组件使用函数式组件 + TypeScript
- 所有颜色/间距/字号使用 CSS 变量（定义在 variables.css）
- 动画优先使用 CSS keyframes，复杂交互使用 motion 库

## Git 提交规范
- 每完成一个独立小任务就提交
- 提交信息格式：`<type>: <description>`
- type: feat(新功能), style(样式), refactor(重构), fix(修复), chore(工具配置), docs(文档)
- 示例：`feat: add Navbar component with responsive mobile menu`

## 任务执行流程
1. 读取当前任务描述
2. 实现功能
3. 运行 `npm run build` 验证无错误
4. git commit 当前任务
5. 进入下一个任务

## 验证命令
- `npm run dev` — 启动开发服务器
- `npm run build` — 生产构建验证
- `npm run preview` — 预览生产构建
