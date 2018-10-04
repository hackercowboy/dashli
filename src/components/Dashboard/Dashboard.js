import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import DashboardContext from './DashboardContext';

import './Dashboard.css';

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
      tv: 1920,
      desktop: 1280,
      tablet: 1024,
      phone: 0,
    },
  }

  constructor() {
    super();
    this.state = {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      screenResizing: false,
    };

    this.handleScreenResizing = this.handleScreenResizing.bind(this);
    this.handleScreenResized = this.handleScreenResized.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleScreenResizing);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleScreenResizing);
  }

  handleScreenResized() {
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      screenResizing: false,
    });
  }

  handleScreenResizing() {
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      screenResizing: true,
    });

    clearTimeout(this.screenResizeTimeout);
    this.screenResizeTimeout = setTimeout(this.handleScreenResized, 500);
  }

  render() {
    const {
      theme,
      children,
      locale,
      layouts,
    } = this.props;
    const { screenWidth, screenHeight, screenResizing } = this.state;
    const context = {
      locale,
      layouts,
      screenWidth,
      screenHeight,
      screenResizing,
    };
    return (
      <div className={`dashli-dashboard dashli-theme-${theme}`}>
        <DashboardContext.Provider value={context}>
          {children}
        </DashboardContext.Provider>
      </div>
    );
  }
}

export default Dashboard;
