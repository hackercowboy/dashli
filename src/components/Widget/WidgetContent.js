import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import TimeAgo from 'timeago-react';

import DashboardContext from '../Dashboard/DashboardContext';
import Tooltip from '../Tooltip';

class WidgetContent extends PureComponent {
  static propTypes = {
    status: PropTypes.string,
    title: PropTypes.string,
    tooltip: PropTypes.node,
    component: PropTypes.func,
    updated: PropTypes.instanceOf(Date),
    weight: PropTypes.number,
  }

  static defaultProps = {
    status: undefined,
    title: undefined,
    tooltip: undefined,
    updated: undefined,
    component: undefined,
    weight: 1,
  }

  constructor() {
    super();
    this.handleContentRef = this.handleContentRef.bind(this);
    this.handleScreenResizing = this.handleScreenResizing.bind(this);
    this.handleScreenResized = this.handleScreenResized.bind(this);

    window.addEventListener('resize', this.handleScreenResizing);
    this.state = { initialized: false, resizing: false };
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleScreenResizing);
  }

  handleScreenResized() {
    this.setState({ resizing: false });
  }

  handleScreenResizing() {
    this.setState({ resizing: true });
    clearTimeout(this.screenResizeTimeout);
    this.screenResizeTimeout = setTimeout(this.handleScreenResized, 500);
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
      tooltip,
      component,
      updated,
      weight,
    } = this.props;

    const { initialized, resizing } = this.state;

    return (
      <DashboardContext.Consumer>
        { (context = {}) => {
          const { locale } = context;
          /* eslint-disable react/destructuring-assignment */
          const status = resizing ? undefined : this.props.status;
          return (
            <div className={`dashli-widget dashli-widget-${status}`} style={{ flex: weight }}>
              { title ? <div className="dashli-widget-title">{title}</div> : undefined }
              <div className="dashli-widget-content" ref={this.handleContentRef}>
                { component && status && initialized ? React.createElement(component, this.props) : undefined }
              </div>
              { updated && status ? <div className="dashli-widget-updated"><TimeAgo datetime={updated} locale={locale} /></div> : undefined }
              { tooltip ? <div className="dashli-widget-tooltip"><Tooltip>{tooltip}</Tooltip></div> : undefined }
            </div>
          );
        }}
      </DashboardContext.Consumer>
    );
  }
}

export default WidgetContent;
