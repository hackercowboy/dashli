import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import './Row.css';

class Column extends PureComponent {
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
      <div className="dashli-row" style={{ height }}>
        {children}
      </div>
    );
  }
}

export default Column;
