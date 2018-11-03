import React from 'react';
import { mount } from 'enzyme';

import BarChart from '.';

describe('<BarChart/>', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<BarChart />);
    wrapper.instance().createBarChart();
    wrapper.instance().componentWillUnmount();
  });

  it('should render a nice donut chart', () => {
    const values = [
      { label: 'Foo', value: 678 },
      { label: 'Bar', value: 843 },
    ];
    const wrapper = mount(<BarChart values={values} />);
    wrapper.setState({ size: 500 });
    wrapper.setProps({
      values: [
        { label: 'Foo', value: 278 },
        { label: 'Bar', value: 8943 },
      ],
    });
    wrapper.instance().componentWillUnmount();
  });
});
