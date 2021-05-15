---
category: Components
type: general
title: Button
subtitle: button
---

# Button

Button to start an immediate operation.

# When to use

Mark a (or encapsulates a set of operation command, response to a user clicks on a behavior, triggering the corresponding business logic.

## Button type

I have provided in viki - UI four buttons.

- Main button
- the default button
- dangerous button
- the text button

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
        The main button
      </Button>
      <Button style={btnStyle}>The default button</Button>
      <Button style={btnStyle} btnType="danger">
        Dangerous button
      </Button>
      <Button style={btnStyle} btnType="link" href="https://www.baidu.com">
        The text button
      </Button>
    </>
  );
};

export default ButtonExample;
```

## Button size

viki-ui There are three main kinds of the size of the button, respectively, in small, default is in

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
        Large buttons
      </Button>
      <Button style={btnStyle} btnType="primary">
        The default button
      </Button>
      <Button style={btnStyle} btnType="primary" size="sm">
        Small button
      </Button>
    </>
  );
};

export default ButtonExample;
```

## Disabled state

Add `disabled` attributes can let button is unavailable, also will change the button style。

```tsx
import React from 'react';
import { Button } from 'viki-ui';

const ButtonExample = () => {
  return (
    <>
      <Button disabled btnType="primary">
        The default button
      </Button>
    </>
  );
};

export default ButtonExample;
```

<API src="./Button.tsx"></API>
