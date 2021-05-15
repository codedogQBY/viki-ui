---
category: Components
cols: 1
type: The data show
title: Upload
subtitle: Upload
---

# Upload

By clicking on or drag and drop to upload files

## Click on the upload

```tsx
/**
 * title: Click on the upload
 * desc: Click on the button in the file selection box
 */
import React, { useState } from 'react';
import { Upload, Button } from 'viki-ui';

const UploadExample = () => {
  const handleTest = file => {
    if (Math.round(file.size / 1024) > 50) {
      alert('file is too bog');
      return false;
    }
    return true;
  };
  return (
    <Upload
      action="https://jsonplaceholder.typicode.com/posts/"
      beforeUpload={handleTest}
      onSuccess={(data, file) => {
        console.log(data, file);
      }}
      onChange={() => {
        console.log('文件状态改变');
      }}
    >
      <Button btnType="primary">Upload a file</Button>
      <div style={{ marginTop: 20, fontSize: 12 }}>
        Can only upload a JPG/PNG file, and not more than 500 KB
      </div>
    </Upload>
  );
};

export default UploadExample;
```

## Four kinds of state

```tsx
/**
 * title: Four kinds of state
 * desc: File upload four state, are ready, uploading, success, and fail
 */
import React, { useState } from 'react';
import { Upload, Button } from 'viki-ui';

const UploadExample = () => {
  const defaultFileList = [
    {
      uid: '0',
      name: 'uuu.png',
      status: 'ready',
      url: 'http://www.baidu.com/uuu.png',
    },
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
      <Button btnType="primary">upload</Button>
    </Upload>
  );
};

export default UploadExample;
```

## Drag and drop to upload

```tsx
/**
 * title: Drag and drop to upload
 * desc: Drag and drop to upload the user experience better
 */
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
        console.log('File status change');
      }}
      drag
    >
      <Icon icon="cloud-upload-alt" size="5x" theme="secondary" />
      <div style={{ marginTop: 20, color: 'gray' }}>
        Click/drag and drop to upload files
      </div>
    </Upload>
  );
};

export default UploadExample;
```

<API src='./Upload.tsx'></API>
