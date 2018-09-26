import React from 'react';
import { mount } from 'enzyme';

import Layout from '.';
import DashboardContext from '../Dashboard/DashboardContext';

describe('<Layout/>', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Layout />);
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
        <Layout target="desktop">
          <div id="desktop" />
        </Layout>
        <Layout target="tablet">
          <div id="tablet" />
        </Layout>
      </DashboardContext.Provider>,
    );

    expect(wrapper.find('#desktop').length).toBe(0);
    expect(wrapper.find('#tablet').length).toBe(1);
  });
});
