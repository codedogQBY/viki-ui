---
title: Auto-complete
nav:
  title: Components
  path: /components
---

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
