import React, { FC } from 'react';

export type ThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'
  | 'light'
  | 'dark';

export interface ProgressProps {
  percent: number;
  strokeHidth?: number;
  showText?: boolean;
  theme?: ThemeProps;
}

const Progress: FC<ProgressProps & React.HTMLProps<HTMLLIElement>> = props => {
  return <div className="viki-progress-bar"></div>;
};
