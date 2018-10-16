import React, { Component } from 'react';
import faker from 'faker';

import { Story, StoryContext } from '../../stories';

import {
  Dashboard,
  Row,
  Column,
  Widget,
} from '../../components';

import DonutChart from './DonutChart';

class DonutChartStory extends Component {
  constructor() {
    super();
    this.updateValues = this.updateValues.bind(this);
    this.state = { values: this.createValues() };
  }

  componentDidMount() {
    this.updateValues();
    this.interval = setInterval(this.updateValues, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  createValues() {
    const numberOfValues = Math.max(3, Math.floor(Math.random() * 5));
    const values = [];
    for (let i = 1; i <= numberOfValues; i += 1) {
      values.push({
        label: faker.address.country(),
        value: Math.floor(Math.random() * 100 * i),
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
      <Story title="Donut Chart">
        <StoryContext.Consumer>
          { context => (
            <Dashboard theme={context.theme}>
              <Row height="calc(100vh - 50px)">
                <Column weight={1}>
                  <Widget
                    component={DonutChart}
                    title="neutral"
                    status="neutral"
                    values={values}
                    updated={updated}
                  />
                  <Widget component={DonutChart} title="Info" status="info" values={values} updated={updated} />
                  <Widget component={DonutChart} title="Warning" status="warning" values={values} updated={updated} />
                  <Widget component={DonutChart} title="success" status="success" values={values} updated={updated} />
                  <Widget component={DonutChart} title="Danger" status="danger" values={values} updated={updated} />
                </Column>
                <Column weight={1}>
                  <Widget component={DonutChart} title="Danger" status="danger" values={values} updated={updated} />
                </Column>
                <Column weight={2}>
                  <Widget
                    component={DonutChart}
                    title="neutral"
                    status="neutral"
                    values={values}
                    updated={updated}
                  />
                  <Widget component={DonutChart} title="Info" status="info" values={values} updated={updated} />
                </Column>
              </Row>
            </Dashboard>
          )}
        </StoryContext.Consumer>
      </Story>);
  }
}

export default () => (
  <DonutChartStory />
);
