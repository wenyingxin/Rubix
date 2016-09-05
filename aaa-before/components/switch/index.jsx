import * as React from 'react';
import { PropTypes } from 'react';
import RcSwitch from 'rc-switch';
import classNames from 'classnames';
export default class Switch extends React.Component {
    render() {
        const { prefixCls, size, className } = this.props;
        const classes = classNames({
            [className]: !!className,
            [`${prefixCls}-small`]: size === 'small',
        });
        return <RcSwitch {...this.props} className={classes}/>;
    }
}
Switch.defaultProps = {
    prefixCls: 'rubix-switch',
    size: 'default',
};
Switch.propTypes = {
    prefixCls: PropTypes.string,
    size: PropTypes.oneOf(['small', 'default']),
    className: PropTypes.string,
};
