import React, { Component } from 'react';
import classNames from 'classnames';
import Icon from '../icon/Icon';

export type MessageType = 'success' | 'info' | 'warning' | 'error';

export interface IOptions {
  type: MessageType;
  closable: boolean;
  message: string;
  duration: number;
  onClose: () => void;
  className: string;
}

interface ILayer extends IOptions {
  id: number;
  index: number;
  timer: NodeJS.Timeout;
}
export interface IState {
  id: number;
  index: number;
  messages: ILayer[];
  removeId: number;
}
class MessageComponent extends Component<unknown, IState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      id: 0,
      index: 0,
      messages: [],
      removeId: 0,
    };
  }
  add = (options: IOptions) => {
    let { id, messages, index } = this.state;
    const { message, duration, type, closable, onClose, className } = options;
    const timer = setTimeout(() => {
      this.remove(layer);
    }, duration);
    let layer: ILayer = {
      id: id++,
      index: index++,
      message,
      type,
      closable,
      className,
      onClose,
      timer,
      duration,
    };
    messages.push(layer);
    messages = messages.map((item, index) => {
      item.index = index;
      return item;
    });
    this.setState({ id, index, messages });
  };
  remove = (layer: ILayer) => {
    clearTimeout(layer.timer);
    let messages = this.state.messages.filter(item => item.id !== layer.id);
    messages = messages.map((item, index) => {
      item.index = index;
      return item;
    });
    this.setState({ index: messages.length - 1, messages, removeId: layer.id });
  };
  render() {
    const iconMap = new Map([
      ['success', 'check-circle'],
      ['error', 'times-circle'],
      ['info', 'exclamation-circle'],
      ['warning', 'exclamation-triangle'],
    ]);
    return (
      <ul style={{ listStyle: 'none' }}>
        {this.state.messages.map((item: ILayer) => (
          <li
            style={{ top: `${(item.index + 1) * 30 + item.index * 16}px` }}
            key={item.id}
            className={classNames(
              `viki-message`,
              {
                [`viki-message-${item.type}`]: item.type,
                [`viki-message-animation-${item.duration /
                  1000}`]: item.duration,
              },
              item.className,
            )}
          >
            {/*@ts-ignore*/}
            <Icon className="viki-message-icon" icon={iconMap.get(item.type)} />
            <span>{item.message}</span>
            {item.closable && (
              <Icon
                className="viki-message-closed-icon"
                icon="times"
                onClick={() => this.remove(item)}
              />
            )}
          </li>
        ))}
      </ul>
    );
  }
}

export default MessageComponent;
