import React from 'react';
import { mount } from 'enzyme';

import DashboardLayout from '.';
import DashboardContext from '../Dashboard/DashboardContext';

describe('<DashboardLayout/>', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<DashboardLayout />);
    expect(wrapper.find('div').length).toBe(0);
  });

  it('should select right layout', () => {
    const context = {
      layouts: {
        desktop: 1280,
        tablet: 1024,
      },
      screenWidth: 1200,
    };
    const wrapper = mount(
      <DashboardContext.Provider value={context}>
        <DashboardLayout target="desktop">
          <div id="desktop" />
        </DashboardLayout>
        <DashboardLayout target="tablet">
          <div id="tablet" />
        </DashboardLayout>
      </DashboardContext.Provider>,
    );

    expect(wrapper.find('#desktop').length).toBe(0);
    expect(wrapper.find('#tablet').length).toBe(1);
  });
});
