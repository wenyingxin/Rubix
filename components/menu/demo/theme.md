---
order: 4
title:
  zh-CN: 主题
  en-US: Menu Themes
---

## zh-CN

内建了两套主题 `light|dark`，默认 `light`。

## en-US

There are two built-in themes: 'light' and 'dark'. The default value is 'light'.

````jsx
import { Menu, Icon, Switch } from 'rubix';
const SubMenu = Menu.SubMenu;

const Sider = React.createClass({
  getInitialState() {
    return {
      theme: 'light',
    };
  },
  changeTheme(value) {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  },
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  },
  render() {
    return (
      <div>
        <Switch onChange={this.changeTheme} checkedChildren="dark" unCheckedChildren="light" />
        <br />
        <br />
        <Menu theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 240 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
            <Menu.Item key="1">选项 1</Menu.Item>
            <Menu.Item key="2">选项 2</Menu.Item>
            <Menu.Item key="3">选项 3</Menu.Item>
            <Menu.Item key="4">选项 4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航二</span></span>}>
            <Menu.Item key="5">选项 5</Menu.Item>
            <Menu.Item key="6">选项 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">选项 7</Menu.Item>
              <Menu.Item key="8">选项 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="setting" /><span>导航三</span></span>}>
            <Menu.Item key="9">选项 9</Menu.Item>
            <Menu.Item key="10">选项 10</Menu.Item>
            <Menu.Item key="11">选项 11</Menu.Item>
            <Menu.Item key="12">选项 12</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  },
});
ReactDOM.render(<Sider />, mountNode);
````
