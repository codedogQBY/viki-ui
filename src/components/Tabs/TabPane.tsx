import React from 'react';

type TabType = React.ReactNode;

export interface TabPaneProps {
  /**
   * tab的内容，可以是react结点
   */
  tab: TabType;
  /**
   * key值
   */
  key?: string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const TabPane: React.FC<TabPaneProps> = props => {
  return <></>;
};

TabPane.displayName = 'TabPane';
export default TabPane;
