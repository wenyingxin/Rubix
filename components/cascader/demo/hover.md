---
order: 2
title: 移入展开
---

通过移入展开下级菜单，点击完成选择。

````jsx
import { Cascader } from 'rubix';

const options = [{
  value: 'beijing',
  label: '北京',
  children: [{
    value: 'haidian',
    label: '海淀',
    children: [{
      value: 'beiqinglu',
      label: '北清路',
    }],
  }],
}, {
  value: 'jiangsu',
  label: '江苏',
  children: [{
    value: 'nanjing',
    label: '南京',
    children: [{
      value: 'zhonghuamen',
      label: '中华门',
    }],
  }],
}];

function onChange(value) {
  console.log(value);
}

// 只展示最后一项
function displayRender(label) {
  return label[label.length - 1];
}

ReactDOM.render(
  <Cascader options={options} expandTrigger="hover"
    displayRender={displayRender} onChange={onChange} />
, mountNode);
````
