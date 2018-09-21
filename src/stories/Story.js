
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import '../../node_modules/normalize.css/normalize.css';
import '../themes/light.css';
import '../themes/dark.css';

class Story extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: undefined,
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default Story;
