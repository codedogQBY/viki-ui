---
category: Components
type: 通用
title: Button
subtitle: 按钮
---

# Button 按钮

按钮用于开始一个即时操作。

# 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 按钮类型

在 viki-ui 中我提供了四种按钮。

- 主要按钮
- 默认按钮
- 危险按钮
- 文字按钮

```tsx
import React from 'react';
import { Button } from 'viki-ui';

const ButtonExample = () => {
  const btnStyle = {
    margin: '0 10px',
  };
  return (
    <>
      <Button style={btnStyle} btnType="primary">
        主要按钮
      </Button>
      <Button style={btnStyle}>默认按钮</Button>
      <Button style={btnStyle} btnType="danger">
        危险按钮
      </Button>
      <Button style={btnStyle} btnType="link" href="https://www.baidu.com">
        文字按钮
      </Button>
    </>
  );
};

export default ButtonExample;
```

## 按钮尺寸

viki-ui 主要有三种尺寸的按钮，分别对应大，中，小，默认是中

```tsx
import React, { useState } from 'react';
import { Button } from 'viki-ui';

const ButtonExample = () => {
  const btnStyle = {
    margin: '0 10px',
  };
  return (
    <>
      <Button style={btnStyle} btnType="primary" size="lg">
        大按钮
      </Button>
      <Button style={btnStyle} btnType="primary">
        默认按钮
      </Button>
      <Button style={btnStyle} btnType="primary" size="sm">
        小按钮
      </Button>
    </>
  );
};

export default ButtonExample;
```

## 禁用状态

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

```tsx
import React from 'react';
import { Button } from 'viki-ui';

const ButtonExample = () => {
  return (
    <>
      <Button disabled btnType="primary">
        默认按钮
      </Button>
    </>
  );
};

export default ButtonExample;
```

<API src="./Button.tsx"></API>
