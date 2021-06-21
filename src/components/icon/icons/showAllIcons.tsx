/**
 * inline: true
 * background: 'rgb(200,200,200)'
 */

import React, { useState } from 'react';
import Icon from '../Icon';
import Input from '../../input/Input';
import messge from '../../message/messge';
import icons, { IconName } from './allIcons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './style.scss';

const showAllIcons = () => {
  const [iconArray, setIconArray] = useState<IconName[]>(icons);
  const handleCopy = (item: string) => {
    messge.success(`成功复制 ${item}   🎉`);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      const searchArray = icons.filter(item => {
        return item.includes(value as string);
      });
      setIconArray(searchArray);
    } else {
      setIconArray(icons);
    }
  };
  return (
    <>
      <Input
        placeholder="请输入图标名称"
        className="icon-search"
        sufIcon="search"
        onChange={e => handleChange(e as React.ChangeEvent<HTMLInputElement>)}
      />
      <div className="allIcons">
        {iconArray.map(item => {
          return (
            <CopyToClipboard
              key={item}
              text={`<Icon icon='${item}' />`}
              onCopy={() => handleCopy(`<Icon icon='${item}' />`)}
            >
              <div className="show-iocn-box">
                <Icon icon={item} className="show-icon" size="3x" />
                <span className="show-icon-name">{item}</span>
              </div>
            </CopyToClipboard>
          );
        })}
      </div>
    </>
  );
};

export default showAllIcons;
