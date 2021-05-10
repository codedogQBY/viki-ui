---
category: Components
cols: 1
type: 数据展示
title: Progress
subtitle: 进度条
---

# Progress 进度条

展示操作的当前进度。

# 何时使用

在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

- 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；

- 当需要显示一个操作完成的百分比时

# 代码演示

## 进度条

```tsx
/**
 * title: 进度条
 * desc: 标准的进度条。
 */
import React from 'react';
import { Progress } from 'viki-ui';

const ProgressExample = () => {
  return (
    <>
      <Progress strokeHidth={15} percent={30} style={{ width: '320px' }} />
      <Progress percent={40} theme="secondary" style={{ width: '320px' }} />
      <Progress percent={50} theme="success" style={{ width: '320px' }} />
      <Progress percent={60} theme="info" style={{ width: '320px' }} />
      <Progress percent={70} theme="warning" style={{ width: '320px' }} />
      <Progress percent={80} theme="error" style={{ width: '320px' }} />
      <Progress percent={100} theme="dark" style={{ width: '320px' }} />
    </>
  );
};
export default ProgressExample;
```

## 文字外显

```tsx
/**
 * title: 文字外显
 * desc: 文字在进度条外部显示。
 */
import React from 'react';
import { Progress } from 'viki-ui';

const ProgressExample = () => {
  return (
    <>
      <Progress textOutside percent={30} style={{ width: '320px' }} />
      <Progress
        textOutside
        percent={50}
        theme="success"
        style={{ width: '320px' }}
      />
      <Progress
        textOutside
        percent={60}
        theme="info"
        style={{ width: '320px' }}
      />
      <Progress
        textOutside
        percent={70}
        theme="warning"
        style={{ width: '320px' }}
      />
    </>
  );
};
export default ProgressExample;
```

## 隐藏文字

```tsx
/**
 * title: 隐藏文字
 * desc: 只展示进度条。
 */
import React from 'react';
import { Progress } from 'viki-ui';

const ProgressExample = () => {
  return (
    <>
      <Progress
        textOutside
        showText={false}
        theme="success"
        percent={100}
        style={{ width: '320px' }}
      />
      <Progress
        showText={false}
        textOutside
        percent={50}
        style={{ width: '320px' }}
      />
      <Progress
        textOutside
        showText={false}
        theme="error"
        percent={20}
        style={{ width: '320px' }}
      />
    </>
  );
};
export default ProgressExample;
```

```tsx
/**
 * title: 自定义颜色
 * desc: color属性可以是一个字符串，一个数组，甚至是一个函数
 */
import React, { useState } from 'react';
import { Progress, Button, Icon } from 'viki-ui';

const ProgressExample = () => {
  const [percent, setPercent] = useState(0);
  const customColors = [
    { color: '#f56c6c', percent: 20 },
    { color: '#e6a23c', percent: 40 },
    { color: '#5cb87a', percent: 60 },
    { color: '#1989fa', percent: 80 },
    { color: '#6f7ad3', percent: 100 },
  ];
  const increase = () => {
    setPercent(pre => {
      if (pre + 10 > 100) {
        setPercent(100);
      } else {
        setPercent(pre + 10);
      }
    });
  };
  const decrease = () => {
    setPercent(pre => {
      if (pre - 10 < 0) {
        setPercent(0);
      } else {
        setPercent(pre - 10);
      }
    });
  };
  const customColorMethod = percent => {
    if (percent < 30) {
      return '#909399';
    } else if (percent < 70) {
      return '#e6a23c';
    } else {
      return '#67c23a';
    }
  };
  return (
    <>
      <Progress
        color="#409eff"
        textOutside
        percent={percent}
        style={{ width: '360px' }}
      />
      <Progress
        color={customColors}
        textOutside
        percent={percent}
        style={{ width: '360px' }}
      />
      <Progress
        color={customColorMethod}
        textOutside
        percent={percent}
        style={{ width: '360px' }}
      />
      <Button onClick={decrease} size="sm">
        <Icon icon="minus" />
      </Button>
      <Button onClick={increase} size="sm">
        <Icon icon="plus" />
      </Button>
    </>
  );
};
export default ProgressExample;
```

## API

| 属性名      | 描述                                                         | 类型                | 默认值 |
| ----------- | ------------------------------------------------------------ | ------------------- | ------ |
| percent     | 进度条百分比                                                 | number              | (必选) |
| strokeHidth | 进度条高度                                                   | number              | --     |
| showText    | 是否展示文字                                                 | boolean             | --     |
| theme       | 进度条主题                                                   | ThemeProps          | --     |
| color       | 进度条颜色，可以是一个颜色字符串，一个数组，也可以是一个函数 | colorProps & string | --     |
| textOutside | 文字是否外显，默认内显                                       | boolean             | --     |
