import React from 'react';
import Tooltip from '../tooltip';
import getPlacements from './placements';
const placements = getPlacements();
export default class Popover extends React.Component {
    render() {
        return (<Tooltip transitionName={this.props.transitionName} builtinPlacements={placements} ref="tooltip" {...this.props} overlay={this.getOverlay()}>
        {this.props.children}
      </Tooltip>);
    }
    getPopupDomNode() {
        return this.refs.tooltip.getPopupDomNode();
    }
    getOverlay() {
        const { title, prefixCls, content } = this.props;
        return (<div>
        {title && <div className={`${prefixCls}-title`}>{title}</div>}
        <div className={`${prefixCls}-inner-content`}>
          {content}
        </div>
      </div>);
    }
}
Popover.defaultProps = {
    prefixCls: 'rubix-popover',
    placement: 'top',
    transitionName: 'zoom-big',
    trigger: 'hover',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    overlayStyle: {},
};
