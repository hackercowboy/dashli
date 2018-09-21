import React from 'react';
import ReactDOM from 'react-dom';
import DashboardWidget from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DashboardWidget />, div);
  ReactDOM.unmountComponentAtNode(div);
});
