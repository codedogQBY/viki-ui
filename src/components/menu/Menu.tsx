import React, { useState, createContext } from 'react';
import classNames from 'classnames';
import { MenuItemProps } from './MenuItem';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';

type MenuMode = 'horizontal' | 'vertical'; // 水平或者竖直
type SelectCallback = (selectedIndex: string) => void;
/**
 * Grid properties.
 */
export interface MenuProps {
  /**
   * 默认索引
   */
  defaultIndex?: string;
  /**
   * 垂直或者水平
   */
  mode?: MenuMode;
  /**
   * 默认展开哪一项
   */
  defaultOpenSubMenus?: string[];
  /**
   * 选择MenuItem后的回调
   */
  onSelect?: SelectCallback;
  className?: string;
  style?: React.CSSProperties;
}

interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({ index: '0' });

/**
 * Form Grid.
 */
const Menu: React.FC<MenuProps> & {
  MenuItem: React.FC;
  SubMenu: React.FC;
} = props => {
  const {
    className,
    mode,
    style,
    children,
    defaultIndex,
    onSelect,
    defaultOpenSubMenus,
  } = props;
  const [currentActive, setCurrentActive] = useState(defaultIndex);
  const classes = classNames('viki-menu', className, {
    'viki-menu-vertical': mode === 'vertical',
    'viki-menu-horizontal': mode !== 'vertical',
  });

  const handleClick = (index: string) => {
    setCurrentActive(index);
    if (onSelect && currentActive !== index) {
      // onselect存在并且当前选中不为点击，防止重复触发
      onSelect(index);
    }
  };

  const renderChildren = () => {
    // 使用React.Children.map来进行遍历
    return React.Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<
        MenuItemProps
      >;
      const index = childElement.props.index ? childElement.props.index : i;
      const { displayName } = childElement.type;
      // child只允许是MenuItem组件
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, { index: index.toString() });
      } else {
        console.error(
          'Waring: Menu has a child which is not a MenuItem component',
        );
      }
    });
  };

  const passedContext: IMenuContext = {
    index: currentActive as string,
    onSelect: handleClick,
    mode: mode!,
    defaultOpenSubMenus: defaultOpenSubMenus!,
  };
  return (
    <ul className={classes} style={style ?? {}} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: [],
};

Menu.MenuItem = MenuItem;
Menu.SubMenu = SubMenu;

export default Menu;
