import React from 'react';
import classNames from 'classnames';

interface BaseButtonProps {
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 按钮类型
   */
  btnType?: 'primary' | 'default' | 'danger' | 'link';

  /**
   * 按钮尺寸
   */
  size?: 'lg' | 'sm';

  /**
   * 文字按钮链接
   */
  href?: string;
  /**
   * 点击事件
   */
  onClick?: (event: React.SyntheticEvent<any>) => void;

  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<BaseButtonProps> = props => {
  const {
    btnType,
    disabled,
    className,
    size,
    children,
    href,
    onClick,
    style,
    ...restProps
  } = props;

  const classes = classNames('viki-btn', className, {
    [`viki-btn-${btnType}`]: btnType,
    [`viki-btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  });

  if (btnType === 'link') {
    return (
      <a
        className={classes}
        href={href!}
        style={style ?? {}}
        {...restProps}
        onClick={onClick!}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        className={classes}
        disabled={Boolean(disabled)}
        style={style ?? {}}
        onClick={onClick!}
        {...restProps}
      >
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
};

export default Button;
