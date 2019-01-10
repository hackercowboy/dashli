import React, { Component } from 'react';
import { Story, StoryContext } from '../../stories';

import {
  Dashboard,
  Row,
  Column,
  Widget,
} from '../../components';

import IconChart from './IconChart';

class IconChartStory extends Component {
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
    const values = {
      gender: [
        { icon: 'fas fa-male', value: Math.floor(Math.random() * 10) },
        { icon: 'fas fa-female', value: Math.floor(Math.random() * 10) },
      ],
      os: [
        { icon: 'fab fa-apple', value: Math.floor(Math.random() * 10), status: 'danger' },
        { icon: 'fab fa-android', value: Math.floor(Math.random() * 10), status: 'warning' },
        { icon: 'fab fa-windows', value: Math.floor(Math.random() * 10), status: 'success' },
        { icon: 'fab fa-linux', value: Math.floor(Math.random() * 10), status: 'info' },
      ],
    };

    Object.keys(values).forEach((key) => {
      const total = values[key].reduce((count, value) => count + value.value, 0);
      values[key] = values[key].map(value => ({ ...value, label: `${parseInt(100 / total * value.value, 10)} %` }));
    });

    return values;
  }


  updateValues() {
    this.setState({ values: this.createValues(), updated: new Date() });
  }

  render() {
    const { values, updated } = this.state;

    return (
      <Story title="Icon Chart">
        <StoryContext.Consumer>
          { context => (
            <Dashboard theme={context.theme}>
              <Row height="calc(100vh - 50px)">
                <Column weight={1}>
                  <Widget component={IconChart} title="Warning" status="warning" values={values.gender} updated={updated} />
                  <Widget component={IconChart} title="success" status="success" values={values.gender} updated={updated} />
                  <Widget component={IconChart} title="Danger" status="danger" values={values.gender} updated={updated} />
                </Column>
                <Column weight={2}>
                  <Widget
                    component={IconChart}
                    title="neutral"
                    status="neutral"
                    values={values.os}
                    updated={updated}
                  />
                  <Widget component={IconChart} title="Info" status="info" values={values.gender} updated={updated} />
                </Column>
              </Row>
            </Dashboard>
          )}
        </StoryContext.Consumer>
      </Story>);
  }
}

export default () => (
  <IconChartStory />
);
