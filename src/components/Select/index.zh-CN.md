```tsx
import React from 'react';
import { Select } from 'viki-ui';

const { Option } = Select;

const ProgressExample = () => {
  return (
    <>
      <Select style={{ width: '300px' }}>
        <Option value="12" />
        <Option value="123" />
        <Option value="1456" />
      </Select>
    </>
  );
};
export default ProgressExample;
```
