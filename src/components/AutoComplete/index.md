---
category: Components
type: Data Entry
cols: 2
title: Auto-complete
---

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

  const renderOption = item => {
    return (
      <span>
        <span>{item.name}</span>
        <span>{item.name}</span>
      </span>
    );
  };
  return (
    <>
      <AutoComplete fetchSugestion={handleFetch} renderOption={renderOption} />
    </>
  );
};

export default AutoCompleteExample;
```