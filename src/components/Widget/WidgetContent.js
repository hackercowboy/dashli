import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import TimeAgo from 'timeago-react';

import DashboardContext from '../Dashboard/DashboardContext';

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

  constructor() {
    super();
    this.state = { initialized: false };
    this.handleContentRef = this.handleContentRef.bind(this);
  }

  handleContentRef(element) {
    // FIXME: hack to fix resizing problems
    if (element) {
      setTimeout(() => {
        this.setState({ initialized: true });
      }, 10);
    }
  }

  render() {
    const {
      title,
      component,
      updated,
      weight,
    } = this.props;

    const { initialized } = this.state;

    return (
      <DashboardContext.Consumer>
        { (context = {}) => {
          const { locale, screenResizing } = context;
          /* eslint-disable react/destructuring-assignment */
          const status = screenResizing ? undefined : this.props.status;
          return (
            <div className={`dashli-widget dashli-widget-${status}`} style={{ flex: weight }}>
              { title ? <div className="dashli-widget-title">{title}</div> : undefined }
              <div className="dashli-widget-content" ref={this.handleContentRef}>
                { component && status && initialized ? React.createElement(component, this.props) : undefined }
              </div>
              { updated && status ? <div className="dashli-widget-updated"><TimeAgo datetime={updated} locale={locale} /></div> : undefined }
            </div>
          );
        }}
      </DashboardContext.Consumer>
    );
  }
}

export default WidgetContent;
