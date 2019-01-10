import React, { Component } from 'react';
import faker from 'faker';

import { Story, StoryContext } from '../../stories';

import {
  Dashboard,
  Row,
  Column,
  Widget,
} from '../../components';

import ColumnChart from './ColumnChart';

const statuses = [
  'danger',
  'warning',
  'info',
  'success',
  'neutral',
];

class ColumnChartStory extends Component {
  constructor() {
    super();
    this.updateValues = this.updateValues.bind(this);
    this.state = { values: this.createValues() };
  }

  componentDidMount() {
    this.updateValues();
    this.interval = setInterval(this.updateValues, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  createValues() {
    const numberOfValues = Math.max(4, Math.floor(Math.random() * 7));
    const values = [];
    for (let i = 1; i <= numberOfValues; i += 1) {
      values.push({
        label: faker.address.country(),
        value: Math.floor(Math.random() * 50),
        status: statuses[Math.floor(Math.random() * (statuses.length - 1))],
      });
    }
    return values;
  }

  updateValues() {
    this.setState({ values: this.createValues(), updated: new Date() });
  }

  render() {
    const { values, updated } = this.state;

    return (
      <Story title="Column Chart">
        <StoryContext.Consumer>
          { context => (
            <Dashboard theme={context.theme}>
              <Row height="calc(100vh - 50px)">
                <Column weight={1}>
                  <Widget component={ColumnChart} title="Warning" status="warning" values={values} updated={updated} />
                  <Widget component={ColumnChart} title="success" status="success" values={values} updated={updated} />
                  <Widget component={ColumnChart} title="Danger" status="danger" values={values} updated={updated} />
                </Column>
                <Column weight={2}>
                  <Widget
                    component={ColumnChart}
                    title="neutral"
                    status="neutral"
                    values={values}
                    updated={updated}
                  />
                  <Widget component={ColumnChart} title="Info" status="info" values={values} updated={updated} />
                </Column>
              </Row>
            </Dashboard>
          )}
        </StoryContext.Consumer>
      </Story>);
  }
}

export default () => (
  <ColumnChartStory />
);
