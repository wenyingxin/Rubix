import * as React from 'react';

export interface IconProps {
  type: string;
  className?: string;
  title?: string;
  onClick?: (e) => void;
}

export default (props: IconProps) => {
  const { type, className = '' } = props;
  return <i {...props} className={`${className} rubixicon rubixicon-${type}`.trim()} />;
};
