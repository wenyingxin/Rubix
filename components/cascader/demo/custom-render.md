---
order: 8
title: 自定义已选项
---

例如给最后一项加上邮编链接。

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
      code: 10086,
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
      code: 453400,
    }],
  }],
}];

function handleAreaClick(e, label, option) {
  e.stopPropagation();
  console.log('点击了', label, option);
}

const displayRender = (labels, selectedOptions) => labels.map((label, i) => {
  const option = selectedOptions[i];
  if (i === labels.length - 1) {
    return (
      <span key={option.value}>
        {label} (<a onClick={(e) => handleAreaClick(e, label, option)}>{option.code}</a>)
      </span>
    );
  }
  return <span key={option.value}>{label} / </span>;
});

ReactDOM.render(
  <Cascader
    options={options}
    defaultValue={['beijing', 'haidian', 'beiqinglu']}
    displayRender={displayRender}
    style={{ width: 200 }} />
, mountNode);
````
