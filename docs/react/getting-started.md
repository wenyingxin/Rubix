---
order: 1
english: 快速上手
---

RubyX React 致力于提供给程序员**愉悦**的开发体验。

---


## 标准开发

实际项目开发中，你会需要对 ES2015 和 JSX 代码的构建、调试、代理、打包部署等一系列工程化的需求。
我们提供了一套 `npm` + `webpack` 的开发工具链来辅助开发，下面我们用一个简单的实例来说明。

### 1. 安装脚手架工具

待补充...


### 2. 创建一个项目

待补充...


### 3. 使用组件

待补充...

### 4. 开发调试

待补充...

### 5. 构建和部署

```bash
$ npm run dist
```

入口文件会构建到 `dist` 目录中，你可以自由部署到不同环境中进行引用。


## 兼容性

Ruby X 支持所有的现代浏览器和 IE8+。

对于 IE8，需要提供 [es5-shim](http://facebook.github.io/react/docs/working-with-the-browser.html#browser-support-and-polyfills) 等 Polyfills 的支持。

<div class="code-line-highlight"></div>

<style>
.code-line-highlight {
  box-shadow: 0px 248px 0px rgba(255, 162, 0, 0.1);
  height: 88px;
  margin-top: -88px;
  position: relative;
  z-index: 1;
  pointer-events: none;
}
</style>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <!-- 引入样式 -->
    <link rel="stylesheet" href="/index.css">
    <!-- Polyfills -->
    <!--[if lt IE 10]>
    <script src="https://as.alipayobjects.com/g/component/??console-polyfill/0.2.2/index.js,es5-shim/4.5.7/es5-shim.min.js,es5-shim/4.5.7/es5-sham.min.js,html5shiv/3.7.2/html5shiv.min.js,media-match/2.0.2/media.match.min.js"></script>
    <![endif]-->
  </head>
  <body>
  </body>
  <!-- 引入公用文件 -->
  <script src="/common.js"></script>
  <!-- 引入入口文件 -->
  <script src="/index.js"></script>
</html>
```
## 小甜点

- 你可以享用 `npm` 生态圈里的所有模块。
- 我们使用了 `babel`，试试用 [ES2015](http://babeljs.io/blog/2015/06/07/react-on-es6-plus) 的写法来提升编码的愉悦感。
