import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class Tooltip extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: undefined,
  }

  constructor() {
    super();
    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleScrollAndResize = this.handleScrollAndResize.bind(this);
    this.updatePosition = this.updatePosition.bind(this);

    document.addEventListener('mousedown', this.handleMouseDown);
    window.addEventListener('scroll', this.handleScrollAndResize);
    window.addEventListener('resize', this.handleScrollAndResize);

    this.state = { visible: false };
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleScrollAndResize);
    window.removeEventListener('scroll', this.handleScrollAndResize);
    document.removeEventListener('mousedown', this.handleMouseDown);
  }

  toggleTooltip(e) {
    const { visible } = this.state;
    e.stopPropagation();
    if (visible) {
      this.setState({ visible: false });
    } else {
      this.updatePosition();
    }
  }

  handleButton(button) {
    this.button = button;
  }

  handleContent(content) {
    this.content = content;
  }

  handleMouseDown(e) {
    const { visible } = this.state;
    if (visible && e.target !== this.button) {
      this.setState({ visible: false });
    }
  }

  handleScrollAndResize() {
    const { visible } = this.state;
    if (visible) {
      this.updatePosition();
    }
  }

  updatePosition() {
    /* istanbul ignore next */
    if (this.button) {
      const top = this.button.getBoundingClientRect().top + 35;
      const width = Math.min(window.innerWidth, 375) - 60;
      const left = window.innerWidth < 376 ? /* istanbul ignore next */ 15 : Math.max(15, this.button.getBoundingClientRect().left - width);
      this.setState({
        top,
        width,
        left,
        visible: true,
      });
    }
  }

  render() {
    const { children } = this.props;
    const {
      visible,
      top,
      left,
      width,
    } = this.state;

    return (
      <div className="dashli-tooltip">
        <button type="button" onClick={this.toggleTooltip} ref={this.handleButton}>i</button>
        { visible ? (<div className="dashli-tooltip-content" style={{ top, left, width }}>{children}</div>) : null }
        { visible ? (<div className="dashli-tooltip-arrow" />) : null }
      </div>
    );
  }
}

export default Tooltip;
