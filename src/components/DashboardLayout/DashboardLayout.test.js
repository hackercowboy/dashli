import React from 'react';
import ReactDOM from 'react-dom';
import DashboardLayout from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DashboardLayout />, div);
  ReactDOM.unmountComponentAtNode(div);
});
