---
category: Components
cols: 1
type: 数据展示
title: Upload
subtitle: 上传
---

# Upload 上传

通过点击或者拖拽上传文件

## 点击上传

```tsx
/**
 * title: 点击上传
 * desc: 点击按钮弹出文件选择框
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
      <Button btnType="primary">上传文件</Button>
      <div style={{ marginTop: 20, fontSize: 12 }}>
        只能上传jpg/png文件，且不超过500kb
      </div>
    </Upload>
  );
};

export default UploadExample;
```

## 四种状态

```tsx
/**
 * title: 四种状态
 * desc: 文件上传的四种状态，分别是ready、uploading、success和fail
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
      <Button btnType="primary">上传</Button>
    </Upload>
  );
};

export default UploadExample;
```

## 拖拽上传

```tsx
/**
 * title: 拖拽上传
 * desc: 用户操作体验更好的拖拽上传
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

<API src='./Upload.tsx'></API>
