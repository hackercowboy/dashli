import React, { PureComponent } from 'react';
import WidgetContent from './WidgetContent';

import './Widget.css';

class Widget extends PureComponent {
  render() {
    return (
      <WidgetContent {...this.props} />
    );
  }
}

export default Widget;
