---
category: Components
subtitle: Tabs
type: The data show
title: Tabs
cols: 1
---

# Tabs

TAB to switch components.

# When to use

Provide level area will receive large content and show, maintain a clean and tidy interface.

# Code demo

## basic

```tsx
/**
 * title: basic
 * desc: Selected by default the first item
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

## disable

```tsx
/**
 * title: disable
 * desc: Disable one
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

## location

```tsx
/**
 * title: location
 * desc: Control the location of the navigation bar
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
      <Button onClick={() => changePosition('start')}>Left</Button>
      <Button onClick={() => changePosition('center')}>Middle</Button>
      <Button onClick={() => changePosition('end')}>Right</Button>
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

## The direction of

```tsx
/**
 * title: The direction of
 * desc: Control the direction of the navigation bar at the top
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
        <h4>Location button</h4>
        <Button onClick={() => changePosition('start')}>Left</Button>
        <Button onClick={() => changePosition('center')}>Middle</Button>
        <Button onClick={() => changePosition('end')}>Right</Button>
      </div>
      <div>
        <h4>The direction button</h4>

        <Button onClick={() => changeDirection('top')}>top</Button>
        <Button onClick={() => changeDirection('buttom')}>bottom</Button>
        <Button onClick={() => changeDirection('left')}>left</Button>
        <Button onClick={() => changeDirection('right')}>right</Button>
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

## The size of the

```tsx
/**
 * title: The size of the
 * desc: Large TAB in the header area, the trumpet in the pop-up box with narrow container.
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
      <Button onClick={() => changeSize('large')}>Large</Button>
      <Button onClick={() => changeSize('defalut')}>Defalut</Button>
      <Button onClick={() => changeSize('small')}>Small</Button>
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

## Card TAB.

```tsx
/**
 * title: Card TAB.
 * desc: Another kind of style of the TAB, do not provide the corresponding vertical style..
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
