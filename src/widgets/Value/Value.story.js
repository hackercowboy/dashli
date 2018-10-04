import React, { Component } from 'react';
import { Story, StoryContext } from '../../stories';

import {
  Dashboard,
  Row,
  Column,
  Widget,
} from '../../components';

import Value from './Value';

class ValueStory extends Component {
  constructor() {
    super();
    this.state = { dangerValue: 5, updated: new Date() };
    this.updateDangerValue = this.updateDangerValue.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.updateDangerValue, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateDangerValue() {
    const { dangerValue } = this.state;
    if (dangerValue === 5000000) {
      this.setState({ dangerValue: 5 });
    } else {
      this.setState({ dangerValue: dangerValue * 10 });
    }
  }

  render() {
    const { dangerValue, updated } = this.state;

    return (
      <Story title="Value">
        <StoryContext.Consumer>
          { context => (
            <Dashboard theme={context.theme}>
              <Row height="calc(100vh - 10px)">
                <Column weight={2}>
                  <Widget component={Value} title="Neutral" status="neutral" value="8000" unit="/ms" additionalValue="Test" updated={updated} />
                </Column>
                <Column weight={2}>
                  <Widget component={Value} title="Success" status="success" value="3.55" unit="/unit" updated={updated} />
                  <Widget component={Value} title="Info" status="info" value="Value" additionalValue="AdditionalValue" updated={updated} />
                </Column>
                <Column weight={1}>
                  <Widget component={Value} title="Warning" status="warning" value="ExampleValue" updated={updated} />
                  <Widget component={Value} title="Danger" status="danger" value={dangerValue.toString()} updated={updated} />
                  <Widget title="Undefined" updated={updated} />
                </Column>
              </Row>
            </Dashboard>
          )}
        </StoryContext.Consumer>
      </Story>
    );
  }
}

export default () => (
  <ValueStory />
);
