import React, { Component } from 'react';
import Story from '../../stories/Story';

import {
  Dashboard,
  Row,
  Column,
  Widget,
} from '../../components';

import FlexText from './FlexText';

class FlexTextStory extends Component {
  constructor() {
    super();
    this.state = { dangerFlexText: 5 };
    this.updateDangerFlexText = this.updateDangerFlexText.bind(this);
  }

  componentDidMount() {
    setInterval(this.updateDangerFlexText, 500);
  }

  updateDangerFlexText() {
    const { dangerFlexText } = this.state;
    if (dangerFlexText === 5000000) {
      this.setState({ dangerFlexText: 5 });
    } else {
      this.setState({ dangerFlexText: dangerFlexText * 10 });
    }
  }

  render() {
    const { dangerFlexText } = this.state;

    return (
      <Story>
        <Dashboard theme="light" locale="de_DE">
          <Row height="calc(100vh - 10px)">
            <Column weight={2}>
              <Widget component={FlexText} title="Neutral" status="neutral" FlexText="8000" unit="/ms" additionalFlexText="Test" updated={new Date()} />
            </Column>
            <Column weight={2}>
              <Widget component={FlexText} title="Success" status="success" FlexText="3.55" unit="/unit" updated={new Date()} />
              <Widget component={FlexText} title="Info" status="info" FlexText="FlexText" additionalFlexText="AdditionalFlexText" updated={new Date()} />
            </Column>
            <Column weight={1}>
              <Widget component={FlexText} title="Warning" status="warning" FlexText="ExampleFlexText" updated={new Date()} />
              <Widget component={FlexText} title="Danger" status="danger" FlexText={dangerFlexText.toString()} updated={new Date()} />
              <Widget title="Undefined" updated={new Date()} />
            </Column>
          </Row>
        </Dashboard>
      </Story>
    );
  }
}

export default () => (
  <FlexTextStory />
);
