import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Alert from './Alert';

const closeProps = {
  onClose: jest.fn(),
  message: '标题',
  closable: true,
};

describe('test Alter component', () => {
  it('should render the correct default alert', () => {
    const wrapper = render(
      <Alert message="标题" description="123545465556558" />,
    ); // 渲染组件
    const element = wrapper.getByText('标题'); // 获取文件的文字结点
    expect(element).toBeInTheDocument(); // 判断结点是否挂载
    expect(element).toHaveClass('viki-alert-message viki-alert-title'); // 判断是否含有该类属性
  });
  it('should render the component alert can be close', () => {
    const wrapper = render(<Alert {...closeProps} />); // 渲染组件
    const element = wrapper.getByText('关闭');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('SPAN');
    fireEvent.click(element);
    expect(closeProps.onClose).toBeCalled();
  });
});
