import React, { ReactNode, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Icon from '../Icon/Icon';
import TextArea from './TextArea';
export interface InputBaseProps {
  /**
   * input默认值
   */
  defaultValue?: string;
  /**
   * 禁用输入框
   */
  disabled?: boolean;
  /**
   * 输入框尺寸大小
   */
  size?: 'lg' | 'sm';
  /**
   * 输入框前图标
   */
  preIcon?: IconProp;
  /**
   * 输入框后图标
   */
  sufIcon?: IconProp;
  /**
   * 输入框前缀
   */
  prefix?: ReactNode;
  /**
   * 输入框后缀
   */
  suffix?: ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

type InputProps = InputBaseProps &
  Omit<InputHTMLAttributes<HTMLElement>, 'size' | 'prefix'>;

const Input: React.FC<InputProps> & {
  TextArea: React.FC;
} = props => {
  const {
    defaultValue,
    disabled,
    size,
    preIcon,
    sufIcon,
    prefix,
    suffix,
    style,
    className,
    ...restprops
  } = props;
  const classes = classNames('viki-input', className, {
    [`viki-input-${size}`]: size,
    'viki-input-disabled': disabled,
    'viki-input-group': prefix || suffix,
    'viki-input-prefix': !!prefix,
    'viki-input-suffix': !!suffix,
    'viki-input-Icon': preIcon || sufIcon,
  });
  return (
    <>
      <span className={classes} style={style}>
        {prefix && <span className="viki-input-group-prefix">{prefix}</span>}
        {preIcon && (
          <span className="viki-input-preIcon">
            <Icon icon={preIcon}></Icon>
          </span>
        )}
        <input
          defaultValue={defaultValue}
          {...restprops}
          style={style}
          disabled={disabled}
        ></input>
        {sufIcon && (
          <span className="viki-input-sufIcon">
            <Icon icon={sufIcon}></Icon>
          </span>
        )}
        {suffix && <span className="viki-input-group-suffix">{suffix}</span>}
      </span>
    </>
  );
};

Input.TextArea = TextArea;

export default Input;
