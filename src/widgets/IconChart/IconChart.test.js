import React from 'react';
import { mount } from 'enzyme';

import IconChart from '.';

describe('<IconChart/>', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<IconChart />);
    expect(wrapper.find('.dashli-icon-chart').length).toEqual(1);
  });

  it('should render a nice column chart', () => {
    const values = [
      { label: 'Foo', icon: 'male', value: 678 },
      { label: 'Bar', icon: 'female', value: 843 },
    ];
    const wrapper = mount(<IconChart values={values} />);
    wrapper.setState({ height: 500, width: 1000 });
    wrapper.setProps({
      values: [
        {
          label: 'Foo',
          icon: 'male',
          value: 278,
          status: 'danger',
        },
        { label: 'Bar', icon: 'female', value: 8943 },
      ],
    });
    expect(wrapper.find('.dashli-icon-chart').length).toEqual(1);
    expect(wrapper.find('.dashli-icon-chart-item-visual').length).toEqual(2);
    expect(wrapper.find('.dashli-icon-chart-item-value').length).toEqual(2);
    expect(wrapper.find('.male').length).toEqual(1);
    expect(wrapper.find('.female').length).toEqual(1);
  });
});
