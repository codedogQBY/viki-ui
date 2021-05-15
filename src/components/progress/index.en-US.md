---
category: Components
cols: 1
type: The data show
title: Progress
subtitle: Progress
---

# Progress

Show the current progress of the operation.

# when to use

When operation requires a long time to complete, for the user to display the operation of the current progress and status.

- when an operation will interrupt the current interface, or need to run in the background, and can take more than 2 seconds;

- when the need to display the percentage of an operation is completed

# code demo

# # the progress bar

```tsx
/**
 * title: the progress bar
 * desc: standard of the progress bar.
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

## Text explicit

```tsx
/**
 * title: Text explicit
 * desc: Writing on the outside of the progress bar display.
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

## The hidden text

```tsx
/**
 * title: The hidden text
 * desc: Only show the progress bar.
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
 * title: Custom colors
 * desc: Color attribute can be a string, an array, or even a function
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

| Name        | Description                                                                    | Type                | Default       |
| ----------- | ------------------------------------------------------------------------------ | ------------------- | ------------- |
| percent     | The progress bar percentage                                                    | number              | (Will choose) |
| strokeHidth | The progress bar height                                                        | number              | --            |
| showText    | Whether to show the text                                                       | boolean             | --            |
| theme       | The progress bar theme                                                         | ThemeProps          | --            |
| color       | Progress bar color, color can be a string, an array, it can also be a function | colorProps & string | --            |
| textOutside | Within the text is explicit, the default                                       | boolean             | --            |
