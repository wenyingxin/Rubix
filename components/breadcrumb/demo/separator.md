---
order: 3
title: 
  zh-CN: 分隔符
  en-US: Configuring the Separator
---

## zh-CN

使用 `separator=">"` 可以自定义分隔符。

## en-US

The separator can be customized by setting the separator property: separator=">"

````jsx
import { Breadcrumb } from 'rubix';

ReactDOM.render(
  <Breadcrumb separator=">">
    <Breadcrumb.Item>首页</Breadcrumb.Item>
    <Breadcrumb.Item href="">应用中心</Breadcrumb.Item>
    <Breadcrumb.Item href="">应用列表</Breadcrumb.Item>
    <Breadcrumb.Item>某应用</Breadcrumb.Item>
  </Breadcrumb>
, mountNode);
````
