---
category: Components
subtitle: 警告提示
type: 反馈
title: Alert 警告提示
---

# Alert 警告提示

警告提示，展现需要关注的信息。

# 何时使用

- 当某个页面需要向用户显示警告的信息时。

- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## 四种类型

```tsx
/**
 * title: 四种样式
 * desc: 共有四种样式 `success`、`info`、`warning`、`error`
 */
import React from 'react';
import { Alert } from 'viki-ui';

const AlertExample = () => {
  const style = {
    marginBottom: '20px',
  };
  return (
    <>
      <Alert style={style} message="Success Text"></Alert>
      <Alert style={style} message="Info Text" type="info"></Alert>
      <Alert style={style} message="Warning Text" type="warning"></Alert>
      <Alert style={style} message="Error Text" type="error"></Alert>
    </>
  );
};

export default AlertExample;
```

## 含有描述的警告框

```tsx
/**
 * title: 含有描述性文字介绍
 * desc: 含有描述性文字介绍的警告提示
 */
import React from 'react';
import { Alert } from 'viki-ui';

const AlertExample = () => {
  const style = {
    marginBottom: '20px',
  };
  return (
    <>
      <Alert
        message="Success Text"
        description="Success Description Success Description Success Description"
        type="success"
        style={style}
      />
      <Alert
        message="Info Text"
        description="Info Description Info Description Info Description Info Description"
        type="info"
        style={style}
      />
      <Alert
        message="Warning Text"
        description="Warning Description Warning Description Warning Description Warning Description"
        type="warning"
        style={style}
      />
      <Alert
        message="Error Text"
        description="Error Description Error Description Error Description Error Description"
        type="error"
        style={style}
      />
    </>
  );
};

export default AlertExample;
```

## 可关闭的警告提示

```tsx
/**
 * title: 可关闭的警告提示
 * desc: 显示关闭按钮，点击可关闭警告提示
 */
import React from 'react';
import { Alert } from 'viki-ui';

const AlertExample = () => {
  const style = {
    marginBottom: '20px',
  };

  const onClose = () => {
    console.log('I was closed.');
  };
  return (
    <>
      <Alert
        message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
        type="warning"
        closable
        onClose={onClose}
        style={style}
      />
      <Alert
        message="Error Text"
        description="Error Description Error Description Error Description Error Description Error Description Error Description"
        type="error"
        closable
        onClose={onClose}
      />
    </>
  );
};

export default AlertExample;
```

<API src='./Alert.tsx'></API>
