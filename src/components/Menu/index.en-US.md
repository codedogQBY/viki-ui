---
category: Components
cols: 1
type: 导航
title: Menu
---

# Menu

Provide navigation menu list page and function.

# When to use

Navigation menu is the soul of a web site, users rely on navigation on every page jump.General component is at the top of the navigation and side navigation and top navigation provides the category and function of overall importance, the side navigation provides multi-level structure to receive and arrange site architecture.

# Code demo

## At the top of the navigation

```tsx
/**
 * title: At the top of the navigation
 * desc: Level at the top of the navigation menu.
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
      <SubMenu title="Click the drop-down options">
        <MenuItem>The drop-down options 1</MenuItem>
        <MenuItem>The drop-down option 2</MenuItem>
      </SubMenu>
      <MenuItem>cool link 3</MenuItem>
    </Menu>
  );
};
export default MenuExample;
```

## The built-in menu

```tsx
/**
 * title: The built-in menu
 * desc: Vertical menu, submenu are embedded in the menu area.
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

<API  src='./Menu.tsx'></API>
