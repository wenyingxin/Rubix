import * as React from 'react';
import RcDropdown from 'rc-dropdown';
export default class Dropdown extends React.Component {
    render() {
        return <RcDropdown {...this.props}/>;
    }
}
Dropdown.defaultProps = {
    transitionName: 'slide-up',
    prefixCls: 'rubix-dropdown',
    mouseEnterDelay: 0.15,
    mouseLeaveDelay: 0.1,
};
