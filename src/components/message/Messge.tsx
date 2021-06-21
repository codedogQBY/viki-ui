import React, { RefObject } from 'react';
import ReactDOM from 'react-dom';
import MessageComponent, { IOptions, MessageType } from './MessageComponent ';
interface userOptions {
  type?: MessageType;
  closable?: boolean;
  message?: string;
  duration?: number;
  onClose?: () => void;
  className?: string;
}

type userArg = userOptions | string;
class message {
  private refs = React.createRef<
    RefObject<MessageComponent> & MessageComponent
  >();
  static getInstance: () => unknown;
  private defalutOptions: IOptions = {
    message: '',
    duration: 3000,
    type: 'info',
    closable: false,
    onClose: () => {},
    className: '',
  };
  constructor() {
    this.creatMessage();
  }

  private creatMessage() {
    if (document) {
      let warp: HTMLElement | null;
      warp = document.querySelector('#warp');
      if (!warp) {
        warp = document.createElement('div');
        warp.setAttribute('id', 'warp');
        warp.style.cssText = `line-height:
              1.5;text-align:
              center;
              box-sizing: border-box;
              margin: 0;
              padding: 0;
              list-style: none;
              position: fixed;
              z-index: 1010;
              width: 100%;
              top: 0;
              left: 0;`;
        document.body.append(warp);
      }
      ReactDOM.render(<MessageComponent ref={this.refs} />, warp);
    }
  }

  success(arg: userArg) {
    let options: IOptions = { ...this.defalutOptions, type: 'success' };
    if (typeof arg === 'string') {
      options.message = arg;
    } else {
      options = { ...options, ...arg };
    }
    this.refs.current?.add(options);
  }

  info(arg: userArg) {
    let options: IOptions = { ...this.defalutOptions, type: 'info' };
    if (typeof arg === 'string') {
      options.message = arg;
    } else {
      options = { ...options, ...arg };
    }
    this.refs.current?.add(options);
  }

  error(arg: userArg) {
    let options: IOptions = { ...this.defalutOptions, type: 'error' };
    if (typeof arg === 'string') {
      options.message = arg;
    } else {
      options = { ...options, ...arg };
    }
    this.refs.current?.add(options);
  }
  warning(arg: userArg) {
    let options: IOptions = { ...this.defalutOptions, type: 'warning' };
    if (typeof arg === 'string') {
      options.message = arg;
    } else {
      options = { ...options, ...arg };
    }
    this.refs.current?.add(options);
  }

  message(arg: userArg) {
    let options: IOptions = { ...this.defalutOptions };
    if (typeof arg === 'string') {
      options.message = arg;
    } else {
      options = { ...options, ...arg };
    }
    this.refs.current?.add(options);
  }
}

message.getInstance = (function() {
  let instance: (options: IOptions) => void;
  return function() {
    if (!instance) {
      const context = new message();
      instance = context.message.bind(context);
      Object.setPrototypeOf(instance, context);
    }
    return instance;
  };
})();

export default message.getInstance();
