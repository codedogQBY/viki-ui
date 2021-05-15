import React from 'react';
import {
  cleanup,
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/react';
import Menu, { MenuProps } from './Menu';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';

const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test',
};
const testVerProps: MenuProps = { defaultIndex: '0', mode: 'vertical' };
const TestMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>test2</MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>drop1</MenuItem>
      </SubMenu>
    </Menu>
  );
};
const createStyleFile = () => {
  const cssFile: string = `
  .viki-submenu{
    display:none;
  }
  .menu-open{
    display:block
  }
  `;
  const style = document.createElement('style');
  style.innerHTML = cssFile;
  return style;
};
let wrapper: RenderResult,
  menuElemnt: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;
describe('test Menu and MenuItem component', () => {
  // 测试通用函数
  beforeEach(() => {
    wrapper = render(TestMenu(testProps));
    // 动态添加样式表
    wrapper.container.append(createStyleFile());
    menuElemnt = wrapper.getByTestId('test-menu');
    activeElement = wrapper.getByText('active');
    disabledElement = wrapper.getByText('disabled');
  });
  it('should render Menu and MenuItem as default props', () => {
    expect(menuElemnt).toBeInTheDocument();
    expect(menuElemnt).toHaveClass('viki-menu test');
    expect(menuElemnt.querySelectorAll(':scope > li').length).toEqual(4);
    expect(activeElement).toHaveClass('viki-menu-item is-active');
    expect(disabledElement).toHaveClass('viki-menu-item is-disabled');
  });
  // 测试能否正常切换，且回调正确执行
  it('click item should change active and cal the right callback', () => {
    const thirdItem = wrapper.getByText('test2');
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass('is-active');
    expect(activeElement).not.toHaveClass('is-active');
    expect(testProps.onSelect).toHaveBeenCalledWith('2');
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass('is-active');
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1');
  });
  // 测试纵向Menu的情况
  it('should render vertical mode when is set to vertical', () => {
    cleanup();
    const wrapper = render(TestMenu(testVerProps));
    const menuElemnt = wrapper.getByTestId('test-menu');
    expect(menuElemnt).toHaveClass('viki-menu-vertical');
  });
  it('should show dropdown items when hover on subMenu', async () => {
    // 可以返回HTML或null
    expect(wrapper.queryByText('drop1')).toBeNull(); // 不出现
    const dropdownElement = wrapper.getByText('dropdown');
    fireEvent.mouseEnter(dropdownElement);
    await waitFor(() => {
      expect(wrapper.queryByText('drop1')?.parentElement).toHaveClass(
        'viki-submenu menu-open',
      );
    });
    fireEvent.click(wrapper.getByText('drop1'));
    expect(testProps.onSelect).toHaveBeenCalledWith('3-0');
    fireEvent.mouseLeave(dropdownElement);
    await waitFor(() => {
      expect(wrapper.queryByText('drop1')).toBeVisible();
    });
  });
  it('should vertical show vertical dropdown items when hover on subMenu', () => {
    cleanup();
    const wrapper = render(TestMenu(testVerProps));
    wrapper.container.append(createStyleFile());
    expect(wrapper.queryByText('drop1')).toBeNull();
    const dropdownElement = wrapper.getByText('dropdown');
    fireEvent.click(dropdownElement);
    expect(wrapper.queryByText('drop1')).toBeVisible();
  });
});
