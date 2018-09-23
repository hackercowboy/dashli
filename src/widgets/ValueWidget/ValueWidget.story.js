import React from 'react';
import Story from '../../stories/Story';

import {
  Dashboard,
  DashboardRow,
  DashboardColumn,
  DashboardWidget,
} from '../../components';

import ValueWidget from './ValueWidget';

export default () => (
  <Story>
    <Dashboard theme="light" locale="de_DE">
      <DashboardRow height="calc(100vh - 10px)">
        <DashboardColumn weight={2}>
          <DashboardWidget component={ValueWidget} title="Neutral" status="neutral" value="8000" unit="/ms" additionalValue="Test" updated={new Date()} />
        </DashboardColumn>
        <DashboardColumn weight={2}>
          <DashboardWidget component={ValueWidget} title="Success" status="success" value="3.55" unit="/unit" updated={new Date()} />
          <DashboardWidget component={ValueWidget} title="Info" status="info" value="Value" additionalValue="AdditionalValue" updated={new Date()} />
        </DashboardColumn>
        <DashboardColumn weight={1}>
          <DashboardWidget component={ValueWidget} title="Warning" status="warning" value="ExampleValue" updated={new Date()} />
          <DashboardWidget component={ValueWidget} title="Danger" status="danger" value="500000" updated={new Date()} />
          <DashboardWidget title="Undefined" updated={new Date()} />
        </DashboardColumn>
      </DashboardRow>
    </Dashboard>
  </Story>
);
