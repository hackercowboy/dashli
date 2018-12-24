import PropTypes from 'prop-types';
import { PureComponent } from 'react';

class LayoutContent extends PureComponent {
  static propTypes = {
    /* eslint-disable react/forbid-prop-types */
    layouts: PropTypes.object,
    target: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    layouts: undefined,
    target: undefined,
    children: undefined,
  }

  constructor() {
    super();
    this.updateVisibility = this.updateVisibility.bind(this);
    window.addEventListener('resize', this.updateVisibility);
    this.state = { visible: false };
  }

  componentDidMount() {
    this.updateVisibility();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateVisibility);
  }

  updateVisibility() {
    const { layouts, target } = this.props;
    const layout = layouts ? Object.keys(layouts).find(key => window.innerWidth >= layouts[key]) : undefined;
    const visible = target && target.split(',').map(t => t.trim()).find(t => t === layout);
    this.setState({ visible });
  }

  render() {
    const { children } = this.props;
    const { visible } = this.state;
    return visible ? children : null;
  }
}

export default LayoutContent;
