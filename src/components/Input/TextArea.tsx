import React, { TextareaHTMLAttributes } from 'react';
import classNames from 'classnames';
import { InputBaseProps } from './Input';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLElement> {
  /**
   * 文本域提示内容
   */
  placeholder?: string;
  /**
   * 文本域最小输入值数
   */
  minlength?: number;
  /**
   * 文本域最大输入值数
   */
  maxLength?: number;
  /**
   * 是否禁用文本域
   */
  disabled?: boolean;
  /**
   * 文本框可视域，即文本行数
   */
  rows?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TextArea: React.FC<TextAreaProps & InputBaseProps> = props => {
  const {
    defaultValue,
    placeholder,
    minlength,
    maxLength,
    value,
    disabled,
    rows,
    className,
    size,
    style,
    ...restprops
  } = props;
  const classes = classNames('viki-input', className, {
    [`viki-input-${size}`]: size,
    'viki-input-disabled': disabled,
  });
  return (
    <>
      {/*@ts-ignore */}
      <textarea
        defaultValue={defaultValue}
        placeholder={placeholder}
        minLength={minlength}
        maxLength={maxLength}
        value={value}
        disabled={disabled}
        rows={rows}
        style={style}
        className={classes}
        {...restprops}
      ></textarea>
    </>
  );
};

export default TextArea;
