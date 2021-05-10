```tsx
import React from 'react';
import { Select } from 'viki-ui';

const { Option } = Select;

const ProgressExample = () => {
  return (
    <>
      <Select style={{ width: '300px' }}>
        <Option disabled value="12" />
        <Option value="123" />
        <Option value="1456" />
        <Option disabled value="12" />
        <Option value="123" />
        <Option value="1456" />
        <Option disabled value="12" />
      </Select>
    </>
  );
};
export default ProgressExample;
```
