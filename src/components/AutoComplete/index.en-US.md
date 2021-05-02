---
category: Components
type: Data Entry
cols: 2
title: Auto-complete
---

# Autocomplete

Autocomplete function of input field.

## When To Use

When there is a need for autocomplete functionality.

## Based on using

```tsx
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
      <AutoComplete fetchSugestion={handleFetch} />
    </>
  );
};

export default AutoCompleteExample;
```

## An asynchronous request

```tsx
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

## API

| Name            | Description      | Type                                                                 | Default |
| --------------- | ---------------- | -------------------------------------------------------------------- | ------- |
| fetchSuggestion | Recommended data | `(keyword: string,) => DataSourceType[] | Promise<DataSourceType[]>` | `--`    |
| onSelect        | Select events    | `(item: DataSourceType) => void`                                     | `--`    |
| renderOption    | Custom templates | `(item: DataSourceType) => ReactElement`                             | `--`    |

Other attribute of the AutoComplete and the Input component.
