import React, { Component } from 'react';
import Story from '../../stories/Story';

import {
  Dashboard,
  Row,
  Column,
  Widget,
} from '../../components';

import AreaChart from './AreaChart';

class AreaChartStory extends Component {
  constructor() {
    super();
    this.updateValue = this.updateValue.bind(this);

    const values = [100];
    for (let i = 0; i < 29; i += 1) {
      const value = values[i];
      values.push(Math.max(value + (Math.random() - 0.5) * 20, 10));
    }
    this.state = { values, value: values[29] };
  }

  componentDidMount() {
    setInterval(this.updateValue, 500);
  }

  updateValue() {
    const { values } = this.state;
    const value = Math.max(values[values.length - 1] + (Math.random() - 0.5) * 20, 10);
    this.setState({ values: [...values.slice(1), value], value });
  }

  render() {
    const { value, values } = this.state;

    return (
      <Story>
        <Dashboard theme="light" locale="de_DE">
          <Row height="calc(100vh - 10px)">
            <Column weight={3}>
              <Widget component={AreaChart} title="Neutral" status="neutral" value={value.toFixed(2)} values={values} unit="/ms" updated={new Date()} />
              <Widget weight={2} component={AreaChart} title="Success" status="success" value={value.toFixed(2)} values={values} unit="/unit" updated={new Date()} />
              <Widget weight={3} component={AreaChart} title="Info" status="info" value={value.toFixed(2)} values={values} additionalValue="Additional Value" updated={new Date()} />
            </Column>
            <Column weight={1}>
              <Widget component={AreaChart} title="Warning" status="warning" value={value.toFixed(2)} values={values} updated={new Date()} />
              <Widget component={AreaChart} title="success" status="success" value={value.toFixed(2)} values={values} updated={new Date()} />
              <Widget component={AreaChart} title="Danger" status="danger" value={value.toFixed(2)} values={values} updated={new Date()} />
              <Widget weight={2} component={AreaChart} title="neutral" status="neutral" value={value.toFixed(2)} values={values} updated={new Date()} />
            </Column>
          </Row>
        </Dashboard>
      </Story>
    );
  }
}

export default () => (
  <AreaChartStory />
);
