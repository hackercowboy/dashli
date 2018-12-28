import React from 'react';
import Story from '../../stories/Story';

import {
  Dashboard,
  Row,
  Column,
  Widget,
} from '..';

import FlexTextValue from './FlexTextValue';

export default () => (
  <Story title="Flex Text">
    <Dashboard theme="light" locale="de_DE">
      <Row height="calc(100vh - 50px)">
        <Column weight={2}>
          <Widget component={FlexTextValue} value="Center" additionalValue="Center Center" status="neutral" icon="far fa-smile" />
        </Column>
        <Column weight={2}>
          <Widget
            component={FlexTextValue}
            value="Top Left"
            additionalValue="Top Left"
            verticalAlign="top"
            horizontalAlign="left"
            status="neutral"
            icon="far fa-smile"
          />
          <Widget
            component={FlexTextValue}
            value="Bottom Right"
            additionalValue="Bottom Right"
            verticalAlign="bottom"
            horizontalAlign="right"
            status="neutral"
            icon="far fa-smile"
          />
        </Column>
        <Column weight={1}>
          <Widget component={FlexTextValue} value="Center" status="warning" />
          <Widget component={FlexTextValue} value="Top" verticalAlign="top" status="danger" />
          <Widget component={FlexTextValue} value="Bottom" status="info" verticalAlign="bottom" />
        </Column>
      </Row>
    </Dashboard>
  </Story>
);
