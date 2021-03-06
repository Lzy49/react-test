# 关于react 路由的练习
## react 路由 实现原理
> react 路由 分为一下俩中方式
1. BrowserRouter
> 通过
2. HashRouter
> 通过 hash 实现
## react 各组件实现思路 
### HashRouter
#### 作用
1. 用来确定是`hash跳转方式`
2. 实现所有事件，属性，并传入 `context` 中使下面的组件可调用
#### 实现 
1. 通过修改 `window.location.hash` 来完成页面跳转
2. 利用 `hashchange` 事件 对 `context` 中的 `location` 做更新
### Route
#### 作用
1. 渲染 路径相对的组件
#### 实现
1. 利用 `path` 值 与 当前路由`context.location.pathname` 进行对比。如果成功就渲染，失败就渲染`null`
2. 完善，将其他属性加入组件例如`exact`,`render`.
### Link
#### 作用
1. 实现跳转路由 （形同`a`标签）
#### 实现
1. 利用传递的`to` 参数 和 `context` 中的 `push` 方法 实现路由跳转 （`push` 方法在HashRouter中实现 修改`window.location.hash`值）
### NavLink
#### 作用
1. 实现跳转路由 （形同`a`标签）
#### 实现
1. 利用 `Route` 组件判断是否是当前页面
1. 利用 `Link` 组件实现跳转，并对其实现class，style修改
### Switch
#### 作用
1. 保证只渲染一个子组件
#### 实现
1. 循环所有子路由组件 
2. 比对每一个子组件的`path` 成功则渲染，失败则不做渲染
### Redirect
#### 作用
1. 实现默认跳转（重定向）
#### 实现
1. 通过判断 `context`中的`pathname`是否和`from`属性相同
2. 相同则调用`context`中的`push`方法做更新
### 通过js跳转
1. js 方法通过Route组件把history传递给子组件
### Prompt
#### 作用
1. 实现跳转页面时进行拦截
#### 实现
1. 在  `history` 中添加`block`函数
2. 在 `push`的时候判断`block`值。进行拦击
### withRouter
#### 作用
1. 为没有 `history`的组件添加 `history`
#### 实现
1. 利用高阶组件
2. 传递  `RouterContext` 的 `history`给`props`
## 小记录
1. BrowserRouter 和 HashRouter传值有区别，BrowserRouter的state刷新后依然存在HashRouter的state刷新后消失