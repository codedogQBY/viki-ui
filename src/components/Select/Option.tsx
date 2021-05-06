import React, { FC } from 'react';
import classNames from 'classnames';

export interface SelectOptionProps {
  /**
   * 选中的值
   */
  value?: string | number;
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
const handleClick = () => {};
const SelectOption: FC<SelectOptionProps> = props => {
  const { value, disabled, className, children, style } = props;
  const classes = classNames('viki-select-options', className, {
    'viki-select-is-disabled': disabled,
  });
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children || value}
    </li>
  );
};
