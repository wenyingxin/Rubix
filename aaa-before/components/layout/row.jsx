import * as React from 'react';
import { Children, cloneElement } from 'react';
import classNames from 'classnames';
import assign from 'object-assign';
import splitObject from '../_util/splitObject';
export default class Row extends React.Component {
    render() {
        const [{ type, justify, align, className, gutter, style, children }, others] = splitObject(this.props, ['type', 'justify', 'align', 'className', 'gutter', 'style', 'children']);
        const classes = classNames({
            'rubix-row': !type,
            [`rubix-row-${type}`]: type,
            [`rubix-row-${type}-${justify}`]: justify,
            [`rubix-row-${type}-${align}`]: align,
            [className]: className,
        });
        const rowStyle = gutter > 0 ? assign({}, {
            marginLeft: gutter / -2,
            marginRight: gutter / -2,
        }, style) : style;
        const cols = Children.map(children, (col) => {
            if (!col) {
                return null;
            }
            if (col.props) {
                return cloneElement(col, {
                    style: gutter > 0 ? assign({}, {
                        paddingLeft: gutter / 2,
                        paddingRight: gutter / 2,
                    }, col.props.style) : col.props.style,
                });
            }
            return col;
        });
        return <div {...others} className={classes} style={rowStyle}>{cols}</div>;
    }
}
Row.defaultProps = {
    gutter: 0,
};
Row.propTypes = {
    type: React.PropTypes.string,
    align: React.PropTypes.string,
    justify: React.PropTypes.string,
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    gutter: React.PropTypes.number,
};
