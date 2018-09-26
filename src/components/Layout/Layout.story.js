import React from 'react';
import Story from '../../stories/Story';

import {
  Dashboard,
  Row,
  Widget,
} from '..';
import Layout from '.';

export default () => (
  <Story>
    <Dashboard theme="light">
      <Layout target="tv">
        <Row height="300px">
          <Widget title="TV" status="neutral" />
          <Widget title="TV" status="neutral" />
          <Widget title="TV" status="neutral" />
          <Widget title="TV" status="neutral" />
          <Widget title="TV" status="neutral" />
          <Widget title="TV" status="neutral" />
          <Widget title="TV" status="neutral" />
          <Widget title="TV" status="neutral" />
        </Row>
      </Layout>
      <Layout target="desktop">
        <Row height="calc(50vh - 5px)">
          <Widget title="Desktop" status="neutral" />
          <Widget title="Desktop" status="neutral" />
          <Widget title="Desktop" status="neutral" />
          <Widget title="Desktop" status="neutral" />
        </Row>
        <Row height="calc(50vh - 5px)">
          <Widget title="Desktop" status="neutral" />
          <Widget title="Desktop" status="neutral" />
          <Widget title="Desktop" status="neutral" />
          <Widget title="Desktop" status="neutral" />
        </Row>
      </Layout>
      <Layout target="tablet">
        <Row height="calc(33vh - 3px)">
          <Widget title="Tablet" status="neutral" />
          <Widget title="Tablet" status="neutral" />
          <Widget title="Tablet" status="neutral" />
        </Row>
        <Row height="calc(33vh - 3px)">
          <Widget title="Tablet" status="neutral" />
          <Widget title="Tablet" status="neutral" />
          <Widget title="Tablet" status="neutral" />
        </Row>
        <Row height="calc(34vh - 4px)">
          <Widget title="Tablet" status="neutral" />
          <Widget title="Tablet" status="neutral" />
          <Widget title="Tablet" status="neutral" />
        </Row>
      </Layout>
      <Layout target="phone">
        <Row height="300px">
          <Widget title="Phone" status="neutral" />
          <Widget title="Phone" status="neutral" />
        </Row>
        <Row height="300px">
          <Widget title="Phone" status="neutral" />
          <Widget title="Phone" status="neutral" />
        </Row>
        <Row height="300px">
          <Widget title="Phone" status="neutral" />
          <Widget title="Phone" status="neutral" />
        </Row>
        <Row height="300px">
          <Widget title="Phone" status="neutral" />
          <Widget title="Phone" status="neutral" />
        </Row>
      </Layout>
    </Dashboard>
  </Story>
);
