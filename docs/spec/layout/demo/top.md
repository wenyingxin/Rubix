---
order: 0
title: 顶部导航
---

一二级导航都在顶部。

顶部导航在页面布局上采用的是上下的结构，一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。

> `<BrowserDemo />` 做演示用，无须复制。

````jsx
import { Menu, Breadcrumb } from 'antd';
import BrowserDemo from 'site/component/BrowserDemo';

ReactDOM.render(
  <BrowserDemo>
    <div className="rubix-layout-top">
      <div className="rubix-layout-header">
        <div className="rubix-layout-wrapper">
          <div className="rubix-layout-logo"></div>
          <Menu theme="dark" mode="horizontal"
            defaultSelectedKeys={['2']} style={{lineHeight: '64px'}}>
            <Menu.Item key="1">导航一</Menu.Item>
            <Menu.Item key="2">导航二</Menu.Item>
            <Menu.Item key="3">导航三</Menu.Item>
          </Menu>
        </div>
      </div>
      <div className="rubix-layout-subheader">
        <div className="rubix-layout-wrapper">
          <Menu mode="horizontal"
            defaultSelectedKeys={['1']} style={{marginLeft: 124}}>
            <Menu.Item key="1">二级导航</Menu.Item>
            <Menu.Item key="2">二级导航</Menu.Item>
            <Menu.Item key="3">二级导航</Menu.Item>
          </Menu>
        </div>
      </div>
      <div className="rubix-layout-wrapper">
        <div className="rubix-layout-breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>应用列表</Breadcrumb.Item>
            <Breadcrumb.Item>某应用</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="rubix-layout-container">
          <div style={{ height: 210 }}></div>
        </div>
      </div>
      <div className="rubix-layout-footer">
      rubix Design 版权所有
      </div>
    </div>
  </BrowserDemo>
, mountNode);
````

````css
.rubix-layout-top {
  height: 100%;
}

.rubix-layout-top .rubix-layout-wrapper {
  padding: 0 50px;
}

.rubix-layout-top .rubix-layout-header {
  background: #404040;
  height: 64px;
}

.rubix-layout-top .rubix-layout-logo {
  width: 120px;
  height: 32px;
  background: #333;
  border-radius: 6px;
  margin: 16px 28px 16px 0;
  float: left;
}

.rubix-layout-top .rubix-layout-subheader {
  height: 48px;
  border-bottom: 1px solid #e9e9e9;
  background: #fff;
}

.rubix-layout-top .rubix-layout-breadcrumb {
  margin: 7px 0 -17px 24px;
}

.rubix-layout-top .rubix-layout-container {
  background: #fff;
  margin: 24px 0 0;
  position: relative;
  padding-top: 24px;
  overflow: hidden;
}

.rubix-layout-top .rubix-layout-footer {
  height: 64px;
  line-height: 64px;
  text-align: center;
  font-size: 12px;
  color: #999;
}
````
