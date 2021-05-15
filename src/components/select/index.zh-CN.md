---
category: Components
cols: 1
type: 数据展示
title: Select 选择器
subtitle: 选择器
---

# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。select 支持使用键盘上下方向键来移动，
也支持使用回车键选中和 esc 键退出

## 基础使用

```tsx
/**
 * title: 基础使用
 * desc: 适用广泛的基础单选
 */
import React from 'react';
import { Select } from 'viki-ui';

const { Option } = Select;

const ProgressExample = () => {
  const options = [
    {
      value: '选项1',
      label: '黄金糕',
    },
    {
      value: '选项2',
      label: '双皮奶',
    },
    {
      value: '选项3',
      label: '蚵仔煎',
    },
    {
      value: '选项4',
      label: '龙须面',
    },
    {
      value: '选项5',
      label: '北京烤鸭',
    },
  ];
  return (
    <>
      <Select style={{ width: '280px' }} placeholder="请选择">
        {options.map(item => (
          <Option key={item.value} value={item.label} />
        ))}
      </Select>
    </>
  );
};
export default ProgressExample;
```

## 有禁用选项

```tsx
/**
 * title: 有禁用选项
 * desc: 禁用某些选项
 */
import React from 'react';
import { Select } from 'viki-ui';

const { Option } = Select;

const ProgressExample = () => {
  const options = [
    {
      value: '选项1',
      label: '黄金糕',
    },
    {
      value: '选项2',
      label: '双皮奶',
    },
    {
      value: '选项3',
      label: '蚵仔煎',
      disabled: true,
    },
    {
      value: '选项4',
      label: '龙须面',
    },
    {
      value: '选项5',
      label: '北京烤鸭',
    },
  ];
  return (
    <>
      <Select style={{ width: '280px' }} placeholder="请选择">
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

## 禁用状态

```tsx
/**
 * title: 禁用状态
 * desc: 选择器不可用
 */
import React from 'react';
import { Select } from 'viki-ui';

const { Option } = Select;

const ProgressExample = () => {
  const options = [
    {
      value: '选项1',
      label: '黄金糕',
    },
    {
      value: '选项2',
      label: '双皮奶',
    },
    {
      value: '选项3',
      label: '蚵仔煎',
    },
    {
      value: '选项4',
      label: '龙须面',
    },
    {
      value: '选项5',
      label: '北京烤鸭',
    },
  ];
  return (
    <>
      <Select style={{ width: '280px' }} disabled placeholder="请选择">
        {options.map(item => (
          <Option key={item.value} value={item.label} />
        ))}
      </Select>
    </>
  );
};
export default ProgressExample;
```

## 基础多选

```tsx
/**
 * title: 基础多选
 * desc: 适用性较广的基础多选，用 Tag 展示已选项
 */
import React from 'react';
import { Select } from 'viki-ui';

const { Option } = Select;

const ProgressExample = () => {
  const options = [
    {
      value: '选项1',
      label: '黄金糕',
    },
    {
      value: '选项2',
      label: '双皮奶',
    },
    {
      value: '选项3',
      label: '蚵仔煎',
    },
    {
      value: '选项4',
      label: '龙须面',
    },
    {
      value: '选项5',
      label: '北京烤鸭',
    },
  ];
  return (
    <>
      <Select style={{ width: '280px' }} multiple placeholder="请选择">
        {options.map(item => (
          <Option key={item.value} value={item.label} />
        ))}
      </Select>
    </>
  );
};
export default ProgressExample;
```

## 自定义模板

```tsx
/**
 * title: 自定义模板
 * desc: 可以自定义备选项
 */
import React from 'react';
import { Select } from 'viki-ui';

const { Option } = Select;

const ProgressExample = () => {
  const options = [
    {
      value: '选项1',
      label: '黄金糕',
      level: 5,
    },
    {
      value: '选项2',
      label: '双皮奶',
      level: 3,
    },
    {
      value: '选项3',
      label: '蚵仔煎',
      level: 4,
    },
    {
      value: '选项4',
      label: '龙须面',
      level: 3,
    },
    {
      value: '选项5',
      label: '北京烤鸭',
      level: 5,
    },
  ];
  return (
    <>
      <Select style={{ width: '280px' }} placeholder="请选择">
        {options.map(item => (
          <Option key={item.value} value={item.label}>
            <div>{item.label}:</div>
            <div>{`推荐指数：${item.level}颗星`}</div>
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

| 属性名   | 描述       | 类型                 | 默认值   |
| -------- | ---------- | -------------------- | -------- |
| value    | 选中的值   | `string`             | `(必选)` |
| disabled | 禁用       | `boolean`            | `--`     |
| children | 自定义模板 | `React.ReactElement` | `--`     |
