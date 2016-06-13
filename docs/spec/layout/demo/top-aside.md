---
order: 1
title: 顶部导航 + 侧边栏
---

顶级导航在头部，次级导航在侧边栏。

````jsx
import { Menu, Breadcrumb, Icon } from 'antd';
import BrowserDemo from 'site/component/BrowserDemo';
const SubMenu = Menu.SubMenu;

ReactDOM.render(
  <BrowserDemo>
    <div className="rubix-layout-topaside">
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
          <aside className="rubix-layout-sider">
            <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
              <SubMenu key="sub1" title={<span><Icon type="user" />导航一</span>}>
                <Menu.Item key="1">选项1</Menu.Item>
                <Menu.Item key="2">选项2</Menu.Item>
                <Menu.Item key="3">选项3</Menu.Item>
                <Menu.Item key="4">选项4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />导航二</span>}>
                <Menu.Item key="5">选项5</Menu.Item>
                <Menu.Item key="6">选项6</Menu.Item>
                <Menu.Item key="7">选项7</Menu.Item>
                <Menu.Item key="8">选项8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />导航三</span>}>
                <Menu.Item key="9">选项9</Menu.Item>
                <Menu.Item key="10">选项10</Menu.Item>
                <Menu.Item key="11">选项11</Menu.Item>
                <Menu.Item key="12">选项12</Menu.Item>
              </SubMenu>
            </Menu>
          </aside>
          <div className="rubix-layout-content">
            <div style={{ height: 240 }}>
              <div style={{clear: 'both'}}>内容区域</div>
            </div>
          </div>
        </div>
        <div className="rubix-layout-footer">
        rubix Design 版权所有
        </div>
      </div>
    </div>
  </BrowserDemo>
, mountNode);
````

````css
.rubix-layout-topaside {
  height: 100%;
}

.rubix-layout-topaside .rubix-layout-wrapper {
  padding: 0 50px;
}

.rubix-layout-topaside .rubix-layout-header {
  background: #404040;
  height: 64px;
}

.rubix-layout-topaside .rubix-layout-logo {
  width: 120px;
  height: 32px;
  background: #333;
  border-radius: 6px;
  margin: 16px 28px 16px 0;
  float: left;
}

.rubix-layout-topaside .rubix-layout-subheader {
  height: 48px;
  border-bottom: 1px solid #e9e9e9;
  background: #fff;
}

.rubix-layout-topaside .rubix-layout-breadcrumb {
  margin: 7px 0 -17px 24px;
}

.rubix-layout-topaside .rubix-layout-container {
  background: #fff;
  margin: 24px 0 0;
  position: relative;
  padding: 24px 0;
  overflow: hidden;
}

.rubix-layout-topaside .rubix-layout-sider {
  width: 224px;
  float: left;
}

.rubix-layout-topaside .rubix-layout-content {
  border-left: 1px solid #e9e9e9;
  padding: 0 24px;
  overflow: auto;
  position: relative;
  left: -1px;
}

.rubix-layout-topaside .rubix-layout-footer {
  height: 64px;
  line-height: 64px;
  text-align: center;
  font-size: 12px;
  color: #999;
}
````
