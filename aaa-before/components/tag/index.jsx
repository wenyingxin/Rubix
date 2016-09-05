import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Animate from 'rc-animate';
import Icon from '../icon';
import classNames from 'classnames';
import splitObject from '../_util/splitObject';
import omit from 'object.omit';
export default class Tag extends React.Component {
    constructor(props) {
        super(props);
        this.close = (e) => {
            this.props.onClose(e);
            if (e.defaultPrevented) {
                return;
            }
            const dom = ReactDOM.findDOMNode(this);
            dom.style.width = `${dom.getBoundingClientRect().width}px`;
            // It's Magic Code, don't know why
            dom.style.width = `${dom.getBoundingClientRect().width}px`;
            this.setState({
                closing: true,
            });
        };
        this.animationEnd = (key, existed) => {
            if (!existed && !this.state.closed) {
                this.setState({
                    closed: true,
                    closing: false,
                });
                this.props.afterClose();
            }
        };
        this.state = {
            closing: false,
            closed: false,
        };
    }
    render() {
        const [{ prefixCls, closable, color, className, children, }, otherProps] = splitObject(this.props, ['prefixCls', 'closable', 'color', 'className', 'children']);
        const closeIcon = closable ? <Icon type="cross" onClick={this.close}/> : '';
        const classString = classNames({
            [prefixCls]: true,
            [`${prefixCls}-${color}`]: !!color,
            [`${prefixCls}-close`]: this.state.closing,
            [className]: !!className,
        });
        // fix https://fb.me/react-unknown-prop
        const divProps = omit(otherProps, [
            'onClose',
            'afterClose',
        ]);
        return (<Animate component="" showProp="data-show" transitionName={`${prefixCls}-zoom`} transitionAppear onEnd={this.animationEnd}>
        {this.state.closed ? null : (<div data-show={!this.state.closing} {...divProps} className={classString} style={{ backgroundColor: /blue|red|green|yellow/.test(color) ? null : color }}>
            <span className={`${prefixCls}-text`}>{children}</span>
            {closeIcon}
          </div>)}
      </Animate>);
    }
}
Tag.defaultProps = {
    prefixCls: 'rubix-tag',
    closable: false,
    onClose() { },
    afterClose() { },
};
