import React, { FC, useState, createContext } from 'react';
import classNames from 'classnames';
import Icon from '../Icon/Icon';
import Input from '../Input/Input';
import Transition from '../Transition/Transition';
import useClickOutsize from '../../hooks/useClickOutside';
import Option, { SelectOptionProps } from './Option';
export interface SelectProps {
  /**
   * 默认值
   */
  defaultValue?: string;
  /**
   * 提示文字内容
   */
  placeholder?: string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 选择框大小
   */
  size?: 'lg' | 'sm';
  /**
   * 默认是否展开下拉菜单
   */

  defaultOpen?: boolean;
  /**
   * 是否多选
   */
  multiple?: boolean;
  /**
   * 选中改变触发该回调
   */
  onChange?: (selectedValue: string, selectedValues: string[]) => void;
  /**
   * 显示隐藏下拉框触发该回调
   */
  onVisibleChange?: (visible: boolean) => void;
  className?: 'string';
  style?: React.CSSProperties;
  children?: React.ReactElement;
}

export interface ISelectContext {
  onChange?: (selectedValue: string, selectedValues: string[]) => void;
}
export const SelectContext = createContext<ISelectContext>({});
const Select: FC<SelectProps> & {
  Option: React.FC<SelectOptionProps>;
} = props => {
  const {
    defaultValue,
    placeholder,
    disabled,
    size,
    defaultOpen,
    multiple,
    onChange,
    onVisibleChange,
    className,
    style,
    children,
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen || false);
  const classes = classNames('viki-select', className, {});
  const [selectValue, setSelectValue] = useState<string>(
    defaultValue as string,
  );
  const passedContext: ISelectContext = {
    onChange,
  };
  const renderChildren = () => {
    return React.Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<
        SelectOptionProps
      >;
      const { displayName } = childElement.type;
      // child只允许是Option组件
      if (displayName === 'Option') {
        return React.cloneElement(childElement);
      } else {
        console.error(
          'Waring: Select has a child which is not a Option component',
        );
      }
    });
  };
  return (
    <div className={classes} style={style}>
      <Input
        disabled={disabled}
        sufIcon="angle-down"
        value={selectValue}
        size={size}
        readOnly
        onFocus={() => setIsOpen(!isOpen)}
        placeholder={placeholder}
      />
      <ul
        style={{ display: isOpen ? 'inline-block' : 'none' }}
        className="viki-select-dropdown"
      >
        <SelectContext.Provider value={passedContext}>
          {renderChildren()}
        </SelectContext.Provider>
      </ul>
    </div>
  );
};

Select.Option = Option;

export default Select;
