import * as React from 'react';
import { PropTypes } from 'react';
import RcSelect, { Option, OptGroup } from 'rc-select';
import classNames from 'classnames';
export { Option, OptGroup };
export default class Select extends React.Component {
    render() {
        let { prefixCls, className, size, combobox, notFoundContent, showSearch, optionLabelProp, } = this.props;
        const cls = classNames({
            [`${prefixCls}-lg`]: size === 'large',
            [`${prefixCls}-sm`]: size === 'small',
            [className]: !!className,
            [`${prefixCls}-show-search`]: showSearch,
        });
        const { antLocale } = this.context;
        if (antLocale && antLocale.Select) {
            notFoundContent = notFoundContent || antLocale.Select.notFoundContent;
        }
        if (combobox) {
            notFoundContent = null;
            // children 带 dom 结构时，无法填入输入框
            optionLabelProp = optionLabelProp || 'value';
        }
        return (<RcSelect {...this.props} className={cls} optionLabelProp={optionLabelProp || 'children'} notFoundContent={notFoundContent}/>);
    }
}
Select.Option = Option;
Select.OptGroup = OptGroup;
Select.defaultProps = {
    prefixCls: 'rubix-select',
    showSearch: false,
    transitionName: 'slide-up',
    choiceTransitionName: 'zoom',
};
Select.propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.oneOf(['default', 'large', 'small']),
    combobox: PropTypes.bool,
    notFoundContent: PropTypes.any,
    showSearch: PropTypes.bool,
    optionLabelProp: PropTypes.string,
    transitionName: PropTypes.string,
    choiceTransitionName: PropTypes.string,
};
