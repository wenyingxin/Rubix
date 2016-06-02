import React from 'react';
import Radio from './radio';

export default class RadioButton extends React.Component {
  static defaultProps = {
    prefixCls: 'rubyx-radio-button',
  }
  render() {
    return (
      <Radio {...this.props} />
    );
  }
}
