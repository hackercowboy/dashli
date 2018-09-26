import React from 'react';
import { mount } from 'enzyme';

import AreaChart from '.';

describe('<AreaChart/>', () => {
  it('renders without crashing', () => {
    mount(<AreaChart />);
  });
});
