---
category: Components
cols: 1
type: 数据展示
title: Progress
subtitle: 进度条
---

```tsx
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

```tsx
import React from 'react';
import { Progress } from 'viki-ui';

const ProgressExample = () => {
  return (
    <>
      <Progress textOutsize percent={30} style={{ width: '320px' }} />
    </>
  );
};
export default ProgressExample;
```

```tsx
import React from 'react';
import { Progress } from 'viki-ui';

const ProgressExample = () => {
  return (
    <>
      <Progress showText={false} percent={50} style={{ width: '320px' }} />
    </>
  );
};
export default ProgressExample;
```

```tsx
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
        textOutsize
        percent={percent}
        style={{ width: '320px' }}
      />
      <Progress
        color={customColors}
        textOutsize
        percent={percent}
        style={{ width: '320px' }}
      />
      <Progress
        color={customColorMethod}
        textOutsize
        percent={percent}
        style={{ width: '320px' }}
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
