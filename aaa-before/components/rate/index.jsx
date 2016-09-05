import * as React from 'react';
import { PropTypes } from 'react';
import RcRate from 'rc-rate';
export default class Rate extends React.Component {
    render() {
        return <RcRate {...this.props}/>;
    }
}
Rate.propTypes = {
    prefixCls: PropTypes.string,
};
Rate.defaultProps = {
    prefixCls: 'rubix-rate',
};
