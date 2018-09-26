import React, { PureComponent } from 'react';

import ValueWidget from '../ValueWidget';

import './AreaChartWidget.css';


class AreaChartWidget extends PureComponent {
  render() {
    return (
      <ValueWidget {...this.props} />
    );
  }
}

export default AreaChartWidget;
