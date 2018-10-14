import React, { Component } from 'react';
import { Story, StoryContext } from '../../stories';

import {
  Dashboard,
  Row,
  Column,
  Widget,
} from '../../components';

import GaugeChart from './GaugeChart';

class GaugeChartStory extends Component {
  constructor() {
    super();
    this.updateValue = this.updateValue.bind(this);
    this.state = { value: 75, percentage: 0.75, updated: new Date() };
  }

  componentDidMount() {
    this.interval = setInterval(this.updateValue, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateValue() {
    const value = Math.floor(Math.random() * 100);
    this.setState({ value, percentage: value / 100, updated: new Date() });
  }

  render() {
    const { value, percentage, updated } = this.state;

    return (
      <Story title="Gauge Chart">
        <StoryContext.Consumer>
          { context => (
            <Dashboard theme={context.theme}>
              <Row height="calc(100vh - 50px)">
                <Column weight={1}>
                  <Widget
                    component={GaugeChart}
                    title="neutral"
                    status="neutral"
                    value={value.toFixed(0)}
                    additionalValue="Information"
                    percentage={percentage}
                    updated={updated}
                  />
                  <Widget component={GaugeChart} title="Info" status="info" value={value.toFixed(0)} percentage={percentage} updated={updated} />
                  <Widget component={GaugeChart} title="Warning" status="warning" value={value.toFixed(0)} percentage={percentage} updated={updated} />
                  <Widget component={GaugeChart} title="success" status="success" value="1000" percentage={0.75} updated={updated} />
                  <Widget component={GaugeChart} title="Danger" status="danger" value="5" percentage={0.05} updated={updated} />
                </Column>
                <Column weight={1}>
                  <Widget component={GaugeChart} title="Danger" status="danger" value={value.toFixed(0)} percentage={percentage} updated={updated} />
                </Column>
                <Column weight={2}>
                  <Widget
                    component={GaugeChart}
                    title="neutral"
                    status="neutral"
                    value={value.toFixed(0)}
                    additionalValue="Information"
                    percentage={percentage}
                    updated={updated}
                  />
                  <Widget component={GaugeChart} title="Info" status="info" value={value.toFixed(0)} unit="%" percentage={percentage} updated={updated} />
                </Column>
              </Row>
            </Dashboard>
          )}
        </StoryContext.Consumer>
      </Story>);
  }
}

export default () => (
  <GaugeChartStory />
);
