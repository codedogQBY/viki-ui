---
category: Components
type: Data Display
cols: 2
title: Card
---

# Card

General card container.

# When to use

The most basic level, carry CARDS containers, paragraphs, lists, photographs, information is often used to display the page.

## Basic usage

```tsx
/**
 * title: Basic usage
 * desc: Contains the title, the operation, the content and the bottom area
 */
import React from 'react';
import { Card, Button } from 'viki-ui';

const CardExample = () => {
  return (
    <>
      <Card
        style={{ width: '360px' }}
        head={
          <div>
            <span>Title</span>
            <Button style={{ float: 'right' }} btnType="link" href="#">
              More
            </Button>
          </div>
        }
        foot={
          <div>
            <Button style={{ float: 'right' }} size="sm" btnType="primary">
              OK
            </Button>
            <Button style={{ float: 'right' }} size="sm">
              NO
            </Button>
          </div>
        }
      >
        {[1, 2, 3, 4].map((item, index) => {
          return <p key={index}>{'List content ' + item}</p>;
        })}
      </Card>
    </>
  );
};

export default CardExample;
```

## A simple card

```tsx
/**
 * title: A simple card
 * desc: The card is only the content area.
 */
import React from 'react';
import { Card } from 'viki-ui';

const CardExample = () => {
  return (
    <>
      <Card style={{ width: '360px' }}>
        {[1, 2, 3, 4].map((item, index) => {
          return <p key={index}>{'List content ' + item}</p>;
        })}
      </Card>
    </>
  );
};

export default CardExample;
```

## Enriched the contents of the card

```tsx
/**
 * title: Enriched the contents of the card
 * desc: Suitable for introduction of exhibition information
 */
import React from 'react';
import { Card } from 'viki-ui';

const CardExample = () => {
  const cardsInfo = [
    {
      src: 'https://img-blog.csdnimg.cn/20210516112513375.png',
      title: '步天歌',
      tags: '古风 玄幻',
    },
    {
      src: 'https://img-blog.csdnimg.cn/2021051611252736.png',
      title: '罗小黑战记.蓝溪镇',
      tags: '搞笑 治愈',
    },
    {
      src: 'https://img-blog.csdnimg.cn/20210516112516282.png',
      title: '那年那兔那些事儿',
      tags: '热血 正能量',
    },
  ];
  return (
    <>
      {cardsInfo.map(item => (
        <Card
          key={item.src}
          style={{ margin: '0 16px' }}
          bodyStyle={{ padding: '0' }}
          foot={
            <div style={{ fontSize: '12px' }}>
              <div>{item.title}</div>
              <div style={{ color: 'gray' }}>{item.tags}</div>
            </div>
          }
        >
          <img src={item.src} />
        </Card>
      ))}
    </>
  );
};

export default CardExample;
```

## Card shadow

```tsx
/**
 * title: Card shadow
 * desc: Can display of shadow configuration.
 */
import React from 'react';
import { Card } from 'viki-ui';

const CardExample = () => {
  return (
    <>
      <Card shadow="always" style={{ width: '240px', margin: '0 16px' }}>
        Always show
      </Card>
      <Card shadow="hover" style={{ width: '240px', margin: '0 16px' }}>
        When a mouseover show
      </Card>
      <Card shadow="never" style={{ width: '240px', margin: '0 16px' }}>
        Never show
      </Card>
    </>
  );
};

export default CardExample;
```

<API src="./Card.tsx"></API>
