import React from 'react';
import { mount } from 'enzyme';

import BubbleWorldMap from '.';

describe('<BubbleWorldMap/>', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<BubbleWorldMap />);
    wrapper.instance().createBubbleWorldMap();
    wrapper.instance().componentWillUnmount();
    wrapper.instance().container = undefined;
    wrapper.instance().componentWillUnmount();
  });

  it('should render a nice area chart', () => {
    const values = [
      { lon: 77.21, lat: 28.67, count: 678 },
      { lon: 59.57, lat: 36.27, count: 78 },
      {
        lon: 115.84,
        lat: -31.96,
        count: 8,
        status: 'danger',
      },
    ];
    const wrapper = mount(<BubbleWorldMap value="3" values={values} />);
    wrapper.instance().convertShapes();
    wrapper.setProps({ values: [...values, { lon: -62.62, lat: 8.37, count: 78 }] });
    wrapper.instance().componentWillUnmount();
  });

  it('should convert shapes', () => {
    const wrapper = mount(<BubbleWorldMap />);
    wrapper.instance().width = 800;
    expect(wrapper.instance().convertShapes()[0]).toEqual({ x: 6, y: 82 });
  });
});
