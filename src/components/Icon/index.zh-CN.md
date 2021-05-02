---
category: Components
subtitle: 图标
type: 通用
title: Icon
---

# Icon 图标

在一些输入框，按钮等一些地方用到会图标，图标很方便我们修改大小和颜色。
viki-ui 使用的是 fontawesome 的线性图标

## 基本使用

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

## 各种主题的 Icon

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

## 旋转的 Icon

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

## 各种大小 Icon

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

## API

| 属性名    | 描述     | 类型                                                                                                    | 默认值  |
| --------- | -------- | ------------------------------------------------------------------------------------------------------- | ------- |
| theme     | 主题     | `\| 'primary'\| 'secondary' \| 'success'\| 'info'\| 'warning' \| 'error'\| 'light'\|'dark'`             | `--`    |
| color     | 图标颜色 | `string`                                                                                                | `--`    |
| size      | 图标尺寸 | `"xs" \| "lg" \| "sm" \| "1x" \| "2x" \| "3x" \| "4x" \| "5x" \| "6x" \| "7x" \| "8x" \| "9x" \| "10x"` | `--`    |
| spin      | 是否旋转 | `boolean`                                                                                               | `false` |  | `--` |
| rotation  | 旋转角度 | `90 \| 180 \| 270`                                                                                      | `--`    |
| style     | --       | `CSSProperties`                                                                                         | `--`    |
| className | --       | `string`                                                                                                | `--`    |

## 全部图标

<code src='./icons/showAllIcons.tsx'></code>
