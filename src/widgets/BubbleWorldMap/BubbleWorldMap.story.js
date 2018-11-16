import React, { Component } from 'react';
import { Story, StoryContext } from '../../stories';

import {
  Dashboard,
  Row,
  Column,
  Widget,
} from '../../components';

import cities from './cities';

import BubbleWorldMap from './BubbleWorldMap';

const statuses = [
  'danger',
  'warning',
  'info',
  'success',
  'neutral',
];

class BubbleWorldMapStory extends Component {
  constructor() {
    super();
    this.updateValue = this.updateValue.bind(this);

    const values = [];
    while (values.length < 25) {
      values.push({
        ...cities[Math.floor(Math.random() * cities.length)],
        count: Math.random() * (values.length ** 10),
        status: statuses[Math.floor(Math.random() * (statuses.length - 1))],
      });
    }
    this.state = { values };
  }

  componentDidMount() {
    this.interval = setInterval(this.updateValue, 200);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateValue() {
    const { values } = this.state;
    const value = {
      ...cities[Math.floor(Math.random() * cities.length)],
      count: Math.random() * ((Math.random() * 25) ** 10),
      status: statuses[Math.floor(Math.random() * (statuses.length - 1))],
    };
    this.setState({ values: [...values.slice(1), value] });
  }

  render() {
    const { values } = this.state;

    return (
      <Story title="Bubble World Map">
        <StoryContext.Consumer>
          { context => (
            <Dashboard theme={context.theme}>
              <Row height="calc(100vh - 50px)">
                <Column weight={1}>
                  <Widget component={BubbleWorldMap} title="Warning" status="warning" values={[{ lon: -73.94, lat: 40.67, count: 100 }]} updated={new Date()} />
                  <Widget component={BubbleWorldMap} title="success" status="success" values={(values.map(v => ({ ...v, status: 'neutral' })))} updated={new Date()} />
                  <Widget weight={2.5} component={BubbleWorldMap} title="Danger" status="danger" updated={new Date()} />
                </Column>
                <Column weight={2}>
                  <Row weight={5}>
                    <Widget component={BubbleWorldMap} title="Neutral" status="neutral" values={values} unit="/ms" updated={new Date()} />
                  </Row>
                  <Row weight={1}>
                    <Widget component={BubbleWorldMap} title="Info" status="info" values={(values.map(v => ({ ...v, status: 'neutral' })))} unit="/unit" updated={new Date()} />
                  </Row>
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
  <BubbleWorldMapStory />
);
