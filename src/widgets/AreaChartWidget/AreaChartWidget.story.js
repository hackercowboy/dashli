import React, { Component } from 'react';
import Story from '../../stories/Story';

import {
  Dashboard,
  DashboardRow,
  DashboardColumn,
  DashboardWidget,
} from '../../components';

import AreaChartWidget from './AreaChartWidget';

class AreaChartWidgetStory extends Component {
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
          <DashboardRow height="calc(100vh - 10px)">
            <DashboardColumn weight={2}>
              <DashboardWidget component={AreaChartWidget} title="Neutral" status="neutral" value="8000" unit="/ms" updated={new Date()} />
            </DashboardColumn>
            <DashboardColumn weight={2}>
              <DashboardWidget component={AreaChartWidget} title="Success" status="success" value="3.55" unit="/unit" updated={new Date()} />
              <DashboardWidget component={AreaChartWidget} title="Info" status="info" value="Value" updated={new Date()} />
            </DashboardColumn>
            <DashboardColumn weight={1}>
              <DashboardWidget component={AreaChartWidget} title="Warning" status="warning" value="ExampleValue" updated={new Date()} />
              <DashboardWidget component={AreaChartWidget} title="Danger" status="danger" value={dangerValue.toString()} updated={new Date()} />
              <DashboardWidget title="Undefined" updated={new Date()} />
            </DashboardColumn>
          </DashboardRow>
        </Dashboard>
      </Story>
    );
  }
}

export default () => (
  <AreaChartWidgetStory />
);
