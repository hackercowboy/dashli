import React, { PureComponent } from 'react';
import DashboardWidgetContent from './DashboardWidgetContent';

import './DashboardWidget.css';

class DashboardWidget extends PureComponent {
  render() {
    return (
      <DashboardWidgetContent {...this.props} />
    );
  }
}

export default DashboardWidget;
