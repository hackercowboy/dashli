import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import './Column.css';

class Column extends PureComponent {
  static propTypes = {
    weight: PropTypes.number,
    children: PropTypes.node,
  }

  static defaultProps = {
    weight: 1,
    children: undefined,
  }

  render() {
    const { weight, children } = this.props;
    return (
      <div className="dashli-column" style={{ flexGrow: weight }}>
        {children}
      </div>
    );
  }
}

export default Column;
