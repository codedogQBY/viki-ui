---
category: Components
type: general
title: Icon
---

# Input

In some fields, buttons and other places with the icon, the icon we modify the size and color is very convenient.
Viki - UI USES fontawesome linear icon

## The basic use

```tsx
import React from 'react';
import { Icon } from 'viki-ui';

const IconExample = props => {
  const iconArrar = [
    'wrench',
    'wifi',
    'moon',
    'check-circle',
    'check',
    'hammer',
  ];
  return (
    <>
      {iconArrar.map((item, index) => (
        <Icon
          key={index}
          icon={item}
          size="lg"
          style={{ marginRight: '20px' }}
        />
      ))}
    </>
  );
};
export default IconExample;
```

## Various Icon theme

```tsx
import React from 'react';
import { Icon } from 'viki-ui';

const IconExample = props => {
  const iconArrar = [
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'error',
    'dark',
  ];
  return (
    <>
      {iconArrar.map((item, index) => (
        <Icon
          key={index}
          icon="grin-alt"
          size="lg"
          style={{ marginRight: '20px' }}
          theme={item}
        />
      ))}
    </>
  );
};
export default IconExample;
```

## Rotating Icon

```tsx
import React from 'react';
import { Icon } from 'viki-ui';

const IconExample = props => {
  const iconArrar = [
    'spinner',
    'circle-notch',
    'fan',
    'compass',
    'sun',
    'yin-yang',
  ];
  return (
    <>
      {iconArrar.map((item, index) => (
        <Icon
          key={index}
          icon={item}
          size="2x"
          spin
          style={{ marginRight: '20px' }}
        />
      ))}
    </>
  );
};
export default IconExample;
```

## Various size Icon

```tsx
import React from 'react';
import { Icon } from 'viki-ui';

const IconExample = props => {
  const iconArrar = ['xs', 'sm', '1x', 'lg', '2x', '3x'];
  return (
    <>
      {iconArrar.map((item, index) => (
        <Icon
          key={index}
          icon="grin-alt"
          size={item}
          style={{ marginRight: '20px' }}
        />
      ))}
    </>
  );
};
export default IconExample;
```

<br/>

More ICONS please see [fontawesome] (HTTP: / / https://fontawesome.com/icons?D = gallery&p = 2 & q = spind&s = solid&m = free)

## API

| Name      | Description          | Type                                                                                                    | Default |
| --------- | -------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| theme     | The theme            | `\| 'primary'\| 'secondary' \| 'success'\| 'info'\| 'warning' \| 'error'\| 'light'\|'dark'`             | `--`    |
| color     | Icon color           | `string`                                                                                                | `--`    |
| size      | The icon size        | `"xs" \| "lg" \| "sm" \| "1x" \| "2x" \| "3x" \| "4x" \| "5x" \| "6x" \| "7x" \| "8x" \| "9x" \| "10x"` | `--`    |
| spin      | Whether the rotation | `boolean`                                                                                               | `false` |  | `--` |
| rotation  | Rotation Angle       | `90 \| 180 \| 270`                                                                                      | `--`    |
| style     | --                   | `CSSProperties`                                                                                         | `--`    |
| className | --                   | `string`                                                                                                | `--`    |
