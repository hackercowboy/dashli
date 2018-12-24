import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import Widget from '.';
import DashboardContext from '../Dashboard/DashboardContext';

import Value from '../../widgets/Value';

describe('<Widget/>', () => {
  it('renders without crashing', () => {
    mount(<Widget />);
  });

  it('should not render title if it is undefined', () => {
    const wrapper = mount(<Widget status="success" title="Test" updated={new Date()} />);
    expect(wrapper.find('.dashli-widget-title').length).toBe(1);
    wrapper.setProps({ title: undefined });
    expect(wrapper.find('.dashli-widget-title').length).toBe(0);
  });

  it('should not render content or updated if status is undefined', () => {
    const clock = sinon.useFakeTimers();
    const wrapper = mount(<Widget component={Value} title="Test" updated={new Date()} />);
    expect(wrapper.find('.dashli-widget-title').length).toBe(1);
    expect(wrapper.find('.dashli-widget-content').length).toBe(1);
    expect(wrapper.find('.dashli-widget-updated').length).toBe(0);

    wrapper.setProps({ status: 'danger' });

    expect(wrapper.find('.dashli-widget-title').length).toBe(1);
    expect(wrapper.find('.dashli-widget-content').length).toBe(1);
    expect(wrapper.find('.dashli-widget-updated').length).toBe(1);
    expect(wrapper.find('Value').length).toBe(0);

    wrapper.find('WidgetContent').instance().handleContentRef(false);
    wrapper.find('WidgetContent').instance().handleContentRef(true);

    clock.tick(100);

    wrapper.update();
    expect(wrapper.find('Value').length).toBe(1);
  });

  it('should not render content or updated if resizing', () => {
    const wrapper = mount(
      <DashboardContext.Provider>
        <Widget component={Value} status="success" title="Test" updated={new Date()} />
      </DashboardContext.Provider>,
    );
    wrapper.find('WidgetContent').setState({ resizing: true });
    expect(wrapper.find('.dashli-widget-title').length).toBe(1);
    expect(wrapper.find('.dashli-widget-content').length).toBe(1);
    expect(wrapper.find('.dashli-widget-updated').length).toBe(0);
  });
});
