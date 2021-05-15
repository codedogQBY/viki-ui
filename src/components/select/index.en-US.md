---
category: Components
cols: 1
type: The data show
title: Select
subtitle: Select
---

# Select

Elected items too much, use the drop-down menu and select content.The select supports the use of the keyboard direction key to move up and down,
Also support using the enter key to select and the esc key to exit

## Based on using

```tsx
/**
 * title: Based on using
 * desc: Apply broadly based radio
 */
import React from 'react';
import { Select } from 'viki-ui';

const { Option } = Select;

const ProgressExample = () => {
  const options = [
    {
      value: 'Option 1',
      label: 'Yellow golden cake',
    },
    {
      value: 'Option 2',
      label: 'Double peel milk',
    },
    {
      value: 'Option 3',
      label: 'Oyster omelet',
    },
    {
      value: 'Option 4',
      label: 'The dragon beard noodles',
    },
    {
      value: 'Option 5',
      label: 'Beijing Roast Duck',
    },
  ];
  return (
    <>
      <Select style={{ width: '280px' }} placeholder="Please select">
        {options.map(item => (
          <Option key={item.value} value={item.label} />
        ))}
      </Select>
    </>
  );
};
export default ProgressExample;
```

## Have to disable the option

```tsx
/**
 * title: Have to disable the option
 * desc: Disable some options
 */
import React from 'react';
import { Select } from 'viki-ui';

const { Option } = Select;

const ProgressExample = () => {
  const options = [
    {
      value: 'Option 1',
      label: 'Yellow golden cake',
    },
    {
      value: 'Option 2',
      label: 'Double peel milk',
    },
    {
      value: 'Option 3',
      label: 'Oyster omelet',
      disabled: true,
    },
    {
      value: 'Option 4',
      label: 'The dragon beard noodles',
    },
    {
      value: 'Option 5',
      label: 'Beijing Roast Duck',
    },
  ];
  return (
    <>
      <Select style={{ width: '280px' }} placeholder="Please select">
        {options.map(item => (
          <Option
            key={item.value}
            value={item.label}
            disabled={item.disabled}
          />
        ))}
      </Select>
    </>
  );
};
export default ProgressExample;
```

## Disabled state

```tsx
/**
 * title: Disabled state
 * desc: The selector is not available
 */
import React from 'react';
import { Select } from 'viki-ui';

const { Option } = Select;

const ProgressExample = () => {
  const options = [
    {
      value: 'Option 1',
      label: 'Yellow golden cake',
    },
    {
      value: 'Option 2',
      label: 'Double peel milk',
    },
    {
      value: 'Option 3',
      label: 'Oyster omelet',
    },
    {
      value: 'Option 4',
      label: 'The dragon beard noodles',
    },
    {
      value: 'Option 5',
      label: 'Beijing Roast Duck',
    },
  ];
  return (
    <>
      <Select style={{ width: '280px' }} disabled placeholder="Please select">
        {options.map(item => (
          <Option key={item.value} value={item.label} />
        ))}
      </Select>
    </>
  );
};
export default ProgressExample;
```

## Based on alternative

```tsx
/**
 * title: Based on alternative
 * desc: Has a wide applicability to multi-select the basis of using the Tag display options
 */
import React from 'react';
import { Select } from 'viki-ui';

const { Option } = Select;

const ProgressExample = () => {
  const options = [
    {
      value: 'Option 1',
      label: 'Yellow golden cake',
    },
    {
      value: 'Option 2',
      label: 'Double peel milk',
    },
    {
      value: 'Option 3',
      label: 'Oyster omelet',
    },
    {
      value: 'Option 4',
      label: 'The dragon beard noodles',
    },
    {
      value: 'Option 5',
      label: 'Beijing Roast Duck',
    },
  ];
  return (
    <>
      <Select style={{ width: '280px' }} multiple placeholder="Please select">
        {options.map(item => (
          <Option key={item.value} value={item.label} />
        ))}
      </Select>
    </>
  );
};
export default ProgressExample;
```

## Custom templates

```tsx
/**
 * title: Custom templates
 * desc: You can customize the alternatives
 */
import React from 'react';
import { Select } from 'viki-ui';

const { Option } = Select;

const ProgressExample = () => {
  const options = [
    {
      value: 'Option 1',
      label: 'Yellow golden cake',
    },
    {
      value: 'Option 2',
      label: 'Double peel milk',
    },
    {
      value: 'Option 3',
      label: 'Oyster omelet',
    },
    {
      value: 'Option 4',
      label: 'The dragon beard noodles',
    },
    {
      value: 'Option 5',
      label: 'Beijing Roast Duck',
    },
  ];
  return (
    <>
      <Select style={{ width: '280px' }} placeholder="Please select">
        {options.map(item => (
          <Option key={item.value} value={item.label}>
            <div>{item.label}:</div>
            <div>{`Recommend index:${item.level}star`}</div>
          </Option>
        ))}
      </Select>
    </>
  );
};
export default ProgressExample;
```

<API src='./Select.tsx'></API>

### Option

| Name     | Description               | Type                 | Default         |
| -------- | ------------------------- | -------------------- | --------------- |
| value    | The value of the selected | `string`             | `(Will choose)` |
| disabled | disable                   | `boolean`            | `--`            |
| children | Custom templates          | `React.ReactElement` | `--`            |
