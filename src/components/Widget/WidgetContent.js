import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import TimeAgo from 'timeago-react';

import DashboardContext from '../Dashboard/DashboardContext';

import './Widget.css';

class WidgetContent extends PureComponent {
  static propTypes = {
    status: PropTypes.string,
    title: PropTypes.string,
    component: PropTypes.func,
    updated: PropTypes.instanceOf(Date),
    weight: PropTypes.number,
  }

  static defaultProps = {
    status: undefined,
    title: undefined,
    updated: undefined,
    component: undefined,
    weight: 1,
  }

  render() {
    const {
      title,
      component,
      updated,
      weight
    } = this.props;

    return (
      <DashboardContext.Consumer>
        { (context = {}) => {
          const { locale, screenResizing } = context;
          /* eslint-disable react/destructuring-assignment */
          const status = screenResizing ? undefined : this.props.status;
          return (
            <div className={`dashli-widget dashli-widget-${status}`} style={{ flexGrow: weight }}>
              { title ? <div className="dashli-widget-title">{title}</div> : undefined }
              { component && status ? <div className="dashli-widget-content">{ React.createElement(component, this.props)}</div> : undefined }
              { updated && status ? <div className="dashli-widget-updated"><TimeAgo datetime={updated} locale={locale} /></div> : undefined }
            </div>
          );
        }}
      </DashboardContext.Consumer>
    );
  }
}

export default WidgetContent;
