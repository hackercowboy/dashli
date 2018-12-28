import React from 'react';
import { mount } from 'enzyme';

import FlexTextValue from '.';

describe('<FlexTextValue/>', () => {
  it('renders without crashing', () => {
    mount(<FlexTextValue />);
  });

  it('should update font size', () => {
    const wrapper = mount(<FlexTextValue value="5000" />);
    wrapper.instance().updateFontSize(undefined);
    wrapper.instance().updateFontSize({
      querySelector: () => ({
        offsetWidth: 500,
        offsetHeight: 200,
      }),
      offsetWidth: 200,
      offsetHeight: 100,
    });

    wrapper.update();

    let expectedStyle = {
      alignItems: 'center', fontSize: '16px', justifyContent: 'center', lineHeight: '16px',
    };

    expect(wrapper.find('.value').at(0).props().style).toEqual(expectedStyle);

    wrapper.instance().updateFontSize({
      querySelector: () => ({
        offsetWidth: 500,
        offsetHeight: 202,
      }),
      offsetWidth: 300,
      offsetHeight: 200,
    });

    wrapper.update();

    expectedStyle = {
      alignItems: 'center', fontSize: '24px', justifyContent: 'center', lineHeight: '24px',
    };
    expect(wrapper.find('.value').at(0).props().style).toEqual(expectedStyle);
  });

  it('should not render additional value if not set', () => {
    const wrapper = mount(<FlexTextValue value="5000" />);
    expect(wrapper.find('.additional-value').length).toBe(0);
  });

  it('should render additional value if set', () => {
    const wrapper = mount(<FlexTextValue value="5000" additionalValue="Test" />);
    expect(wrapper.find('.additional-value').length).toBe(2);
  });

  it('should render icon if set', () => {
    const wrapper = mount(<FlexTextValue value="5000" icon="icon icon-test" />);
    expect(wrapper.find('.icon.icon-test').length).toBe(2);
    wrapper.setProps({ additionalValue: 'Test' });
    expect(wrapper.find('.icon.icon-test').length).toBe(2);
  });

  it('should vertical align top', () => {
    const wrapper = mount(<FlexTextValue value="5000" additionalValue="Test" icon="icon icon-test" verticalAlign="top" />);
    expect(wrapper.find('.value').at(0).props().style).toEqual({
      fontSize: 'NaNpx',
      lineHeight: 'NaNpx',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexGrow: 0,
    });

    expect(wrapper.find('.additional-value').at(0).props().style).toEqual({
      fontSize: 'NaNpx',
      justifyContent: 'center',
      alignItems: 'flex-start',
    });
  });

  it('should vertical align bottom', () => {
    const wrapper = mount(<FlexTextValue value="5000" additionalValue="Test" icon="icon icon-test" verticalAlign="bottom" />);
    expect(wrapper.find('.value').at(0).props().style).toEqual({
      fontSize: 'NaNpx',
      lineHeight: 'NaNpx',
      justifyContent: 'center',
      alignItems: 'flex-end',
    });

    expect(wrapper.find('.additional-value').at(0).props().style).toEqual({
      fontSize: 'NaNpx',
      flexGrow: 0,
      justifyContent: 'center',
      alignItems: 'flex-end',
    });
  });
});
