import React from 'react';
import Story from '../../stories/Story';

import {
  Dashboard,
  Row,
  Column,
  Widget,
} from '..';

import FlexText from './FlexText';

export default () => (
  <Story title="Flex Text">
    <Dashboard theme="light" locale="de_DE">
      <Row height="calc(100vh - 50px)">
        <Column weight={2}>
          <Widget component={FlexText} value="Center" additionalValue="Center Center" title="Neutral" status="neutral" updated={new Date()} />
        </Column>
        <Column weight={2}>
          <Widget
            component={FlexText}
            value="Top Left"
            additionalValue="Top Left"
            verticalAlign="top"
            horizontalAlign="left"
            title="Neutral"
            status="neutral"
            updated={new Date()}
          />
          <Widget
            component={FlexText}
            value="Bottom Right"
            additionalValue="Bottom Right"
            verticalAlign="bottom"
            horizontalAlign="right"
            title="Neutral"
            status="neutral"
            updated={new Date()}
          />
        </Column>
        <Column weight={1}>
          <Widget component={FlexText} title="Warning" value="Center" status="warning" updated={new Date()} />
          <Widget component={FlexText} title="Danger" value="Top" verticalAlign="top" status="danger" updated={new Date()} />
          <Widget component={FlexText} title="Info" value="Bottom" status="info" verticalAlign="bottom" updated={new Date()} />
        </Column>
      </Row>
    </Dashboard>
  </Story>
);
