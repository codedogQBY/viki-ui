import React, { FC, useContext } from 'react';
import classNames from 'classnames';
import { SelectContext } from './Select';

export interface SelectOptionProps {
  /**
   * 选中的值
   */
  value: string;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 类名
   */
  className?: string;
  /**
   * children 默认展示value的值
   */
  children?: React.ReactElement;
  style?: React.CSSProperties;
}

const Option: FC<SelectOptionProps> = props => {
  const { value, disabled, className, children, style } = props;
  const context = useContext(SelectContext);
  const handleClick = () => {
    context.onChange && context.onChange(value, [value]);
  };
  const classes = classNames('viki-select-options', className, {
    'viki-select-is-disabled': disabled,
  });
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children || value}
    </li>
  );
};

Option.displayName = 'Option';

export default Option;
