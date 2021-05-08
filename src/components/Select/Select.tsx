import React, {
  FC,
  useState,
  createContext,
  useRef,
  KeyboardEvent,
} from 'react';
import classNames from 'classnames';
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
  onChange?: (selectedValue?: string, selectedValues?: string[]) => void;
  /**
   * 显示隐藏下拉框触发该回调
   */
  onVisibleChange?: (visible?: boolean) => void;
  className?: 'string';
  style?: React.CSSProperties;
  children?: React.ReactElement;
}

export interface ISelectContext {
  highlightIndex?: string;
  selectIndex?: string;
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
  const classes = classNames('viki-select', className, {
    [`viki-select-${size}`]: size,
  });
  // 选中的下标
  const [selectIndex, setSelectIndex] = useState<string>('');
  // 高亮的下标
  const [highlightIndex, setHighlightIndex] = useState<string>('0');
  // 选中的值
  const [selectValue, setSelectValue] = useState<string>(
    (defaultValue as string) || '',
  );
  const selectRef = useRef<HTMLInputElement>(null);
  useClickOutsize(selectRef, () => {
    setIsOpen(false);
    onVisibleChange && onVisibleChange(false);
  });
  const passedContext: ISelectContext = {
    highlightIndex,
    selectIndex,
    onChange,
  };
  // 获取Options的value
  const getOption = (value: string, index: string) => {
    setSelectIndex(index);
    setSelectValue(value);
  };
  const highlight = (index: string) => {
    const numIndex = parseInt(index);
    if (numIndex < 0) index = '0';
    if (numIndex >= React.Children.count(children)) {
      index = (React.Children.count(children) - 1).toString();
    }
    setHighlightIndex(index);
  };

  // 键盘事件
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.keyCode) {
      case 13:
        setSelectIndex(highlightIndex);
        setIsOpen(false);
        // 按下回车键更新value值
        React.Children.forEach(
          children!,
          (
            child: React.ReactElement<
              any,
              string | React.JSXElementConstructor<any>
            >,
            i,
          ) => {
            if (highlightIndex === i.toString()) {
              setSelectValue(child?.props?.value);
              return;
            }
          },
        );
        break;
      case 38: {
        const numIndex = parseInt(highlightIndex) - 1;
        highlight(numIndex.toString());
        break;
      }
      case 40: {
        const numIndex = parseInt(highlightIndex) + 1;
        highlight(numIndex.toString());
        break;
      }
      case 27:
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<
        SelectOptionProps
      >;
      const { displayName } = childElement.type;
      // child只允许是Option组件
      if (displayName === 'Option') {
        return React.cloneElement(childElement, {
          getOption,
          index: i.toString(),
        });
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
        onClick={() => setIsOpen(!isOpen)}
        placeholder={placeholder}
        InputRef={selectRef}
        onKeyDown={handleKeyDown}
      />
      <Transition in={isOpen} animation="zoom-in-top" timeout={300}>
        <ul className="viki-select-dropdown">
          <SelectContext.Provider value={passedContext}>
            {renderChildren()}
          </SelectContext.Provider>
        </ul>
      </Transition>
    </div>
  );
};

Select.Option = Option;

export default Select;
