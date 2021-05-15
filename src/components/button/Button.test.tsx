import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from './Button';

// 创建被监控的mock函数
const defaultProps = {
  onClick: jest.fn(),
};
const testProps: ButtonProps = {
  btnType: 'primary',
  size: 'lg',
  className: 'class',
};

const disabledProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>); // 渲染组件
    const element = wrapper.getByText('Nice'); // 获取文件的文字结点
    expect(element).toBeInTheDocument(); // 判断结点是否挂载
    expect(element.tagName).toEqual('BUTTON'); // 判断标签名是否一致
    expect(element).toHaveClass('viki-btn viki-btn-default'); // 判断是否含有该类属性
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled(); // 该方法是否被调用
  });
  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>); // 渲染组件
    const element = wrapper.getByText('Nice'); // 获取文件的文字结点
    expect(element).toBeInTheDocument(); // 判断结点是否挂载
    expect(element).toHaveClass('viki-btn-primary viki-btn-lg class');
  });
  it('should render a link when btnType equals link and href is provide', () => {
    const wrapper = render(
      <Button btnType="link" href="https://www.baidu.com">
        Link
      </Button>,
    );
    const element = wrapper.getByText('Link');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveAttribute('href');
  });
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>); // 渲染组件
    const element = wrapper.getByText('Nice') as HTMLButtonElement; // 获取文件的文字结点
    expect(element).toBeInTheDocument(); // 判断结点是否挂载
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
