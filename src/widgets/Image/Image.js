import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class Image extends PureComponent {
  static propTypes = {
    src: PropTypes.string,
  }

  static defaultProps = {
    src: undefined,
  }

  render() {
    const { src } = this.props;

    const style = src ? {
      backgroundImage: `url(${src})`,
    } : undefined;


    return (
      <div className="dashli-image" style={style}/>
    );
  }
}

export default Image;
