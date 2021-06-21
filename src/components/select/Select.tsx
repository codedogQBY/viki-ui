import React, {
  FC,
  useState,
  createContext,
  useRef,
  useEffect,
  KeyboardEvent,
} from 'react';
import classNames from 'classnames';
import Input from '../input/Input';
import Transition from '../transition/Transition';
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

function scrControl(t: boolean) {
  function bodyScroll(event: Event) {
    event.preventDefault();
  }
  if (t === false) {
    //禁止滚动
    document.body.addEventListener('scroll', bodyScroll, false);
  } else if (t === true) {
    //开启滚动
    document.body.removeEventListener('scroll', bodyScroll, false);
  }
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
    onChange: onChange!,
  };
  // 更新数据
  const updateData = (value: string, index: string): void => {
    if (multiple && selectIndexArr.includes(index)) return;

    if (multiple) {
      setSelectIndexArr(pre => {
        return [...pre, index];
      });
      setSelectValues(pre => {
        return [...pre, value];
      });
    } else {
      setSelectIndex(index);
      setSelectValue(value);
      setIsOpen(false);
    }
  };
  // 获取Options的value
  const getOption = (value: string, index: string) => {
    updateData(value, index);
  };
  //多选下清除数据
  const delData = (index: string) => {
    const i = selectIndexArr.indexOf(index);
    const newArr = [...selectIndexArr];
    const newVlaues = [...selectValues];
    newArr.splice(i, 1);
    newVlaues.splice(i, 1);
    setSelectIndexArr(newArr);
    setSelectValues(newVlaues);
  };
  // 键盘事件
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
    e.preventDefault();
    switch (e.keyCode) {
      case 13: {
        // 按下回车键更新value值

        if (selectIndexArr.includes(highlightIndex)) {
          delData(highlightIndex);
        } else {
          let numIndex = parseInt(highlightIndex);
          updateData(selectChildren[numIndex]?.props?.value, highlightIndex);
          !multiple && setIsOpen(false);
        }
        break;
      }
      case 38: {
        let numIndex = parseInt(highlightIndex) - 1;

        if (parseInt(highlightIndex) <= 0) break;
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
        if (parseInt(highlightIndex) >= len - 1) break;
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
          delData,
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
    <div className={classes} style={style ?? {}} ref={selectRef}>
      <Input
        disabled={Boolean(disabled)}
        sufIcon="angle-down"
        value={multiple ? '' : selectValue}
        size={size!}
        readOnly
        onClick={() => setIsOpen(!isOpen)}
        placeholder={placeholder!}
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
