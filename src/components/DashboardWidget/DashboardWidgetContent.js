import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import TimeAgo from 'timeago-react';

import DashboardContext from '../Dashboard/DashboardContext';

import './DashboardWidget.css';

class DashboardWidgetContent extends PureComponent {
  static propTypes = {
    status: PropTypes.string,
    title: PropTypes.string,
    component: PropTypes.func,
    updated: PropTypes.instanceOf(Date),
  }

  static defaultProps = {
    status: undefined,
    title: undefined,
    updated: undefined,
    component: undefined,
  }

  render() {
    const {
      title,
      component,
      updated,
    } = this.props;

    return (
      <DashboardContext.Consumer>
        { (context = {}) => {
          const { locale, screenResizing } = context;
          /* eslint-disable react/destructuring-assignment */
          const status = screenResizing ? undefined : this.props.status;
          return (
            <div className={`dashboard-widget dashboard-widget-${status}`}>
              { title ? <div className="dashboard-widget-title">{title}</div> : undefined }
              <div className="dashboard-widget-content">{ component && status ? React.createElement(component, this.props) : null}</div>
              { updated && status ? <div className="dashboard-widget-updated"><TimeAgo datetime={updated} locale={locale} /></div> : undefined }
            </div>
          );
        }}
      </DashboardContext.Consumer>
    );
  }
}

export default DashboardWidgetContent;
