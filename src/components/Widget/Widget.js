import React, { PureComponent } from 'react';
import WidgetContent from './WidgetContent';

class Widget extends PureComponent {
  render() {
    return (
      <WidgetContent {...this.props} />
    );
  }
}

export default Widget;
