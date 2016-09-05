import * as React from 'react';
import RcPagination from 'rc-pagination';
import Select from '../select';
import MiniSelect from './MiniSelect';
import zhCN from './locale/zh_CN';
export default class Pagination extends React.Component {
    render() {
        let className = this.props.className;
        let selectComponentClass = Select;
        let locale;
        if (this.context.antLocale && this.context.antLocale.Pagination) {
            locale = this.context.antLocale.Pagination;
        }
        else {
            locale = this.props.locale;
        }
        if (this.props.size === 'small') {
            className += ' mini';
            selectComponentClass = MiniSelect;
        }
        return (<RcPagination selectComponentClass={selectComponentClass} selectPrefixCls="rubix-select" {...this.props} locale={locale} className={className}/>);
    }
}
Pagination.defaultProps = {
    locale: zhCN,
    className: '',
    prefixCls: 'rubix-pagination',
};
Pagination.contextTypes = {
    antLocale: React.PropTypes.object,
};
