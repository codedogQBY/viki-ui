---
category: Components
cols: 1
type: Feedback
title: message
---

# message

Display the operation feedback information globally.

# When to use

- Feedback on success, warnings, errors, info.

- The top is displayed in the middle and disappears automatically, which is a lightweight prompt mode without interrupting the user's operation.

# Code demonstration

## Basic usage

```tsx
/**
 * title: Basic usage
 * desc: It appears from the top and disappears after 3 seconds
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

## Different states

```tsx
/**
 * title: Different states
 * desc: It is used to display the operation feedback of "success, warning, message, error" class.
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

## Closed

```tsx
/**
 * title: Closed
 * desc: You can add a close button.
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

## Modification duration

```tsx
/**
 * title: Modification duration
 * desc: The custom duration is 10s, and the default time is 3S.
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

> Message message can be used through the message function, such as：`message({type:'error',message:'error'})`
> You can also use some built-in methods, such as:
>
> - `message.success('This is a success message')`
> - `message.error('This is an error message')`
> - `message.warning('This is a warning message')`
> - `message.info('This is a info message')`
>   In addition, these functions can directly pass a message string or a configuration parameter.
>   Theproperties are as follows

## API

| 属性名    | 描述                        | 类型                                  | 默认值  |
| --------- | --------------------------- | ------------------------------------- | ------- |
| type      | type                        | `success \| info \| warning \| error` | `info`  |
| message   | message                     | `message`                             | `''`    |
| closable  | Is the close button visible | `boolean`                             | `false` |
| duration  | Delay disappear time        | `number`                              | `3000`  |
| onClose   | Callback function on close  | `()=>void`                            | `--`    |
| className | Custom class name           | `string`                              | `--`    |
