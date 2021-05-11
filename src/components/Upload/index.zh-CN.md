---
category: Components
cols: 1
type: 数据展示
title: Upload
subtitle: 上传
---

```tsx
import React, { useState } from 'react';
import { Upload, Button } from 'viki-ui';

const UploadExample = () => {
  const handleTest = (file: File) => {
    if (Math.round(file.size / 1024) > 50) {
      console.log('file is too bog');
      return false;
    }
    return true;
  };
  // const handleTest2 = (file: File) => {
  //   const newFile = new File([file], 'new_name', { type: file.type });
  //   return Promise.resolve(newFile);
  // };
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
      // beforeUpload={handleTest2}
    >
      <Button btnType="primary">上传</Button>
    </Upload>
  );
};

export default UploadExample;
```

```tsx
import React, { useState } from 'react';
import { Upload, Button } from 'viki-ui';

const UploadExample = () => {
  const defaultFileList = [
    {
      uid: '1',
      name: 'xxx.png',
      status: 'uploading',
      percent: 66.6,
      url: 'http://www.baidu.com/xxx.png',
    },
    {
      uid: '2',
      name: 'yyy.png',
      status: 'success',
      percent: 100,
      url: 'http://www.baidu.com/yyy.png',
    },
    {
      uid: '3',
      name: 'zzz.png',
      status: 'fail',
      percent: 30,
      url: 'http://www.baidu.com/zzz.png',
    },
  ];
  return (
    <Upload
      style={{ width: '300px' }}
      defaultFileList={defaultFileList}
      action="https://jsonplaceholder.typicode.com/posts/"
    >
      <Button btnType="primary">上传</Button>
    </Upload>
  );
};

export default UploadExample;
```

```tsx
import React, { useState } from 'react';
import { Upload, Button, Icon } from 'viki-ui';

const UploadExample = () => {
  return (
    <Upload
      style={{ width: '400px' }}
      action="https://jsonplaceholder.typicode.com/posts/"
      onSuccess={(data, file) => {
        console.log(data, file);
      }}
      onChange={() => {
        console.log('文件状态改变');
      }}
      drag
    >
      <Icon icon="cloud-upload-alt" size="5x" theme="secondary" />
      <div style={{ marginTop: 20, color: 'gray' }}>点击/拖拽上传文件</div>
    </Upload>
  );
};

export default UploadExample;
```
