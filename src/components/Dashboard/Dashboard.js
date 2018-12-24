import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import DashboardContext from './DashboardContext';

class Dashboard extends PureComponent {
  static propTypes = {
    theme: PropTypes.string,
    locale: PropTypes.string,
    children: PropTypes.node,
    /* eslint-disable react/forbid-prop-types */
    layouts: PropTypes.object,
  }

  static defaultProps = {
    theme: 'light',
    locale: 'en_GB',
    children: undefined,
    layouts: {
      xl: 1920,
      lg: 1680,
      md: 1280,
      sm: 1024,
      xs: 0,
    },
  }

  render() {
    const {
      theme,
      children,
      locale,
      layouts,
    } = this.props;

    const context = {
      locale,
      layouts,
    };

    return (
      <div className={`dashli-dashboard dashli-theme-${theme}`}>
        <div className="dashli-dashboard-wrapper">
          <DashboardContext.Provider value={context}>
            {children}
          </DashboardContext.Provider>
        </div>
      </div>
    );
  }
}

export default Dashboard;
