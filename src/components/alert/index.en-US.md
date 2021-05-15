---
category: Components
type: Feedback
title: Alert
---

# Alert

Alert, will need to pay attention to information.

# When to use

- displays a warning when a page need to users of information.

- a floating layer static representation, showing all the time, will not disappear automatically, the user can click on close.

## There are four types

```tsx
/**
 * title: Four kinds of style
 * desc: Four kinds of style `success`、`info`、`warning`、`error`
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

## Alert box containing description

```tsx
/**
 * title: Contains descriptive text
 * desc: Contains descriptive text introduction of warning
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

## Warning messages can be closed

```tsx
/**
 * title: Warning messages can be closed
 * desc: Show the close button, click on the warning messages can be closed
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
