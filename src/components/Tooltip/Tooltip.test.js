import React from 'react';
import { mount } from 'enzyme';
import Tooltip from '.';

describe('<Tooltip/>', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Tooltip />);
    wrapper.instance().handleContent('content');
    wrapper.instance().updatePosition();
    wrapper.instance().componentWillUnmount();
  });

  it('should show tooltip on click button', () => {
    const wrapper = mount(<Tooltip />);
    expect(wrapper.find('.dashli-tooltip-content').length).toEqual(0);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.dashli-tooltip-content').length).toEqual(1);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.dashli-tooltip-content').length).toEqual(0);
  });

  it('should close on click outside button', () => {
    const wrapper = mount(<Tooltip />);
    wrapper.instance().handleMouseDown({ target: null });
    wrapper.instance().handleMouseDown({ target: wrapper.instance().button });
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.dashli-tooltip-content').length).toEqual(1);
    wrapper.instance().handleMouseDown({ target: undefined });
    wrapper.update();
    expect(wrapper.find('.dashli-tooltip-content').length).toEqual(0);
  });

  it('should handleScrollAndResize', () => {
    const wrapper = mount(<Tooltip />);
    wrapper.instance().handleScrollAndResize();
    wrapper.find('button').simulate('click');
    wrapper.instance().handleScrollAndResize();
  });
});
