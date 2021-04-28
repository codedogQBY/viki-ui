import React, { useState } from 'react';
import classNames from 'classnames';
import Icon from '../Icon/Icon';

type AlertType = 'success' | 'info' | 'warning' | 'error';

interface BaseAlertProps {
  /**
   * 指定警告提示的样式，有四种选择 `success`、`info`、`warning`、`error`
   */
  type?: AlertType;
  /**
   * 默认不显示关闭按钮
   */
  closable?: Boolean;
  /**
   * 警告提示内容
   */
  message?: String;
  /**
   * 警告提示的描述性文字介绍
   */
  description?: String;
  /**
   * 关闭时触发的回调函数
   */
  onClose?: Function;
  style?: React.CSSProperties;
  className?: string;
}

const Alert: React.FC<BaseAlertProps> = (props): React.ReactElement => {
  const [isShow, setIsShow] = useState(true);
  const {
    type,
    closable,
    message,
    description,
    className,
    onClose,
    style,
  } = props;
  const classes = classNames('viki-alert', className, {
    [`viki-alert-${type}`]: type,
  });
  const messageClass = classNames('viki-alert-message', {
    [`viki-alert-title`]: description,
  });
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    setIsShow(false);
  };
  return (
    <>
      {isShow ? (
        <div className={classes} style={style}>
          <div className="viki-alert-content">
            <div className={messageClass}>{message}</div>
            {description ? (
              <div className="viki-alert-description">{description}</div>
            ) : (
              <></>
            )}
          </div>
          {closable ? (
            <Icon icon="times" size="sm" onClick={handleClose}></Icon>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

Alert.defaultProps = {
  type: 'success',
};

export default Alert;
