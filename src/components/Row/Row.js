import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import './Row.css';

class Row extends PureComponent {
  static propTypes = {
    height: PropTypes.string,
    children: PropTypes.node,
    weight: PropTypes.number,
  }

  static defaultProps = {
    height: '0',
    children: undefined,
    weight: 1,
  }

  render() {
    const { height, children, weight } = this.props;
    return (
      <div className="dashli-row" style={{ height, flexGrow: weight }}>
        {children}
      </div>
    );
  }
}

export default Row;
