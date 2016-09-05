import * as React from 'react';
import Tooltip from '../tooltip';
import Icon from '../icon';
import Button from '../button';
import getPlacements from '../popover/placements';
import splitObject from '../_util/splitObject';
const noop = () => { };
export default class Popconfirm extends React.Component {
    constructor(props) {
        super(props);
        this.confirm = () => {
            this.setVisible(false);
            this.props.onConfirm.call(this);
        };
        this.cancel = () => {
            this.setVisible(false);
            this.props.onCancel.call(this);
        };
        this.onVisibleChange = (visible) => {
            this.setVisible(visible);
        };
        this.state = {
            visible: false,
        };
    }
    componentWillReceiveProps(nextProps) {
        if ('visible' in nextProps) {
            this.setState({ visible: nextProps.visible });
        }
    }
    setVisible(visible) {
        if (!('visible' in this.props)) {
            this.setState({ visible });
        }
        this.props.onVisibleChange(visible);
    }
    render() {
        const [{ prefixCls, title, placement, arrowPointAtCenter }, restProps] = splitObject(this.props, ['prefixCls', 'title', 'placement', 'arrowPointAtCenter']);
        let { okText, cancelText } = this.props;
        if (this.context.antLocale && this.context.antLocale.Popconfirm) {
            okText = okText || this.context.antLocale.Popconfirm.okText;
            cancelText = cancelText || this.context.antLocale.Popconfirm.cancelText;
        }
        const overlay = (<div>
        <div className={`${prefixCls}-inner-content`}>
          <div className={`${prefixCls}-message`}>
            <Icon type="exclamation-circle"/>
            <div className={`${prefixCls}-message-title`}>{title}</div>
          </div>
          <div className={`${prefixCls}-buttons`}>
            <Button onClick={this.cancel} type="ghost" size="small">{cancelText || '取消'}</Button>
            <Button onClick={this.confirm} type="primary" size="small">{okText || '确定'}</Button>
          </div>
        </div>
      </div>);
        return (<Tooltip {...restProps} builtinPlacements={getPlacements({ arrowPointAtCenter })} prefixCls={prefixCls} placement={placement} onVisibleChange={this.onVisibleChange} visible={this.state.visible} overlay={overlay}/>);
    }
}
Popconfirm.defaultProps = {
    prefixCls: 'rubix-popover',
    transitionName: 'zoom-big',
    placement: 'top',
    trigger: 'click',
    onConfirm: noop,
    onCancel: noop,
    onVisibleChange: noop,
};
Popconfirm.contextTypes = {
    antLocale: React.PropTypes.object,
};
