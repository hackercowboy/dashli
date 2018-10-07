import React from 'react';
import { mount } from 'enzyme';

import GaugeChart from '.';

describe('<GaugeChart/>', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<GaugeChart />);
    wrapper.instance().createGaugeChart();
    wrapper.instance().componentWillUnmount();
  });

  it('should render a nice area chart', () => {
    const wrapper = mount(<GaugeChart value="20" percentage={0.2} />);
    wrapper.setProps({ value: '75', percentage: 0.75 });
    wrapper.instance().componentWillUnmount();
  });
});
