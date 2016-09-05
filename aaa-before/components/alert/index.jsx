import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Animate from 'rc-animate';
import Icon from '../icon';
import classNames from 'classnames';
export default class Alert extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = (e) => {
            e.preventDefault();
            let dom = ReactDOM.findDOMNode(this);
            dom.style.height = `${dom.offsetHeight}px`;
            // Magic code
            // 重复一次后才能正确设置 height
            dom.style.height = `${dom.offsetHeight}px`;
            this.setState({
                closing: false,
            });
            this.props.onClose(e);
        };
        this.animationEnd = () => {
            this.setState({
                closed: true,
                closing: true,
            });
        };
        this.state = {
            closing: true,
            closed: false,
        };
    }
    render() {
        let { closable, description, type, prefixCls, message, closeText, showIcon, banner, } = this.props;
        // banner模式默认有 Icon
        showIcon = showIcon || banner;
        // banner模式默认为警告
        type = banner ? 'warning' : type;
        let iconType = '';
        switch (type) {
            case 'success':
                iconType = 'check-circle';
                break;
            case 'info':
                iconType = 'info-circle';
                break;
            case 'error':
                iconType = 'cross-circle';
                break;
            case 'warning':
                iconType = 'exclamation-circle';
                break;
            default:
                iconType = 'default';
        }
        // use outline icon in alert with description
        if (!!description) {
            iconType += '-o';
        }
        let alertCls = classNames({
            [prefixCls]: true,
            [`${prefixCls}-${type}`]: true,
            [`${prefixCls}-close`]: !this.state.closing,
            [`${prefixCls}-with-description`]: !!description,
            [`${prefixCls}-no-icon`]: !showIcon,
            [`${prefixCls}-banner`]: !!banner,
        });
        // closeable when closeText is assigned
        if (closeText) {
            closable = true;
        }
        return this.state.closed ? null : (<Animate component="" showProp="data-show" transitionName={`${prefixCls}-slide-up`} onEnd={this.animationEnd}>
        <div data-show={this.state.closing} className={alertCls}>
          {showIcon ? <Icon className="rubix-alert-icon" type={iconType}/> : null}
          <span className={`${prefixCls}-message`}>{message}</span>
          <span className={`${prefixCls}-description`}>{description}</span>
          {closable ? <a onClick={this.handleClose} className={`${prefixCls}-close-icon`}>
            {closeText || <Icon type="cross"/>}
          </a> : null}
        </div>
      </Animate>);
    }
}
Alert.defaultProps = {
    prefixCls: 'rubix-alert',
    showIcon: false,
    onClose() { },
    type: 'info',
};
