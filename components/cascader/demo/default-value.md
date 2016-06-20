---
order: 0
title: 默认值
---

默认值通过数组的方式指定。

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

ReactDOM.render(
  <Cascader defaultValue={['beijing', 'haidian', 'beiqinglu']} options={options} onChange={onChange} />
, mountNode);
````
