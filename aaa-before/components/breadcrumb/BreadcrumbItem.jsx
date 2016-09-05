import * as React from 'react';
import splitObject from '../_util/splitObject';
export default class BreadcrumbItem extends React.Component {
    render() {
        const [{ prefixCls, separator, children }, restProps] = splitObject(this.props, ['prefixCls', 'separator', 'children']);
        let link;
        if ('href' in this.props) {
            link = <a className={`${prefixCls}-link`} {...restProps}>{children}</a>;
        }
        else {
            link = <span className={`${prefixCls}-link`} {...restProps}>{children}</span>;
        }
        return (<span>
        {link}
        <span className={`${prefixCls}-separator`}>{separator}</span>
      </span>);
    }
}
BreadcrumbItem.defaultProps = {
    prefixCls: 'rubix-breadcrumb',
    separator: '/',
};
BreadcrumbItem.propTypes = {
    prefixCls: React.PropTypes.string,
    separator: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.element,
    ]),
    href: React.PropTypes.string,
};
