import React from 'react';
import ReactDOM from 'react-dom';
import AreaChart from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AreaChart />, div);
  ReactDOM.unmountComponentAtNode(div);
});
