import React from 'react';
import { mount } from 'enzyme';

import ColumnChart from '.';

describe('<ColumnChart/>', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<ColumnChart />);
    expect(wrapper.find('.dashli-column-chart').length).toEqual(1);
  });

  it('should render a nice column chart', () => {
    const values = [
      { label: 'Foo', value: 678 },
      { label: 'Bar', value: 843 },
    ];
    const wrapper = mount(<ColumnChart values={values} />);
    wrapper.setState({ height: 500, width: 1000 });
    wrapper.setProps({
      values: [
        { label: 'Foo', value: 278 },
        { label: 'Bar', value: 8943 },
      ],
    });
    expect(wrapper.find('.dashli-column-chart').length).toEqual(1);
    expect(wrapper.find('.dashli-column-chart-item-value').length).toEqual(2);
  });
});
