import * as React from 'react';
import Icon from '../icon';
function noop() {
}
export default class Search extends React.Component {
    constructor(...args) {
        super(...args);
        this.handleChange = (e) => {
            this.props.onChange(e);
        };
        this.handleClear = (e) => {
            e.preventDefault();
            this.props.handleClear(e);
        };
    }
    render() {
        const { placeholder, value, prefixCls } = this.props;
        return (<div>
        <input placeholder={placeholder} className={`${prefixCls} rubix-input`} value={value} ref="input" onChange={this.handleChange}/>
        {value && value.length > 0 ?
            <a href="#" className={`${prefixCls}-action`} onClick={this.handleClear}>
            <Icon type="cross-circle"/>
          </a>
            : <span className={`${prefixCls}-action`}><Icon type="search"/></span>}
      </div>);
    }
}
Search.defaultProps = {
    placeholder: '',
    onChange: noop,
    handleClear: noop,
};
