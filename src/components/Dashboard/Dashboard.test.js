import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import Dashboard from '.';
import DashboardContext from './DashboardContext';

describe('<Dashboard/>', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Dashboard />);
    expect(wrapper.find('div').length).toBe(1);
  });

  it('should handle window resizing', () => {
    const clock = sinon.useFakeTimers();
    let dashboardContext;
    window.innerWidth = 1024;
    window.innerHeight = 768;
    const wrapper = mount(
      <Dashboard>
        <DashboardContext.Consumer>
          { (context = {}) => {
            dashboardContext = context;
          }}
        </DashboardContext.Consumer>
      </Dashboard>,
    );

    expect(dashboardContext.screenWidth).toBe(1024);
    expect(dashboardContext.screenHeight).toBe(768);
    expect(dashboardContext.screenResizing).toBeFalsy();

    window.innerWidth = 800;
    window.innerHeight = 600;

    wrapper.instance().handleScreenResizing();

    expect(dashboardContext.screenWidth).toBe(800);
    expect(dashboardContext.screenHeight).toBe(600);
    expect(dashboardContext.screenResizing).toBeTruthy();

    clock.tick(510);

    expect(dashboardContext.screenWidth).toBe(800);
    expect(dashboardContext.screenHeight).toBe(600);
    expect(dashboardContext.screenResizing).toBeFalsy();

    wrapper.instance().componentWillUnmount();
    window.innerWidth = 1024;
    window.innerHeight = 768;

    clock.restore();
  });
});
