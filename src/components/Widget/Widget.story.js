import React from 'react';
import Story from '../../stories/Story';

import {
  Dashboard,
  Row,
  Column,
  Widget,
} from '..';

export default () => (
  <Story>
    <Dashboard theme="light" locale="de_DE">
      <Row height="calc(100vh - 10px)">
        <Column weight={2}>
          <Widget title="Neutral" status="neutral" updated={new Date()} />
        </Column>
        <Column weight={2}>
          <Widget title="Success" status="success" updated={new Date()} />
          <Widget title="Info" status="info" updated={new Date()} />
        </Column>
        <Column weight={1}>
          <Widget title="Warning" status="warning" updated={new Date()} />
          <Widget title="Danger" status="danger" updated={new Date()} />
          <Widget title="Undefined" updated={new Date()} />
        </Column>
      </Row>
    </Dashboard>
  </Story>
);
