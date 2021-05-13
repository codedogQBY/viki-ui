---
category: Components
subtitle: 自动完成
type: 数据录入
cols: 2
title: Auto-complete
---

# Autocomplete 自动输入

输入框自动完成功能。

## 何时使用

- 需要一个输入框而不是选择器。
- 需要输入建议/辅助提示。

## 基础使用

```tsx
/**
 * title: 基础使用
 * desc: fetchSuggestion函数中需含有value值
 */
import React from 'react';
import { AutoComplete } from 'viki-ui';

const AutoCompleteExample = () => {
  const lakers = [
    'bradley',
    'pope',
    'caruso',
    'cook',
    'cousins',
    'james',
    'AD',
    'green',
    'howard',
    'kuzma',
    'McGee',
    'rando',
  ];
  const handleFetch = (query: string) => {
    return lakers
      .filter(name => name.includes(query))
      .map(name => ({ value: name }));
  };
  return (
    <>
      <AutoComplete style={{ width: '320px' }} fetchSuggestion={handleFetch} />
    </>
  );
};

export default AutoCompleteExample;
```

## 异步请求

```tsx
/**
 * title: 异步请求
 * desc: 支持使用远程服务器的值进行提示。
 */
import React from 'react';
import { AutoComplete } from 'viki-ui';

const AutoCompleteExample = () => {
  const handleFetch = (query: string) => {
    return fetch(`https://v1.alapi.cn/api/music/search?keyword=${query}`)
      .then(res => res.json())
      .then(({ data }) => {
        const { songs } = data;
        const formaSongs = songs.slice(0, 10).map(item => ({
          value: item.name,
          ...item,
        }));
        return formaSongs;
      });
  };

  return (
    <>
      <AutoComplete style={{ width: '320px' }} fetchSuggestion={handleFetch} />
    </>
  );
};

export default AutoCompleteExample;
```

## 自定义模板

```tsx
/**
 * title: 自定义模板
 * desc: 自定义提示模板展示。
 */
import React from 'react';
import { AutoComplete } from 'viki-ui';

const AutoCompleteExample = () => {
  const student = [
    { name: 'Mike', age: '23' },
    { name: 'Lisa', age: '18' },
    { name: 'Jack', age: '17' },
    { name: 'Jhon', age: '13' },
  ];
  const handleFetch = (query: string) => {
    return student
      .filter(item => item.name.includes(query))
      .map(item => {
        return { value: item.name, ...item };
      });
  };
  const renderOption = item => {
    return (
      <>
        <span>{item.name}</span>
        <span>{`    今年${item.age}岁`}</span>
      </>
    );
  };
  return (
    <>
      <AutoComplete
        style={{ width: '320px' }}
        fetchSuggestion={handleFetch}
        renderOption={renderOption}
      />
    </>
  );
};

export default AutoCompleteExample;
```

## API

| 属性名          | 描述       | 类型                                                                 | 默认值 |
| --------------- | ---------- | -------------------------------------------------------------------- | ------ |
| fetchSuggestion | 建议数据   | `(keyword: string,) => DataSourceType[] | Promise<DataSourceType[]>` | `--`   |
| onSelect        | 选择事件   | `(item: DataSourceType) => void`                                     | `--`   |
| renderOption    | 自定义模板 | `(item: DataSourceType) => ReactElement`                             | `--`   |

AutoComplete 的其他属性和 Input 组件一致。
