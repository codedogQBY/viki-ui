import React, { ReactNode, ReactChildren, CSSProperties, FC } from 'react';
import classNames from 'classnames';

export type CardShadowType = 'always' | 'hover' | 'never';

export interface CardProps {
  /**
   * Card的头部内容
   */
  head?: ReactNode;
  /**
   * Card的脚部
   */
  foot?: ReactNode;
  /**
   * 有无边框
   */
  bordered?: boolean;
  /**
   * 阴影方式
   */
  shadow?: CardShadowType;
  /**
   * 内容区域的style
   */
  bodyStyle?: CSSProperties;
  /**
   * 内容区域的class
   */
  bodyClass?: string;
  style?: CSSProperties;
  className?: string;
  children: ReactChildren;
}

const Card: FC<CardProps> = props => {
  const {
    head,
    foot,
    bordered,
    shadow,
    bodyClass,
    bodyStyle,
    children,
    style,
    className,
  } = props;
  const classes = classNames(
    'viki-card-box',
    {
      [`viki-card-border`]: bordered,
      [`viki-card-shadow-${shadow}`]: shadow,
    },
    className,
  );
  return (
    <div className={classes} style={style ?? {}}>
      {head && <div className="viki-card-head">{head}</div>}
      <div
        className={classNames('viki-card-body', bodyClass)}
        style={bodyStyle ?? {}}
      >
        {children}
      </div>
      {foot && <div className="viki-card-foot">{foot}</div>}
    </div>
  );
};

Card.defaultProps = {
  shadow: 'always',
  bordered: true,
};

export default Card;
