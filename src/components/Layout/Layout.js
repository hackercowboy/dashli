import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import DashboardContext from '../Dashboard/DashboardContext';

class Layout extends PureComponent {
  static propTypes = {
    target: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    target: undefined,
    children: undefined,
  }

  render() {
    const { target, children } = this.props;
    return (
      <DashboardContext.Consumer>
        { (context = {}) => {
          const { layouts, screenWidth } = context;
          const layout = layouts ? Object.keys(layouts).find(key => screenWidth >= layouts[key]) : undefined;
          return layout === target ? children : undefined;
        }}
      </DashboardContext.Consumer>
    );
  }
}

export default Layout;
