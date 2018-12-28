import React, { PureComponent } from 'react';

import FlexTextValue from '../../components/FlexTextValue';

class Value extends PureComponent {
  render() {
    return (
      <div className="dashli-value">
        <FlexTextValue {...this.props} horizontalAlign="center" verticalAlign="center" />
      </div>
    );
  }
}

export default Value;
