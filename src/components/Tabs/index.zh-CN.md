---
category: Components
subtitle: 标签页
type: 数据展示
title: Tabs
cols: 1
---

# Tabs 标签页

选项卡切换组件。

# 何时使用

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

# 代码演示

## 基本

```tsx
/**
 * title: 基本
 * desc: 默认选中第一项
 */
import React from 'react';
import { Tabs } from 'viki-ui';
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const TabsExample = () => {
  return (
    <Tabs defaultKey="1" onChange={callback}>
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
};
export default TabsExample;
```

## 禁用

```tsx
/**
 * title: 禁用
 * desc: 禁用某一项
 */
import React from 'react';
import { Tabs } from 'viki-ui';
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const TabsExample = () => {
  return (
    <Tabs defaultKey="1" onChange={callback}>
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane disabled tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
};
export default TabsExample;
```

## 位置

```tsx
/**
 * title: 位置
 * desc: 控制导航栏的位置
 */
import React, { useState } from 'react';
import { Tabs } from 'viki-ui';
import { Button } from 'viki-ui';
const { TabPane } = Tabs;

const TabsExample = () => {
  const [position, setPosition] = useState('start');
  const changePosition = position => {
    setPosition(position);
  };

  return (
    <>
      <Button onClick={() => changePosition('start')}>偏左</Button>
      <Button onClick={() => changePosition('center')}>居中</Button>
      <Button onClick={() => changePosition('end')}>偏右</Button>
      <Tabs defaultKey="1" tabsPosition={position}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane disabled tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </>
  );
};
export default TabsExample;
```

## 方向

```tsx
/**
 * title: 方向
 * desc: 控制顶部导航栏的方向
 */
import React, { useState } from 'react';
import { Tabs } from 'viki-ui';
import { Button } from 'viki-ui';
const { TabPane } = Tabs;

const TabsExample = () => {
  const [position, setPosition] = useState('start');
  const [direction, setDirection] = useState('top');
  const changePosition = position => {
    setPosition(position);
  };
  const changeDirection = direction => {
    setDirection(direction);
  };

  return (
    <>
      <div>
        <h4>位置按钮</h4>
        <Button onClick={() => changePosition('start')}>偏左</Button>
        <Button onClick={() => changePosition('center')}>居中</Button>
        <Button onClick={() => changePosition('end')}>偏右</Button>
      </div>
      <div>
        <h4>方向按钮</h4>

        <Button onClick={() => changeDirection('top')}>顶部</Button>
        <Button onClick={() => changeDirection('buttom')}>底部</Button>
        <Button onClick={() => changeDirection('left')}>左边</Button>
        <Button onClick={() => changeDirection('right')}>右边</Button>
      </div>
      <Tabs defaultKey="1" tabsPosition={position} tabsDirection={direction}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane disabled tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </>
  );
};
export default TabsExample;
```

## 大小

```tsx
/**
 * title: 大小
 * desc: 大号页签用在页头区域，小号用在弹出框等较狭窄的容器内。
 */
import React, { useState } from 'react';
import { Tabs } from 'viki-ui';
import { Button } from 'viki-ui';
const { TabPane } = Tabs;

const TabsExample = () => {
  const [size, setSize] = useState('defalut');
  const changeSize = size => {
    setSize(size);
  };

  return (
    <>
      <Button onClick={() => changeSize('large')}>大</Button>
      <Button onClick={() => changeSize('defalut')}>中</Button>
      <Button onClick={() => changeSize('small')}>小</Button>
      <Tabs defaultKey="1" size={size}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </>
  );
};
export default TabsExample;
```

## 卡片式页签

```tsx
/**
 * title: 卡片式页签
 * desc: 另一种样式的页签，不提供对应的垂直样式。
 */
import React, { useState } from 'react';
import { Tabs } from 'viki-ui';
const { TabPane } = Tabs;

const TabsExample = () => {
  return (
    <>
      <Tabs defaultKey="1" type="card">
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </>
  );
};
export default TabsExample;
```

<API src="./index.tsx"></API>
