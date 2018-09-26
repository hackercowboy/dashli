import React, { Component } from 'react';
import Story from '../../stories/Story';

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
    this.state = { dangerValue: 5 };
    this.updateDangerValue = this.updateDangerValue.bind(this);
  }

  componentDidMount() {
    setInterval(this.updateDangerValue, 500);
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
    const { dangerValue } = this.state;

    return (
      <Story>
        <Dashboard theme="light" locale="de_DE">
          <Row height="calc(100vh - 10px)">
            <Column weight={2}>
              <Widget component={Value} title="Neutral" status="neutral" value="8000" unit="/ms" additionalValue="Test" updated={new Date()} />
            </Column>
            <Column weight={2}>
              <Widget component={Value} title="Success" status="success" value="3.55" unit="/unit" updated={new Date()} />
              <Widget component={Value} title="Info" status="info" value="Value" additionalValue="AdditionalValue" updated={new Date()} />
            </Column>
            <Column weight={1}>
              <Widget component={Value} title="Warning" status="warning" value="ExampleValue" updated={new Date()} />
              <Widget component={Value} title="Danger" status="danger" value={dangerValue.toString()} updated={new Date()} />
              <Widget title="Undefined" updated={new Date()} />
            </Column>
          </Row>
        </Dashboard>
      </Story>
    );
  }
}

export default () => (
  <ValueStory />
);
