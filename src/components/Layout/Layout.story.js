import React from 'react';
import Story from '../../stories/Story';

import {
  Dashboard,
  Row,
  Widget,
} from '..';
import Layout from '.';

export default () => (
  <Story title="Layout">
    <Dashboard theme="light">
      <Layout target="xl">
        <Row height="300px">
          <Widget title="XL" status="neutral" />
          <Widget title="XL" status="neutral" />
          <Widget title="XL" status="neutral" />
          <Widget title="XL" status="neutral" />
          <Widget title="XL" status="neutral" />
          <Widget title="XL" status="neutral" />
          <Widget title="XL" status="neutral" />
          <Widget title="XL" status="neutral" />
        </Row>
      </Layout>
      <Layout target="lg">
        <Row height="calc(50vh - 30px)">
          <Widget title="LG" status="neutral" />
          <Widget title="LG" status="neutral" />
          <Widget title="LG" status="neutral" />
          <Widget title="LG" status="neutral" />
        </Row>
        <Row height="calc(50vh - 30px)">
          <Widget title="LG" status="neutral" />
          <Widget title="LG" status="neutral" />
          <Widget title="LG" status="neutral" />
          <Widget title="LG" status="neutral" />
        </Row>
      </Layout>
      <Layout target="md">
        <Row height="calc(33vh - 19px)">
          <Widget title="MD" status="neutral" />
          <Widget title="MD" status="neutral" />
          <Widget title="MD" status="neutral" />
        </Row>
        <Row height="calc(33vh - 19px)">
          <Widget title="MD" status="neutral" />
          <Widget title="MD" status="neutral" />
          <Widget title="MD" status="neutral" />
        </Row>
        <Row height="calc(34vh - 20px)">
          <Widget title="MD" status="neutral" />
          <Widget title="MD" status="neutral" />
          <Widget title="MD" status="neutral" />
        </Row>
      </Layout>
      <Layout target="sm">
        <Row height="300px">
          <Widget title="SM" status="neutral" />
          <Widget title="SM" status="neutral" />
        </Row>
        <Row height="300px">
          <Widget title="SM" status="neutral" />
          <Widget title="SM" status="neutral" />
        </Row>
        <Row height="300px">
          <Widget title="SM" status="neutral" />
          <Widget title="SM" status="neutral" />
        </Row>
        <Row height="300px">
          <Widget title="SM" status="neutral" />
          <Widget title="SM" status="neutral" />
        </Row>
      </Layout>
      <Layout target="xs">
        <Row height="300px">
          <Widget title="XS" status="neutral" />
        </Row>
        <Row height="300px">
          <Widget title="XS" status="neutral" />
        </Row>
        <Row height="300px">
          <Widget title="XS" status="neutral" />
        </Row>
        <Row height="300px">
          <Widget title="XS" status="neutral" />
        </Row>
        <Row height="300px">
          <Widget title="XS" status="neutral" />
        </Row>
        <Row height="300px">
          <Widget title="XS" status="neutral" />
        </Row>
        <Row height="300px">
          <Widget title="XS" status="neutral" />
        </Row>
        <Row height="300px">
          <Widget title="XS" status="neutral" />
        </Row>
        <Row height="300px">
          <Widget title="XS" status="neutral" />
        </Row>
      </Layout>
    </Dashboard>
  </Story>
);
