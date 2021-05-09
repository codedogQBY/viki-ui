import React, {
  FC,
  useState,
  createContext,
  useRef,
  useEffect,
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
  defaultValue?: string | string[];
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
  multiple?: boolean;
  selectIndexArr?: string[];
  selectValues?: string[];
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
    multiple = false,
    onChange,
    onVisibleChange,
    className,
    style,
    children,
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen || false);
  const classes = classNames('viki-select', className, {
    [`viki-select-${size}`]: size,
    [`viki-select-is-open`]: isOpen,
  });
  // 多选下标
  const [selectIndexArr, setSelectIndexArr] = useState<string[]>([]);
  // 多选的值
  const [selectValues, setSelectValues] = useState<string[]>([]);
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
  // 获取children数组
  const selectChildren = React.Children.toArray(
    children!,
  ) as React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
  const len = selectChildren.length;

  useEffect(() => {
    let numIndex = parseInt(highlightIndex);
    while (numIndex < len - 1 && selectChildren[numIndex].props.disabled) {
      numIndex++;
    }
    setHighlightIndex(numIndex.toString());
  }, []);

  const passedContext: ISelectContext = {
    selectIndexArr,
    multiple,
    selectValues,
    highlightIndex,
    selectIndex,
    onChange,
  };
  // 更新数据
  const updateData = (value: string, index: string): void => {
    if (multiple && selectIndexArr.includes(index)) return;
    !multiple && setSelectIndex(index);
    !multiple && setSelectValue(value);
    multiple &&
      setSelectIndexArr(pre => {
        return [...pre, index];
      });
    multiple &&
      setSelectValues(pre => {
        return [...pre, value];
      });
  };
  // 获取Options的value
  const getOption = (value: string, index: string) => {
    updateData(value, index);
  };
  //多选下清除数据
  const delData = (index: string) => {
    const i = selectIndexArr.includes(index);
  };
  // 键盘事件
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.keyCode) {
      case 13: {
        // 按下回车键更新value值
        let numIndex = parseInt(highlightIndex);
        if (!selectChildren[numIndex].props.disabled) {
          updateData(selectChildren[numIndex]?.props?.value, highlightIndex);
          setIsOpen(false);
        }
        break;
      }
      case 38: {
        let numIndex = parseInt(highlightIndex) - 1;
        if (numIndex <= 0) break;
        while (numIndex > 0 && selectChildren[numIndex].props.disabled) {
          numIndex--;
        }
        if (numIndex < 0) {
          setHighlightIndex('0');
        } else {
          setHighlightIndex(numIndex.toString());
        }
        break;
      }
      case 40: {
        let numIndex = parseInt(highlightIndex) + 1;
        if (numIndex >= len - 1) break;
        while (numIndex < len - 1 && selectChildren[numIndex].props.disabled) {
          numIndex++;
        }
        if (numIndex > len - 1) {
          setHighlightIndex((len - 1).toString());
        } else {
          setHighlightIndex(numIndex.toString());
        }
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
        value={multiple ? '' : selectValue}
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
