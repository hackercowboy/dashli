
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import StoryContext from './StoryContext';

import '../../node_modules/normalize.css/normalize.css';
import '../themes/light.css';
import '../themes/dark.css';

import './Story.css';

class Story extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: undefined,
  }

  constructor() {
    super();
    this.handleChangeTheme = this.handleChangeTheme.bind(this);
    this.state = { theme: 'light' };
  }

  handleChangeTheme(event) {
    this.setState({ theme: event.target.value });
  }

  render() {
    const { title, children } = this.props;
    const { theme } = this.state;

    const context = { theme };

    return (
      <div className={`dashli-story dashli-theme-${theme}`}>
        <div className="dashli-story-header">
          <h1>{title}</h1>
          <div className="dashli-story-theme-selection">
            Theme&nbsp;
            <select value={theme} onChange={this.handleChangeTheme}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </div>
        <StoryContext.Provider value={context}>
          {children}
        </StoryContext.Provider>
      </div>
    );
  }
}

export default Story;
