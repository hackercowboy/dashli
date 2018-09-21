import React from 'react';
import Story from '../../stories/Story';

import {
  Dashboard,
  DashboardRow,
  DashboardWidget,
} from '..';
import DashboardLayout from '.';

export default () => (
  <Story>
    <Dashboard theme="light">
      <DashboardLayout target="tv">
        <DashboardRow height="300px">
          <DashboardWidget title="TV" status="neutral" />
          <DashboardWidget title="TV" status="neutral" />
          <DashboardWidget title="TV" status="neutral" />
          <DashboardWidget title="TV" status="neutral" />
          <DashboardWidget title="TV" status="neutral" />
          <DashboardWidget title="TV" status="neutral" />
          <DashboardWidget title="TV" status="neutral" />
          <DashboardWidget title="TV" status="neutral" />
        </DashboardRow>
      </DashboardLayout>
      <DashboardLayout target="desktop">
        <DashboardRow height="calc(50vh - 5px)">
          <DashboardWidget title="Desktop" status="neutral" />
          <DashboardWidget title="Desktop" status="neutral" />
          <DashboardWidget title="Desktop" status="neutral" />
          <DashboardWidget title="Desktop" status="neutral" />
        </DashboardRow>
        <DashboardRow height="calc(50vh - 5px)">
          <DashboardWidget title="Desktop" status="neutral" />
          <DashboardWidget title="Desktop" status="neutral" />
          <DashboardWidget title="Desktop" status="neutral" />
          <DashboardWidget title="Desktop" status="neutral" />
        </DashboardRow>
      </DashboardLayout>
      <DashboardLayout target="tablet">
        <DashboardRow height="calc(33vh - 3px)">
          <DashboardWidget title="Tablet" status="neutral" />
          <DashboardWidget title="Tablet" status="neutral" />
          <DashboardWidget title="Tablet" status="neutral" />
        </DashboardRow>
        <DashboardRow height="calc(33vh - 3px)">
          <DashboardWidget title="Tablet" status="neutral" />
          <DashboardWidget title="Tablet" status="neutral" />
          <DashboardWidget title="Tablet" status="neutral" />
        </DashboardRow>
        <DashboardRow height="calc(34vh - 4px)">
          <DashboardWidget title="Tablet" status="neutral" />
          <DashboardWidget title="Tablet" status="neutral" />
          <DashboardWidget title="Tablet" status="neutral" />
        </DashboardRow>
      </DashboardLayout>
      <DashboardLayout target="phone">
        <DashboardRow height="300px">
          <DashboardWidget title="Phone" status="neutral" />
          <DashboardWidget title="Phone" status="neutral" />
        </DashboardRow>
        <DashboardRow height="300px">
          <DashboardWidget title="Phone" status="neutral" />
          <DashboardWidget title="Phone" status="neutral" />
        </DashboardRow>
        <DashboardRow height="300px">
          <DashboardWidget title="Phone" status="neutral" />
          <DashboardWidget title="Phone" status="neutral" />
        </DashboardRow>
        <DashboardRow height="300px">
          <DashboardWidget title="Phone" status="neutral" />
          <DashboardWidget title="Phone" status="neutral" />
        </DashboardRow>
      </DashboardLayout>
    </Dashboard>
  </Story>
);
