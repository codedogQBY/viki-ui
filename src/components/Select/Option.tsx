import React, { FC, useContext } from 'react';
import classNames from 'classnames';
import { SelectContext } from './Select';
import Icon from '../Icon/Icon';

export interface SelectOptionProps {
  /**
   * 选中元素得下标，下标唯一
   */
  index: string;
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
  getOption: (vaule: string, index: string) => void;
  style?: React.CSSProperties;
}

const Option: FC<SelectOptionProps> = props => {
  const {
    value,
    index,
    disabled,
    className,
    children,
    style,
    getOption,
  } = props;
  const context = useContext(SelectContext);
  const handleClick = () => {
    context.onChange && context.onChange(value, [value]);
    getOption(value, index);
  };
  const classes = classNames('viki-select-options', className, {
    'viki-select-options-is-disabled': disabled,
    'viki-select-options-is-select': index === context.selectIndex,
    'viki-select-options-is-high-linght': index === context.highLinghtIndex,
  });
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children || value}
      {index === context.selectIndex && <Icon size="sm" icon="check" />}
    </li>
  );
};

Option.displayName = 'Option';

export default Option;
