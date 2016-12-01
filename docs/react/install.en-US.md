---
order: 2
title: 安装
---

## 使用 npm 安装

**我们推荐使用 npm 的方式进行开发**，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

可以通过 npm 直接安装到项目中，使用 `import` 或 `require` 进行引用。


```bash
$ npm install rubix --save
```



## 浏览器引入

我们在 npm 发布包内的 `rubix/dist` 目录下提供了 `rubix.js` `rubix.css` 以及 `rubix.min.js` `rubix.min.css` 用于一次性引入所有的 rubix 组件。

> 不推荐使用构建文件，因为难以获得底层依赖模块的 bug 快速修复支持。
