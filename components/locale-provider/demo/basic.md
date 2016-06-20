---
order: 1
title: 国际化
---

用 `LocaleProvider` 包裹你的应用，并引用对应的语言包。

````jsx
import { Pagination, LocaleProvider } from 'rubix';

function App() {
  return (
    <div>
      <Pagination defaultCurrent={1} total={50} showSizeChanger />
    </div>
  );
}

ReactDOM.render(
  <LocaleProvider>
    <App />
  </LocaleProvider>
, mountNode);
````
