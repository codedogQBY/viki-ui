import React from 'react';
import classNames from 'classnames';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

export type ThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'
  | 'light'
  | 'dark';

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps;
  style?: React.CSSProperties;
  className?: string;
}

const Icon: React.FC<IconProps> = props => {
  const { style, className, theme, ...restProps } = props;
  const classes = classNames('viki-icon', className, {
    [`icon-${theme}`]: theme,
  });
  return (
    <span className={classes} style={style ?? {}}>
      <FontAwesomeIcon {...restProps} />
    </span>
  );
};

export default Icon;
