---
title: Input
subtitle: Input 输入框
nav:
  title: Components
  path: /components
---

# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

# 何时使用

- 需要用户输入表单域内容
- 提供带图标，前后缀的输入框

## 基本使用

```tsx
import React from 'react';
import { Input } from 'viki-ui';

const InputExample = props => {
  return <Input style={{ width: '320px' }} placeholder="Basic usage" />;
};

export default InputExample;
```

## 三种大小

```tsx
/**
 * title: 三种大小
 * desc: \<Input /\> 输入框定义了三种尺寸（大、默认、小）。
 */
import React from 'react';
import { Input } from 'viki-ui';

const InputExample = props => {
  return (
    <div style={{ width: '320px' }}>
      <Input size="lg" placeholder="large size" />
      <br />
      <Input placeholder="default size" />
      <br />
      <Input size="sm" placeholder="small size" />
    </div>
  );
};

export default InputExample;
```

## 前置/后置标签

```tsx
/**
 * title:  前置/后置标签
 * desc: 用于配置一些固定组合。
 */
import React from 'react';
import { Input } from 'viki-ui';
import { Icon } from 'viki-ui';

const InputExample = props => {
  return (
    <div style={{ width: '320px' }}>
      <Input prefix="http://" suffix=".com" defaultValue="mysite" />
      <br />
      <Input suffix={<Icon icon="cog" />} defaultValue="mysite" />
      <br />
      <Input preIcon="cog" sufIcon="search" defaultValue="mysite" />
    </div>
  );
};

export default InputExample;
```

## 输入框禁用

```tsx
/**
 * title: 输入框禁用
 * desc: 禁用使用输入框输入内容
 */
import React from 'react';
import { Input } from 'viki-ui';

const InputExample = props => {
  return (
    <Input style={{ width: '320px' }} disabled placeholder="Basic usage" />
  );
};

export default InputExample;
```

## 文本域

```tsx
/**
 * title: 文本域
 * desc: 用于多行输入。
 */
import React from 'react';
import { Input } from 'viki-ui';

const { TextArea } = Input;

const InputExample = props => {
  return (
    <TextArea style={{ width: '640px' }} rows={5} placeholder="Basic usage" />
  );
};

export default InputExample;
```

## 密码框

```tsx
/**
 * title: 密码框
 * desc: 密码框。
 */
import React from 'react';
import { Input, Icon } from 'viki-ui';

const { PassWord } = Input;

const InputExample = props => {
  return (
    <>
      <PassWord
        style={{ width: '320px', marginBottom: '20px' }}
        placeholder="Password Input"
      />
      <br />
      <PassWord
        style={{ width: '320px', marginBottom: '20px' }}
        iconRender={visible => <Icon icon={visible ? 'lock' : 'lock-open'} />}
        placeholder="Password Input"
      />
      <br />
      <PassWord
        style={{ width: '320px' }}
        visibilityToggle={false}
        placeholder="Password Input"
      />
    </>
  );
};

export default InputExample;
```

<br/>
<br/>

## API

| Name         | Description    | Type                                               | Default |
| ------------ | -------------- | -------------------------------------------------- | ------- |
| defaultValue | input 默认值   | `string & (string \| number \| readonly string[])` | `--`    |
| disabled     | 禁用输入框     | `boolean`                                          | `--`    |
| size         | 输入框尺寸大小 | `"lg" \| "sm"`                                     | `--`    |
| preIcon      | 输入框前图标   | `IconProp`                                         | `--`    |
| sufIcon      | 输入框后图标   | `IconProp`                                         | `--`    |
| prefix       | 输入框前缀     | `ReactNode`                                        | `--`    |
| suffix       | 输入框后缀     | `ReactNode`                                        | `--`    |
| style        | --             | `CSSProperties`                                    | `--`    |
| className    | --             | `string`                                           | `--`    |

Input 的其他属性和 React 自带的 [input](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes) 一致。

### TextArea

| Name         | Description        | Type                                               | Default |
| ------------ | ------------------ | -------------------------------------------------- | ------- |
| defaultValue | textarea 默认值    | `string & (string \| number \| readonly string[])` | `--`    |
| disabled     | 禁用文本域         | `boolean`                                          | `--`    |
| size         | 文本域尺寸大小     | `"lg" \| "sm"`                                     | `--`    |
| minlength    | 文本域最小字数限制 | `number`                                           | `--`    |
| maxLength    | 文本域最大字数限制 | `number`                                           | `--`    |
| rows         | 文本域行数         | `number`                                           | `--`    |
| style        | --                 | `CSSProperties`                                    | `--`    |
| className    | --                 | `string`                                           | `--`    |

`Input.TextArea` 的其他属性和浏览器自带的 [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) 一致。

### PassWord

| Name             | Description      | Type                     | Default                                                                      |
| ---------------- | ---------------- | ------------------------ | ---------------------------------------------------------------------------- |
| iconRender       | 自定义切换按钮   | `(visible) => ReactNode` | `(visible: boolean) => (<Icon icon={visible ? 'eye' : 'eye-slash'}></Icon>)` |
| visibilityToggle | 是否显示切换按钮 | `boolean`                | `true`                                                                       |
