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
/**
 * title: Based on using
 * desc: FetchSuggestion function to contain the value value
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
      <AutoComplete fetchSugestion={handleFetch} />
    </>
  );
};

export default AutoCompleteExample;
```

## An asynchronous request

```tsx
/**
 * title: An asynchronous request
 * desc: Support the use of the value of the remote server to indicate.
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

## Custom templates

```tsx
/**
 * title: Custom templates
 * desc: Custom prompt template.
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
        <span>{`    is ${item.age} years old`}</span>
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

| Name            | Description      | Type                                                                 | Default |
| --------------- | ---------------- | -------------------------------------------------------------------- | ------- |
| fetchSuggestion | Recommended data | `(keyword: string,) => DataSourceType[] | Promise<DataSourceType[]>` | `--`    |
| onSelect        | Select events    | `(item: DataSourceType) => void`                                     | `--`    |
| renderOption    | Custom templates | `(item: DataSourceType) => ReactElement`                             | `--`    |

Other attribute of the AutoComplete and the Input component.
