---
category: Components
type: 数据展示
cols: 2
title: Card 卡片
---

# Card 卡片

通用卡片容器。

# 何时使用

最基础的卡片容器，可承载文字、列表、图片、段落，常用于信息展示页面。

## 基础用法

```tsx
/**
 * title: 基础用法
 * desc: 包含标题，操作，内容和底部区域
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
            <span>卡片标题</span>
            <Button style={{ float: 'right' }} btnType="link" href="#">
              更多
            </Button>
          </div>
        }
        foot={
          <div>
            <Button style={{ float: 'right' }} size="sm" btnType="primary">
              确定
            </Button>
            <Button style={{ float: 'right' }} size="sm">
              取消
            </Button>
          </div>
        }
      >
        {[1, 2, 3, 4].map((item, index) => {
          return <p key={index}>{'列表内容 ' + item}</p>;
        })}
      </Card>
    </>
  );
};

export default CardExample;
```

## 简单卡片

```tsx
/**
 * title: 简单卡片
 * desc: 卡片只有内容区域。
 */
import React from 'react';
import { Card } from 'viki-ui';

const CardExample = () => {
  return (
    <>
      <Card style={{ width: '360px' }}>
        {[1, 2, 3, 4].map((item, index) => {
          return <p key={index}>{'列表内容 ' + item}</p>;
        })}
      </Card>
    </>
  );
};

export default CardExample;
```

## 丰富卡片内容

```tsx
/**
 * title: 丰富卡片内容
 * desc: 适用于信息简介的展示
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

## 卡片阴影

```tsx
/**
 * title: 卡片阴影
 * desc: 可对阴影的显示进行配置。
 */
import React from 'react';
import { Card } from 'viki-ui';

const CardExample = () => {
  return (
    <>
      <Card shadow="always" style={{ width: '240px', margin: '0 16px' }}>
        总是显示
      </Card>
      <Card shadow="hover" style={{ width: '240px', margin: '0 16px' }}>
        鼠标悬浮时显示
      </Card>
      <Card shadow="never" style={{ width: '240px', margin: '0 16px' }}>
        从不显示
      </Card>
    </>
  );
};

export default CardExample;
```

<API src="./Card.tsx"></API>
