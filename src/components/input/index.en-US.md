---
category: Components
subtitle: Input
type: Data entry
title: Input
---

# Input

Through the mouse or keyboard input content, is the most basic form fields of packing.

# When to use

- Requires the user to input form fields
- Provide with ICONS, former suffix input box

## The basic use

```tsx
import React from 'react';
import { Input } from 'viki-ui';

const InputExample = props => {
  return <Input style={{ width: '320px' }} placeholder="Basic usage" />;
};

export default InputExample;
```

## Three kinds of size

```tsx
/**
 * title: Three kinds of size
 * desc: \<Input /\> Input defines three sizes (large, default and small).
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

## Front/rear label

```tsx
/**
 * title:  Front/rear label
 * desc: Used to configure some fixed combinations.
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

## Input is disabled

```tsx
/**
 * title: Input is disabled
 * desc: Disable use input box input content
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

## TextArea

```tsx
/**
 * title: TextArea
 * desc: Used for multi-line input.
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

## password

```tsx
/**
 * title: password
 * desc: The password box.
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

| Name         | Description                      | Type                                               | Default |
| ------------ | -------------------------------- | -------------------------------------------------- | ------- |
| defaultValue | input default value              | `string & (string \| number \| readonly string[])` | `--`    |
| disabled     | Disable input box                | `boolean`                                          | `--`    |
| size         | Input box size                   | `"lg" \| "sm"`                                     | `--`    |
| preIcon      | Before the input box icon        | `IconProp`                                         | `--`    |
| sufIcon      | After the input box icon         | `IconProp`                                         | `--`    |
| prefix       | Input box prefix                 | `ReactNode`                                        | `--`    |
| suffix       | Input box suffix                 | `ReactNode`                                        | `--`    |
| InputRef     | You can bind a ref for the input | `React.Ref<HTMLInputElement>`                      | `--`    |
| style        | --                               | `CSSProperties`                                    | `--`    |
| className    | --                               | `string`                                           | `--`    |

Other attributes and Input the React with [Input](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes).

### TextArea

| Name         | Description                              | Type                                               | Default |
| ------------ | ---------------------------------------- | -------------------------------------------------- | ------- |
| defaultValue | Textarea default value                   | `string & (string \| number \| readonly string[])` | `--`    |
| disabled     | Disable the Textarea                     | `boolean`                                          | `--`    |
| size         | Textarea size                            | `"lg" \| "sm"`                                     | `--`    |
| minlength    | The minimum length limit to the Textarea | `number`                                           | `--`    |
| maxLength    | Maximum length limit to the textarea     | `number`                                           | `--`    |
| rows         | Textarea lines                           | `number`                                           | `--`    |
| style        | --                                       | `CSSProperties`                                    | `--`    |
| className    | --                                       | `string`                                           | `--`    |

`Input. The TextArea` other attributes and the browser's own [TextArea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).

### PassWord

| Name             | Description                       | Type                     | Default                                                                      |
| ---------------- | --------------------------------- | ------------------------ | ---------------------------------------------------------------------------- |
| iconRender       | Custom switch button              | `(visible) => ReactNode` | `(visible: boolean) => (<Icon icon={visible ? 'eye' : 'eye-slash'}></Icon>)` |
| visibilityToggle | Whether the display switch button | `boolean`                | `true`                                                                       |
