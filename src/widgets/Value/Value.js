import React, { PureComponent } from 'react';

import FlexText from '../../components/FlexText';

class Value extends PureComponent {
  render() {
    return (
      <div className="dashli-value">
        <FlexText {...this.props} horizontalAlign="center" verticalAlign="center" />
      </div>
    );
  }
}

export default Value;
