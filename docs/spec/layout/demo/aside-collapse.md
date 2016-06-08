---
order: 4
title: 可收起展开的侧边导航
---

页面横向空间有限时使用。侧边导航默认收起，点击底部按钮时展开。

````jsx
import { Menu, Breadcrumb, Icon } from 'antd';
import BrowserDemo from 'site/component/BrowserDemo';
const SubMenu = Menu.SubMenu;

const AsideCollapse = React.createClass({
  getInitialState() {
    return {
      collapse: true,
    };
  },
  onCollapseChange() {
    this.setState({
      collapse: !this.state.collapse,
    })
  },
  render() {
    const collapse = this.state.collapse;
    return (
      <div className={collapse ? "rubix-layout-aside rubix-layout-aside-collapse" : "rubix-layout-aside"}>
        <aside className="rubix-layout-sider">
          <div className="rubix-layout-logo"></div>
          <Menu mode="inline" theme="dark" defaultSelectedKeys={['user']}>
            <Menu.Item key="user">
              <Icon type="user" /><span className="nav-text">导航一</span>
            </Menu.Item>
            <Menu.Item key="setting">
              <Icon type="setting" /><span className="nav-text">导航二</span>
            </Menu.Item>
            <Menu.Item key="laptop">
              <Icon type="laptop" /><span className="nav-text">导航三</span>
            </Menu.Item>
            <Menu.Item key="notification">
              <Icon type="notification" /><span className="nav-text">导航四</span>
            </Menu.Item>
            <Menu.Item key="folder">
              <Icon type="folder" /><span className="nav-text">导航五</span>
            </Menu.Item>
          </Menu>
          <div className="rubix-aside-action" onClick={this.onCollapseChange}>
            {collapse ? <Icon type="right" /> : <Icon type="left" />}
          </div>
        </aside>
        <div className="rubix-layout-main">
          <div className="rubix-layout-header"></div>
          <div className="rubix-layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>应用列表</Breadcrumb.Item>
              <Breadcrumb.Item>某应用</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="rubix-layout-container">
            <div className="rubix-layout-content">
              <div style={{ height: 220 }}>
                内容区域
              </div>
            </div>
          </div>
          <div className="rubix-layout-footer">
          rubix Design 版权所有
          </div>
        </div>
      </div>
    );
  },
});

ReactDOM.render(<BrowserDemo><AsideCollapse /></BrowserDemo>, mountNode);
````

````css
.rubix-layout-aside {
  position: relative;
  min-height: 100%;
}

.rubix-layout-aside .rubix-layout-logo {
  width: 150px;
  height: 32px;
  background: #333;
  border-radius: 6px;
  margin: 16px 24px 16px 28px;
  transition: all 0.3s ease;
}

.rubix-layout-aside-collapse .rubix-layout-logo {
  width: 32px;
  margin: 16px;
  transition: all 0.3s ease;
}

.rubix-layout-aside .rubix-layout-sider {
  width: 224px;
  background: #404040;
  position: absolute;
  overflow: visible;
  padding-bottom: 24px;
  height: 100%;
  transition: all 0.3s ease;
}

.rubix-layout-aside-collapse .rubix-layout-sider {
  width: 64px;
  transition: all 0.3s ease;
}

.rubix-layout-aside .rubix-layout-sider > .rubix-menu {
  margin-bottom: 20px;
}

.rubix-layout-aside .rubix-layout-sider > .rubix-menu > .rubix-menu-item {
  margin: 16px 0;
}

.rubix-layout-aside .rubix-layout-sider > .rubix-menu > .rubix-menu-item .nav-text {
  vertical-align: middle;
  display: inline-block;
}

.rubix-layout-aside .rubix-layout-sider > .rubix-menu > .rubix-menu-item > .rubixicon {
  transition: font-size .3s;
  vertical-align: middle;
}

.rubix-layout-aside-collapse .rubix-layout-sider > .rubix-menu > .rubix-menu-item {
  transition: all 0s ease;
}

.rubix-layout-aside-collapse .rubix-layout-sider > .rubix-menu > .rubix-menu-item > .rubixicon {
  font-size: 16px;
  display: inline-block;
  vertical-align: middle;
}

.rubix-layout-aside-collapse .rubix-layout-sider > .rubix-menu > .rubix-menu-item .nav-text {
  display: none;
}

.rubix-layout-aside-collapse .rubix-layout-sider > .rubix-menu > .rubix-menu-item:hover {
  background: #2db7f5;
  color: #fff;
  transition: all 0s ease;
}

.rubix-layout-aside-collapse .rubix-layout-sider > .rubix-menu > .rubix-menu-item:hover .nav-text {
  display: inline-block;
  vertical-align: top;
  background: #2db7f5;
  color: #fff;
  padding-right: 16px;
  border-radius: 0 5px 5px 0;
}

/* 实际使用中需要改成 position: fixed */
.rubix-layout-aside .rubix-aside-action {
  height: 42px;
  width: 224px;
  position: absolute;
  bottom: 0;
  background: #656565;
  color: #fff;
  text-align: center;
  line-height: 42px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.rubix-layout-aside-collapse .rubix-aside-action {
  width: 64px;
  transition: all 0.3s ease;
}

.rubix-layout-aside .rubix-layout-header {
  background: #fff;
  height: 64px;
  border-bottom: 1px solid #e9e9e9;
}

.rubix-layout-aside .rubix-layout-breadcrumb {
  margin: 7px 0 -17px 24px;
}

.rubix-layout-aside .rubix-layout-main {
  margin-left: 224px;
  transition: all 0.3s ease;
}

.rubix-layout-aside-collapse .rubix-layout-main {
  margin-left: 64px;
  transition: all 0.3s ease;
}

.rubix-layout-aside .rubix-layout-container {
  margin: 24px 16px;
}

.rubix-layout-aside .rubix-layout-content {
  background: #fff;
  padding: 24px;
}

.rubix-layout-aside .rubix-layout-footer {
  height: 64px;
  line-height: 64px;
  text-align: center;
  font-size: 12px;
  color: #999;
  background: #fff;
  border-top: 1px solid #e9e9e9;
  width: 100%;
}
````
