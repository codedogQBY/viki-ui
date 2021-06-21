import React, { useState } from 'react';
import classNames from 'classnames';
import Icon from '../icon/Icon';

type AlertType = 'success' | 'info' | 'warning' | 'error';

interface BaseAlertProps {
  /**
   * 指定警告提示的样式，有四种选择 `success`、`info`、`warning`、`error`,默认是info
   * @description.en-US Specify the style of the warning, there are four choices `success`、`info`、`warning`、`error`
   */
  type?: AlertType;
  /**
   * 默认不显示关闭按钮
   * @description.en-US The default does not display the close button
   */
  closable?: Boolean;
  /**
   * 警告提示内容
   * @description.en-US Warning prompt content
   */
  message?: String;
  /**
   * 警告提示的描述性文字介绍
   * @description.en-US Warning prompt descriptive text
   */
  description?: String;
  /**
   * 关闭时触发的回调函数
   * @description.en-US Closing triggered the callback function
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
        <div className={classes} style={style ?? {}}>
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
