import React from 'react';
import { mount } from 'enzyme';

import AreaChart from '.';

describe('<AreaChart/>', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<AreaChart />);
    wrapper.instance().createAreaChart();
    wrapper.instance().componentWillUnmount();
  });

  it('should render a nice area chart', () => {
    const wrapper = mount(<AreaChart value="3" values={[1, 2, 3]} />);
    wrapper.setProps({ value: '4' });
    wrapper.setProps({ value: '4', values: [2, 3, 4] });
    wrapper.instance().componentWillUnmount();
  });
});
