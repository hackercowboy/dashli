import React from 'react';
import { mount } from 'enzyme';

import Dashboard from '.';

describe('<Dashboard/>', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Dashboard />);
    expect(wrapper.find('.dashli-dashboard-wrapper').length).toBe(1);
  });
});
