import React, { FC, useContext } from 'react';
import classNames from 'classnames';
import { SelectContext } from './Select';
import Icon from '../icon/Icon';

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
  delData: (index: string) => void;
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
    delData,
    getOption,
  } = props;
  const context = useContext(SelectContext);
  const handleClick = () => {
    if (disabled) return;
    if (context.onChange) {
      if (context.multiple) {
        context.onChange(value, [...context.selectValues!, value]);
      } else {
        context.onChange(value, [value]);
      }
    }
    if (context.multiple && context.selectIndexArr?.includes(index)) {
      delData(index);
    } else {
      getOption(value, index);
    }
  };
  const selectFlag = context.multiple
    ? context.selectIndexArr?.includes(index)
    : index === context.selectIndex;
  const classes = classNames('viki-select-options', className, {
    'viki-select-options-is-disabled': disabled,
    'viki-select-options-is-select': selectFlag,
    'viki-select-options-is-high-linght':
      !disabled && index === context.highlightIndex,
  });
  return (
    <li className={classes} style={style ?? {}} onClick={handleClick}>
      <span className="viki-option-content">{children || value}</span>
      {selectFlag && <Icon size="sm" icon="check" />}
    </li>
  );
};

Option.displayName = 'Option';
Option.defaultProps = {
  disabled: false,
};

export default Option;
