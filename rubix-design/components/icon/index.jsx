import React from 'react';

export default props => {
  let { type, className = '', ...other } = props;
  className += ` rubixicon rubixicon-${type}`;
  return <i className={className} {...other} />;
};
