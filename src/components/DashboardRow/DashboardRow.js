import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import './DashboardRow.css';

class DashboardColumn extends PureComponent {
  static propTypes = {
    height: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    height: 'auto',
    children: undefined,
  }

  render() {
    const { height, children } = this.props;
    return (
      <div className="dashboard-row" style={{ height }}>
        {children}
      </div>
    );
  }
}

export default DashboardColumn;
