import React from 'react';
import Story from '../../stories/Story';

import {
  Dashboard,
  DashboardRow,
  DashboardColumn,
  DashboardWidget,
} from '../../components';

import Value from './Value';

export default () => (
  <Story>
    <Dashboard theme="light" locale="de_DE">
      <DashboardRow height="calc(100vh - 10px)">
        <DashboardColumn weight={2}>
          <DashboardWidget component={Value} title="Neutral" status="neutral" updated={new Date()} />
        </DashboardColumn>
        <DashboardColumn weight={2}>
          <DashboardWidget title="Success" status="success" updated={new Date()} />
          <DashboardWidget title="Info" status="info" updated={new Date()} />
        </DashboardColumn>
        <DashboardColumn weight={1}>
          <DashboardWidget title="Warning" status="warning" updated={new Date()} />
          <DashboardWidget title="Danger" status="danger" updated={new Date()} />
          <DashboardWidget title="Undefined" updated={new Date()} />
        </DashboardColumn>
      </DashboardRow>
    </Dashboard>
  </Story>
);
