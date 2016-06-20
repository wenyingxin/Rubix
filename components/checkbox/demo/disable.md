---
order: 1
title: 不可用
---

checkbox 不可用。

````jsx
import { Checkbox } from 'rubix';

ReactDOM.render(<div>
  <Checkbox defaultChecked={false} disabled />
  <br />
  <Checkbox defaultChecked disabled />
</div>, mountNode);
````
