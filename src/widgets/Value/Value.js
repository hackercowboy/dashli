import React, { PureComponent } from 'react';

import FlexText from '../../components/FlexText';

import './Value.css';

class Value extends PureComponent {
  render() {
    return (
      <div className="dashli-value">
        <FlexText {...this.props} horizontalAlign="right" verticalAlign="bottom" />
      </div>
    );
  }
}

export default Value;
