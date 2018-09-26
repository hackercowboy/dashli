import React, { PureComponent } from 'react';

import Value from '../Value';

import './AreaChart.css';


class AreaChart extends PureComponent {
  render() {
    return (
      <Value {...this.props} />
    );
  }
}

export default AreaChart;
