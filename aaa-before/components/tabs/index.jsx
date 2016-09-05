import RcTabs, { TabPane } from 'rc-tabs';
import * as React from 'react';
import { cloneElement } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
export default class Tabs extends React.Component {
    constructor(...args) {
        super(...args);
        this.createNewTab = (targetKey) => {
            this.props.onEdit(targetKey, 'add');
        };
        this.removeTab = (targetKey, e) => {
            e.stopPropagation();
            if (!targetKey) {
                return;
            }
            this.props.onEdit(targetKey, 'remove');
        };
        this.handleChange = (activeKey) => {
            this.props.onChange(activeKey);
        };
    }
    render() {
        let { prefixCls, size, tabPosition, animation, type, children, tabBarExtraContent, hideAdd } = this.props;
        let className = classNames({
            [this.props.className]: !!this.props.className,
            [`${prefixCls}-mini`]: size === 'small' || size === 'mini',
            [`${prefixCls}-vertical`]: tabPosition === 'left' || tabPosition === 'right',
            [`${prefixCls}-card`]: type.indexOf('card') >= 0,
            [`${prefixCls}-${type}`]: true,
        });
        if (tabPosition === 'left' || tabPosition === 'right' || type.indexOf('card') >= 0) {
            animation = null;
        }
        // only card type tabs can be added and closed
        let childrenWithCross;
        if (type === 'editable-card') {
            childrenWithCross = [];
            React.Children.forEach(children, (child, index) => {
                childrenWithCross.push(cloneElement(child, {
                    tab: (<div>
              {child.props.tab}
              <Icon type="cross" onClick={(e) => this.removeTab(child.key, e)}/>
            </div>),
                    key: child.key || index,
                }));
            });
            // Add new tab handler
            if (!hideAdd) {
                tabBarExtraContent = (<span>
            <Icon type="plus" className={`${prefixCls}-new-tab`} onClick={this.createNewTab}/>
            {tabBarExtraContent}
          </span>);
            }
        }
        tabBarExtraContent = tabBarExtraContent ? (<div className={`${prefixCls}-extra-content`}>
        {tabBarExtraContent}
      </div>) : null;
        return (<RcTabs {...this.props} className={className} tabBarExtraContent={tabBarExtraContent} onChange={this.handleChange} animation={animation}>
        {childrenWithCross || children}
      </RcTabs>);
    }
}
Tabs.TabPane = TabPane;
Tabs.defaultProps = {
    prefixCls: 'rubix-tabs',
    animation: 'slide-horizontal',
    type: 'line',
    onChange() { },
    onEdit() { },
    hideAdd: false,
};
