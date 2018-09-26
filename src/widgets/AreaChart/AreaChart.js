import React, { PureComponent } from 'react';

import FlexText from '../../components/FlexText';

import './AreaChart.css';


class AreaChart extends PureComponent {
  render() {
    return (
      <FlexText {...this.props} />
    );
  }
}

export default AreaChart;
