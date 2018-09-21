import React from 'react';
import ReactDOM from 'react-dom';
import DashboardRow from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DashboardRow />, div);
  ReactDOM.unmountComponentAtNode(div);
});
