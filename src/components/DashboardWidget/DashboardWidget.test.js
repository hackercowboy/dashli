import React from 'react';
import { mount } from 'enzyme';

import DashboardWidget from '.';
import DashboardContext from '../Dashboard/DashboardContext';

import ValueWidget from '../../widgets/ValueWidget';

describe('<DashboardWidget/>', () => {
  it('renders without crashing', () => {
    mount(<DashboardWidget />);
  });

  it('should not render title if it is undefined', () => {
    const wrapper = mount(<DashboardWidget status="success" title="Test" updated={new Date()} />);
    expect(wrapper.find('.dashboard-widget-title').length).toBe(1);
    wrapper.setProps({ title: undefined });
    expect(wrapper.find('.dashboard-widget-title').length).toBe(0);
  });

  it('should not render content or updated if status is undefined', () => {
    const wrapper = mount(<DashboardWidget component={ValueWidget} title="Test" updated={new Date()} />);
    expect(wrapper.find('.dashboard-widget-title').length).toBe(1);
    expect(wrapper.find('.dashboard-widget-content').length).toBe(0);
    expect(wrapper.find('.dashboard-widget-updated').length).toBe(0);

    wrapper.setProps({ status: 'danger' });

    expect(wrapper.find('.dashboard-widget-title').length).toBe(1);
    expect(wrapper.find('.dashboard-widget-content').length).toBe(1);
    expect(wrapper.find('.dashboard-widget-updated').length).toBe(1);
  });

  it('should not render content or updated if resizing', () => {
    const wrapper = mount(
      <DashboardContext.Provider value={{ screenResizing: true }}>
        <DashboardWidget component={ValueWidget} status="success" title="Test" updated={new Date()} />
      </DashboardContext.Provider>,
    );

    expect(wrapper.find('.dashboard-widget-title').length).toBe(1);
    expect(wrapper.find('.dashboard-widget-content').length).toBe(0);
    expect(wrapper.find('.dashboard-widget-updated').length).toBe(0);
  });
});
