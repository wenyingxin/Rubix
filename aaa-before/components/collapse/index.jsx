import RcCollapse from 'rc-collapse';
import * as React from 'react';
export class CollapsePanel extends React.Component {
}
export default class Collapse extends React.Component {
    render() {
        return <RcCollapse {...this.props}/>;
    }
}
Collapse.Panel = RcCollapse.Panel;
Collapse.defaultProps = {
    prefixCls: 'rubix-collapse',
};
