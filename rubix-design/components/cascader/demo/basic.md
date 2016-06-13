---
order: 0
title: 基本
---

省市区级联。

````jsx
import { Cascader } from 'antd';

const options = [{
  value: 'beijing',
  label: '北京',
  children: [{
    value: 'haidian',
    label: '海淀',
    children: [{
      value: 'wudaokou',
      label: '五道口',
    }],
  }],
}, {
  value: 'hebei',
  label: '河北',
  children: [{
    value: 'shijiazhuang',
    label: '石家庄',
    children: [{
      value: 'zhonghuamen',
      label: '中华门',
    }],
  }],
}];

function onChange(value) {
  console.log(value);
}

ReactDOM.render(
  <Cascader options={options} onChange={onChange} placeholder="请选择地区" />
, mountNode);
````
