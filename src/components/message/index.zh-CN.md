---
category: Components
cols: 1
type: 反馈
title: message 全局提示
---

# message 全局提示

全局展示操作反馈信息。

# 何时使用

- 可提供成功、警告和错误等反馈信息。

- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

# 代码演示

## 基础用法

```tsx
/**
 * title: 基础用法
 * desc: 从顶部出现，3秒后消失
 */
import React from 'react';
import { message, Button } from 'viki-ui';

const messageExample = () => {
  const info = () => {
    message('我是一条消息提醒');
  };
  return (
    <>
      <Button
        size="sm"
        type="primary"
        onClick={() => {
          info();
        }}
      >
        消息提示
      </Button>
    </>
  );
};
export default messageExample;
```

## 不同状态

```tsx
/**
 * title: 不同状态
 * desc: 用来显示「成功、警告、消息、错误」类的操作反馈。
 */
import React from 'react';
import { message, Button } from 'viki-ui';

const messageExample = () => {
  const success = () => {
    message.success('This is a success message');
  };

  const error = () => {
    message.error('This is an error message');
  };

  const warning = () => {
    message.warning('This is a warning message');
  };

  const info = () => {
    message.info('This is a info message');
  };
  return (
    <>
      <Button size="sm" onClick={success}>
        Success
      </Button>
      <Button size="sm" onClick={warning}>
        Warning
      </Button>
      <Button size="sm" onClick={info}>
        Info
      </Button>
      <Button size="sm" onClick={error}>
        Error
      </Button>
    </>
  );
};
export default messageExample;
```

## 可关闭

```tsx
/**
 * title: 可关闭
 * desc: 可以添加关闭按钮。
 */
import React from 'react';
import { message, Button } from 'viki-ui';

const messageExample = () => {
  const success = () => {
    message.success({ message: 'This is a success message', closable: true });
  };

  const error = () => {
    message.error({ message: 'This is an error message', closable: true });
  };

  const warning = () => {
    message.warning({ message: 'This is a warning message', closable: true });
  };

  const info = () => {
    message.info({ message: 'This is a info message', closable: true });
  };
  return (
    <>
      <Button size="sm" onClick={success}>
        Success
      </Button>
      <Button size="sm" onClick={warning}>
        Warning
      </Button>
      <Button size="sm" onClick={info}>
        Info
      </Button>
      <Button size="sm" onClick={error}>
        Error
      </Button>
    </>
  );
};
export default messageExample;
```

## 修改时长

```tsx
/**
 * title: 修改时长
 * desc: 自定义时长 10s，默认时长为 3s。
 */
import React from 'react';
import { message, Button } from 'viki-ui';

const messageExample = () => {
  const info = () => {
    message.info({ message: 'This is a info message', duration: 10000 });
  };
  return (
    <>
      <Button size="sm" onClick={info}>
        Info
      </Button>
    </>
  );
};
export default messageExample;
```

## 说明

> message 消息的使用方式可以通过 message 函数来调用，如：`message({type:'error',message:'error'})`
> 也可以使用一些内置方法如：
>
> - `message.success('This is a success message')`
> - `message.error('This is an error message')`
> - `message.warning('This is a warning message')`
> - `message.info('This is a info message')`
>   此外，这些函数可以直接传一个消息字符串，也可以传一个配置参数，属性如下所示

## API

| 属性名    | 描述             | 类型                                  | 默认值  |
| --------- | ---------------- | ------------------------------------- | ------- |
| type      | 类型             | `success \| info \| warning \| error` | `info`  |
| message   | 消息文本         | `message`                             | `''`    |
| closable  | 关闭按钮是否可见 | `boolean`                             | `false` |
| duration  | 延迟消失时间     | `number`                              | `3000`  |
| onClose   | 关闭时回调函数   | `()=>void`                            | `--`    |
| className | 自定义类名       | `string`                              | `--`    |
