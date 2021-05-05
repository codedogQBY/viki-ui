```tsx
import React, { useState } from 'react';
import { Upload } from 'viki-ui';

const UploadExample = () => {
  const handleTest = (file: File) => {
    if (Math.round(file.size / 1024) > 50) {
      console.log('file is too bog');
      return false;
    }
    return true;
  };
  const handleTest2 = (file: File) => {
    const newFile = new File([file], 'new_name', { type: file.type });
    return Promise.resolve(newFile);
  };
  return (
    <Upload
      action="https://jsonplaceholder.typicode.com/posts/"
      //   onProgress={(percentage, file) => {
      //     console.log(percentage, file);
      //   }}
      onSuccess={(data, file) => {
        console.log(data, file);
      }}
      //   onError={(err, file) => {
      //     console.log(err, file);
      //   }}
      onChange={() => {
        console.log('文件状态改变');
      }}
      beforeUpload={handleTest2}
    />
  );
};

export default UploadExample;
```

```tsx
import React, { useState } from 'react';
import { Upload } from 'viki-ui';

const UploadExample = () => {
  const defaultFileList = [
    {
      uid: '1',
      name: 'xxx.png',
      status: 'uploading',
      url: 'http://www.baidu.com/xxx.png',
    },
    {
      uid: '2',
      name: 'yyy.png',
      status: 'success',
      url: 'http://www.baidu.com/yyy.png',
    },
    {
      uid: '3',
      name: 'zzz.png',
      status: 'fail',
      url: 'http://www.baidu.com/zzz.png',
    },
  ];
  return (
    <Upload
      defaultFileList={defaultFileList}
      action="https://jsonplaceholder.typicode.com/posts/"
    />
  );
};

export default UploadExample;
```
