# 关于react 基本用法
### HashRouter
#### 作用
1. 用来确定是`hash跳转方式`
2. 实现所有事件，属性，并传入 `context` 中使下面的组件可调用
#### 实现 
1. 通过修改 `window.location.hash` 来完成页面跳转
2. 利用 `hashchange` 事件 对 `context` 中的 `location` 做更新
