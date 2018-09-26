import React from 'react';
import { mount } from 'enzyme';

import Value from '.';

describe('<Value/>', () => {
  it('renders without crashing', () => {
    mount(<Value />);
  });
});
