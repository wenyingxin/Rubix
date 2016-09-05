import * as React from 'react';
import Select, { Option, OptGroup } from '../select';
import classNames from 'classnames';
export default class AutoComplete extends React.Component {
    render() {
        let { size, className, notFoundContent, prefixCls, optionLabelProp, dataSource, } = this.props;
        const cls = classNames({
            [`${prefixCls}-lg`]: size === 'large',
            [`${prefixCls}-sm`]: size === 'small',
            [className]: !!className,
            [`${prefixCls}-show-search`]: true,
        });
        const options = dataSource ? dataSource.map((item, index) => {
            switch (typeof item) {
                case 'string':
                    return <Option key={item}>{item}</Option>;
                case 'object':
                    if (React.isValidElement(item)) {
                        return React.cloneElement(item, {
                            key: item.key || index,
                        });
                    }
                    return <Option key={item.value}>{item.text}</Option>;
                default:
                    return [];
            }
        }) : [];
        return (<Select {...this.props} className={cls} optionLabelProp={optionLabelProp} combobox notFoundContent={notFoundContent}>
        {options}
      </Select>);
    }
}
AutoComplete.Option = Option;
AutoComplete.OptGroup = OptGroup;
AutoComplete.defaultProps = {
    prefixCls: 'rubix-select',
    transitionName: 'slide-up',
    optionLabelProp: 'children',
    choiceTransitionName: 'zoom',
    showSearch: false,
};
AutoComplete.contextTypes = {
    antLocale: React.PropTypes.object,
};
