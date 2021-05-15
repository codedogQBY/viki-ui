import React, { useState, FunctionComponentElement, useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './Menu';
import { MenuItemProps } from './MenuItem';
import Icon from '../icon/Icon';
import Transition from '../transition/Transition';

export interface SubMenuProps {
  /**
   * SubMenu的索引
   */
  index?: string;
  /**
   * SubMenu的标题
   */
  title?: string;
  /**
   * 是否禁用
   */
  disabled?: Boolean;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = props => {
  const { index, title, children, className, disabled } = props;
  const context = useContext(MenuContext);
  const openedSubMenus = context.defaultOpenSubMenus as string[];
  // 是否为选中目录
  const isSelect = (curindex: string, index: string) => {
    const len = index.length;
    return curindex.substr(0, len) === index;
  };
  const isOpend =
    index && context.mode === 'vertical'
      ? openedSubMenus.includes(index)
      : false;
  const [menuOpen, setMenuOpen] = useState(isOpend);
  const classes = classNames('viki-menu-item viki-submenu-item', className, {
    'is-select': isSelect(context.index, index as string),
    'is-disabled': disabled,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical',
  });
  const renderChildren = () => {
    const subMenuClasses = classNames('viki-submenu', {
      'menu-opened': menuOpen,
    });
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      const childIndex = childElement.props.index
        ? childElement.props.index
        : i;
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: `${index}-${childIndex}`,
        });
      } else {
        console.error(
          'Waring: Menu has a child which is not a MenuItem component',
        );
      }
    });
    return (
      <Transition in={menuOpen} timeout={300} animation="zoom-in-top">
        <ul className={subMenuClasses}>{childrenComponent}</ul>
      </Transition>
    );
  };
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };
  let timeout: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timeout);
    e.preventDefault();
    timeout = setTimeout(() => {
      setMenuOpen(toggle);
    }, 50);
  };

  const clickEvents =
    context.mode === 'vertical'
      ? {
          onClick: handleClick,
        }
      : {};

  const hoverEvents =
    context.mode !== 'vertical'
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : {};
  return (
    <li className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
        <Icon icon="chevron-down" size="xs" className="arrow-icon" />
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = 'SubMenu';
export default SubMenu;
