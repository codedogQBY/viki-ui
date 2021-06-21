import React, { useState } from 'react';
import classNames from 'classnames';
import { TabPaneProps } from './TabPane';
import TabPane from './TabPane';

type ChangeCallback = (selectedKey: string) => void;
type TabsType = 'line' | 'card';
type TabsSize = 'defalut' | 'large' | 'small';
type TabsPosition = 'start' | 'center' | 'end';
type TabsDirection = 'top' | 'buttom' | 'left' | 'right'; // tab卡位于哪里

export interface TabsProps {
  /**
   * 默认的key值
   */
  defaultKey?: string;
  /**
   * tabs组件的类型，默认是线性tabs
   */
  type?: TabsType;
  /**
   * tabs组件的尺寸，只会影响tab栏，不会影响tab内容
   */
  size?: TabsSize;
  /**
   * tabs组件的位置，主要是在轴线的位置
   */
  tabsPosition?: TabsPosition;
  /**
   * tabs组件的方向，tab轴线的方向
   */
  tabsDirection?: TabsDirection;
  /**
   * 改变tab后触发的回调函数
   */
  onChange?: ChangeCallback;
  className?: string;
  style?: React.CSSProperties;
}

const Tabs: React.FC<TabsProps> & {
  TabPane: React.FC<TabPaneProps>;
} = props => {
  const {
    defaultKey,
    className,
    style,
    type,
    size,
    tabsPosition,
    tabsDirection,
    onChange,
    children,
  } = props;
  const [activeKey, setActiveKey] = useState(defaultKey);
  const classes = classNames('viki-tabs', className, {
    [`viki-tabs-${size}`]: size,
    [`viki-tabs-${tabsPosition}`]: tabsPosition,
    [`viki-tabs-${type}`]: type,
    [`viki-tabs-${tabsDirection}`]: tabsDirection,
  });

  const handleClick = (key: string) => {
    setActiveKey(key);
    if (onChange) {
      onChange(key);
    }
  };

  // 渲染子节点
  const renderChildren = () => {
    type TabsNavElemnteType = {
      tab: React.ReactNode | HTMLElement;
      key: React.Key;
      disabled?: boolean;
      className?: string;
      style?: React.CSSProperties;
    };
    type TabsContentElemnteType = {
      content: React.ReactNode;
      key: React.Key;
    };
    const tabsNavList: TabsNavElemnteType[] = [];
    const tabsContent: TabsContentElemnteType[] = [];
    // 给所有的tabpan加一个key值
    const tabpanes = React.Children.map(children, child => {
      // 函数式组件并且函数props
      const childElement = child as React.FunctionComponentElement<
        React.PropsWithChildren<TabPaneProps> & { index: string }
      >;
      const { displayName } = childElement.type;
      if (displayName === 'TabPane') {
        const { style, className, disabled } = childElement.props;
        const key = childElement.key as string;
        return React.cloneElement(childElement, {
          index: key,
          style,
          className,
          disabled,
        });
      } else {
        console.error(
          'Waring: Tabs has a child which is not a TabPane component',
        );
      }
    });

    if (tabpanes) {
      tabpanes.forEach((com, i) => {
        const { children, tab, style, disabled, className, index } = com.props;

        tabsNavList.push({
          tab,
          key: index || i.toString(),
          style: style!,
          disabled: Boolean(disabled),
          className: className!,
        });
        tabsContent.push({ content: children, key: index || i.toString() });
      });

      return (
        <>
          <div className="viki-tabs-nav">
            <div className="viki-tabs-nav-list">
              {tabsNavList.map(item => {
                const { tab, key, style, disabled, className } = item;
                const classes = classNames('viki-tabs-tab', className, {
                  'viki-tab-disabled': disabled,
                  'viki-tab-active': activeKey === key,
                });
                const tabClick = () => {
                  if (!disabled && key !== activeKey) {
                    handleClick(key as string);
                  }
                };
                return (
                  <div
                    key={key}
                    style={style ?? {}}
                    className={classes}
                    onClick={tabClick}
                  >
                    {tab}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="viki-tabs-content-holder">
            {tabsContent.map(item => {
              const { content, key } = item;
              const classes = classNames('viki-tabs-tabpane', {
                'viki-tabs-tabpane-active': activeKey === key,
              });
              return (
                <div key={key} className={classes}>
                  {content}
                </div>
              );
            })}
          </div>
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div className={classes} style={style ?? {}}>
      {renderChildren()}
    </div>
  );
};

Tabs.defaultProps = {
  defaultKey: '0',
  type: 'line',
  tabsPosition: 'start',
  tabsDirection: 'top',
  size: 'defalut',
};

Tabs.TabPane = TabPane;

export default Tabs;
