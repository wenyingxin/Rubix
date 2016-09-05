import RcCheckbox from 'rc-checkbox';
import * as React from 'react';
import CheckboxGroup from './Group';
import classNames from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import splitObject from '../_util/splitObject';
export default class Checkbox extends React.Component {
    shouldComponentUpdate(...args) {
        return PureRenderMixin.shouldComponentUpdate.apply(this, args);
    }
    render() {
        const [{ prefixCls, style, children, className }, restProps] = splitObject(this.props, ['prefixCls', 'style', 'children', 'className']);
        const classString = classNames({
            [className]: !!className,
            [`${prefixCls}-wrapper`]: true,
        });
        return (<label className={classString} style={style}>
        <RcCheckbox {...restProps} prefixCls={prefixCls} children={null}/>
        {children !== undefined ? <span>{children}</span> : null}
      </label>);
    }
}
Checkbox.Group = CheckboxGroup;
Checkbox.defaultProps = {
    prefixCls: 'rubix-checkbox',
};
