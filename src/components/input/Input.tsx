import React, { ReactNode, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Icon from '../icon/Icon';
import TextArea from './TextArea';
import PassWord from './PassWord';
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
  /**
   * 可以为input框绑定一个ref
   */
  InputRef?: React.Ref<HTMLInputElement>;
  style?: React.CSSProperties;
  className?: string;
}

export type InputProps = InputBaseProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'>;

const Input: React.FC<InputProps> & {
  TextArea: React.FC;
  PassWord: React.FC;
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
    InputRef,
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
      <span className={classes} style={style ?? {}}>
        {prefix && <span className="viki-input-group-prefix">{prefix}</span>}
        {preIcon && (
          <span className="viki-input-preIcon">
            <Icon icon={preIcon}></Icon>
          </span>
        )}
        <input
          defaultValue={defaultValue!}
          {...restprops}
          disabled={Boolean(disabled)}
          className={classNames('viki-input-box', {
            preIconInput: preIcon,
          })}
          ref={InputRef!}
        />
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
Input.PassWord = PassWord;

export default Input;
