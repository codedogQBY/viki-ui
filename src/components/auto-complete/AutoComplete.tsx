import React, {
  FC,
  useState,
  ChangeEvent,
  KeyboardEvent,
  ReactElement,
  useEffect,
  useRef,
} from 'react';
import Input, { InputProps } from '../input/Input';
import classNames from 'classnames';
import Icon from '../icon/Icon';
import useDebounce from '../../hooks/useDebounce';
import Transition from '../transition/Transition';
import useClickOutsize from '../../hooks/useClickOutside';
interface DataSourceObject {
  value: string;
}

export type DataSourceType<T = {}> = T & DataSourceObject;

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  /**
   * 建议数据
   */
  fetchSuggestion: (
    keyword: string,
  ) => DataSourceType[] | Promise<DataSourceType[]>;
  /**
   * 选择事件
   */
  onSelect?: (item: DataSourceType) => void;
  /**
   * 自定义模板
   */
  renderOption?: (item: DataSourceType) => ReactElement;
}

export const AutoComplete: FC<AutoCompleteProps> = props => {
  const {
    fetchSuggestion,
    onSelect,
    value,
    renderOption,
    style,
    ...restprops
  } = props;
  const [inputValue, setInputValue] = useState(value as string);
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const debounceValue = useDebounce(inputValue);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  // 选择后不再触发搜索功能
  const triggerSearch = useRef(false);
  const componentRef = useRef<HTMLDivElement>(null);
  useClickOutsize(componentRef, () => {
    setSuggestions([]);
  });
  useEffect(() => {
    if (debounceValue && triggerSearch.current) {
      const result = fetchSuggestion(debounceValue);
      if (result instanceof Promise) {
        setSuggestions([]);
        setLoading(true);
        result.then(data => {
          setSuggestions(data);
          setLoading(false);
          // 有数据就展示
          if (data.length > 0) {
            setShowDropdown(true);
          }
        });
      } else {
        setSuggestions(result);
        if (result.length > 0) {
          setShowDropdown(true);
        }
      }
    } else {
      setShowDropdown(false);
      setSuggestions([]);
    }
    setHighlightIndex(-1);
  }, [debounceValue]);
  // 输入框的值change触发函数
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
    triggerSearch.current = true;
  };
  const highlight = (index: number) => {
    if (index < 0) index = 0;
    if (index >= suggestions.length) {
      index = suggestions.length - 1;
    }
    setHighlightIndex(index);
  };
  // 键盘事件
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.keyCode) {
      case 13:
        if (suggestions[highlightIndex]) {
          handleSelect(suggestions[highlightIndex]);
        }
        break;
      case 38:
        highlight(highlightIndex - 1);
        break;
      case 40:
        highlight(highlightIndex + 1);
        break;
      case 27:
        setShowDropdown(false);
        break;
      default:
        break;
    }
  };
  // 选择item
  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value);
    setShowDropdown(false);
    if (onSelect) {
      onSelect(item);
    }
    triggerSearch.current = false;
  };
  // 自定义模板
  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value;
  };
  const generateDropdown = () => {
    return (
      <Transition
        in={showDropdown || loading}
        animation="zoom-in-top"
        timeout={300}
        onExited={() => {
          setSuggestions([]);
        }}
      >
        <ul className="viki-suggestion-list">
          {loading && (
            <div className="suggstions-loading-icon">
              <Icon icon="spinner" spin />
            </div>
          )}
          {suggestions.map((item, index) => {
            const classneme = classNames('suggestion-item', {
              'item-higthLighted': index === highlightIndex,
            });
            return (
              <li
                key={index}
                className={classneme}
                onClick={() => handleSelect(item)}
              >
                {renderTemplate(item)}
              </li>
            );
          })}
        </ul>
      </Transition>
    );
  };
  return (
    <div className="viki-auto-complete" style={style ?? {}} ref={componentRef}>
      <Input
        value={inputValue}
        {...restprops}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {suggestions.length > 0 && generateDropdown()}
    </div>
  );
};
AutoComplete.defaultProps = {
  value: '',
};
export default AutoComplete;
