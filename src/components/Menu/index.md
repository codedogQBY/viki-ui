---
title: Menu
nav:
  title: Components
  path: /components
---

# Menu 导航菜单

为页面和功能提供导航的菜单列表。

# 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

# 代码演示

## 顶部导航

```tsx
/**
 * title: 顶部导航
 * desc: 水平的顶部导航菜单。
 */
import React from 'react';
import { Menu } from 'viki-ui';
const { MenuItem, SubMenu } = Menu;

const MenuExample = () => {
  return (
    <Menu
      defaultIndex="0"
      defaultOpenSubMenus={[]}
      onSelect={function noRefCheck(index) {
        console.log(index);
      }}
    >
      <MenuItem>cool link</MenuItem>
      <MenuItem disabled>cool link 2</MenuItem>
      <SubMenu title="点击下拉选项">
        <MenuItem>下拉选项一</MenuItem>
        <MenuItem>下拉选项二</MenuItem>
      </SubMenu>
      <MenuItem>cool link 3</MenuItem>
    </Menu>
  );
};
export default MenuExample;
```

## 内嵌菜单

```tsx
/**
 * title: 内嵌菜单
 * desc: 垂直菜单，子菜单内嵌在菜单区域。
 */
import React from 'react';
import { Menu } from 'viki-ui';
const { MenuItem, SubMenu } = Menu;

const MenuExample = () => {
  const handleSelect = index => {
    console.log(index);
  };
  return (
    <Menu
      mode="vertical"
      onSelect={handleSelect}
      defaultIndex="1"
      style={{ width: 256 }}
      defaultOpenSubMenus={['sub1']}
    >
      <SubMenu index="sub1" title="Navigation One">
        <MenuItem index="1">Option 1</MenuItem>
        <MenuItem index="2">Option 2</MenuItem>
      </SubMenu>
      <SubMenu index="sub2" title="Navigation Two">
        <MenuItem index="3">Option 3</MenuItem>
        <MenuItem index="4">Option 4</MenuItem>
      </SubMenu>
      <SubMenu index="sub3" title="Navigation Three">
        <MenuItem index="5">Option 5</MenuItem>
        <MenuItem index="6">Option 6</MenuItem>
        <SubMenu index="sub3" title="Submenu">
          <MenuItem index="7">Option 7</MenuItem>
          <MenuItem index="8">Option 8</MenuItem>
        </SubMenu>
      </SubMenu>
      <SubMenu index="sub4" title="Navigation Four">
        <MenuItem index="9">Option 9</MenuItem>
        <MenuItem index="10">Option 10</MenuItem>
        <MenuItem index="11">Option 11</MenuItem>
        <MenuItem index="12">Option 12</MenuItem>
      </SubMenu>
    </Menu>
  );
};
export default MenuExample;
```

<API  src='./index.tsx'></API>
