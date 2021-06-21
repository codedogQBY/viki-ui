import React, { useState } from 'react';
import { InputProps } from './Input';
import classNames from 'classnames';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Icon from '../icon/Icon';

export interface PassWordProps extends InputProps {
  /**
   * 	自定义切换按钮
   */
  iconRender?: (visible: boolean) => React.ReactNode;
  /**
   * 是否显示切换按钮
   */
  visibilityToggle?: boolean;
}

const PassWord: React.FC<PassWordProps> = props => {
  const {
    defaultValue,
    disabled,
    size,
    prefix,
    suffix,
    iconRender,
    visibilityToggle,
    style,
    className,
    ...restprops
  } = props;
  const [visible, setVisible] = useState(true);
  const onVisibleChange = () => {
    if (disabled) {
      return;
    }

    setVisible(!visible);
  };
  const classes = classNames('viki-input', className, {
    [`viki-input-${size}`]: size,
    'viki-input-disabled': disabled,
    'viki-input-group': prefix || suffix,
    'viki-input-prefix': !!prefix,
    'viki-input-suffix': !!suffix,
    'viki-input-Icon': visibilityToggle,
  });
  return (
    <span className={classes} style={style ?? {}}>
      {prefix && <span className="viki-input-group-prefix">{prefix}</span>}
      <input
        defaultValue={defaultValue!}
        {...restprops}
        disabled={Boolean(disabled)}
        className="vike-password-input"
        type={visible ? 'password' : 'text'}
      ></input>
      {visibilityToggle && (
        <span
          className="viki-input-sufIcon"
          onClick={() => onVisibleChange()}
          style={{ cursor: 'pointer' }}
        >
          {iconRender && iconRender(visible)}
        </span>
      )}
      {suffix && <span className="viki-input-group-suffix">{suffix}</span>}
    </span>
  );
};

PassWord.defaultProps = {
  iconRender: (visible: boolean) => (
    <Icon icon={visible ? 'eye' : 'eye-slash'}></Icon>
  ),
  visibilityToggle: true,
};

export default PassWord;
