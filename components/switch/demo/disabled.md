---
order: 1
title: 不可用
---

Switch 失效状态。

````jsx
import { Switch, Button } from 'rubix';

const Test = React.createClass({
  getInitialState() {
    return {
      disabled: true,
    };
  },
  toggle() {
    this.setState({
      disabled: !this.state.disabled,
    });
  },
  render() {
    return (
      <div>
        <Switch disabled={this.state.disabled} />
        <br />
        <br />
        <Button type="primary" onClick={this.toggle}>Toggle disabled</Button>
      </div>
    );
  },
});

ReactDOM.render(<Test />, mountNode);
````
