import * as React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';
import assign from 'object-assign';
import splitObject from '../_util/splitObject';

const stringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
const objectOrNumber = PropTypes.oneOfType([PropTypes.object, PropTypes.number]);

interface ColSize {
  span?: number;
  order?: number;
  offset?: number;
  push?: number;
  pull?: number;
}

export interface ColProps {
  className?: string;
  span?: number;
  order?: number;
  offset?: number;
  push?: number;
  pull?: number;
  xs?: ColSize;
  sm?: ColSize;
  md?: ColSize;
  lg?: ColSize;
}

const Col: React.StatelessComponent<ColProps> = (props) => {
  const [{ span, order, offset, push, pull, className, children }, others] = splitObject(props,
    ['span', 'order', 'offset', 'push', 'pull', 'className', 'children']);
  let sizeClassObj = {};
  ['xs', 'sm', 'md', 'lg'].forEach(size => {
    let sizeProps: ColSize = {};
    if (typeof props[size] === 'number') {
      sizeProps.span = props[size];
    } else if (typeof props[size] === 'object') {
      sizeProps = props[size] || {};
    }

    delete others[size];

    sizeClassObj = assign({}, sizeClassObj, {
      [`rubix-col-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
      [`rubix-col-${size}-order-${sizeProps.order}`]: sizeProps.order,
      [`rubix-col-${size}-offset-${sizeProps.offset}`]: sizeProps.offset,
      [`rubix-col-${size}-push-${sizeProps.push}`]: sizeProps.push,
      [`rubix-col-${size}-pull-${sizeProps.pull}`]: sizeProps.pull,
    });
  });
  const classes = classNames(assign({}, {
    [`rubix-col-${span}`]: span !== undefined,
    [`rubix-col-order-${order}`]: order,
    [`rubix-col-offset-${offset}`]: offset,
    [`rubix-col-push-${push}`]: push,
    [`rubix-col-pull-${pull}`]: pull,
    [className]: !!className,
  }, sizeClassObj));

  return <div {...others} className={classes}>{children}</div>;
};

Col.propTypes = {
  span: stringOrNumber,
  order: stringOrNumber,
  offset: stringOrNumber,
  push: stringOrNumber,
  pull: stringOrNumber,
  className: PropTypes.string,
  children: PropTypes.node,
  xs: objectOrNumber,
  sm: objectOrNumber,
  md: objectOrNumber,
  lg: objectOrNumber,
};

export default Col;
