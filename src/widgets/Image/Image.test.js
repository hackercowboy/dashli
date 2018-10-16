import React from 'react';
import { mount } from 'enzyme';

import Image from '.';

describe('<Image/>', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Image />);
    expect(wrapper.find('.dashli-image').props().style).toBeUndefined();
  });

  it('renders with nice image', () => {
    const wrapper = mount(<Image src="http://example.org/image.png" />);
    expect(wrapper.find('.dashli-image').props().style).not.toBeUndefined();
  });
});
