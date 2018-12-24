import React, { PureComponent } from 'react';

import DashboardContext from '../Dashboard/DashboardContext';
import LayoutContent from './LayoutContent';

class Layout extends PureComponent {
  render() {
    return (
      <DashboardContext.Consumer>
        { (context = {}) => {
          const { layouts } = context;
          return (<LayoutContent {...this.props} layouts={layouts} />);
        }}
      </DashboardContext.Consumer>
    );
  }
}

export default Layout;
