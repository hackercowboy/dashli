import React from 'react';
import Story from '../../stories/Story';

import {
  Dashboard,
  Row,
  Column,
  Widget,
} from '..';

export default () => (
  <Story title="Widget">
    <Dashboard theme="light" locale="de_DE">
      <Row height="calc(80vh - 50px)">
        <Column weight={2}>
          <Widget
            title="Neutral"
            status="neutral"
            updated={new Date()}
            tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus lacinia pretium.
                  Pellentesque congue ex nec lorem rutrum, eu consectetur elit malesuada.
                  In leo libero, consequat eu mi vehicula, rhoncus semper orci."
          />
        </Column>
        <Column weight={2}>
          <Widget
            title="Success"
            status="success"
            updated={new Date()}
            tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus lacinia pretium.
                    Pellentesque congue ex nec lorem rutrum, eu consectetur elit malesuada.
                    In leo libero, consequat eu mi vehicula, rhoncus semper orci."
          />
          <Widget
            title="Info"
            status="info"
            updated={new Date()}
            tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus lacinia pretium.
                    Pellentesque congue ex nec lorem rutrum, eu consectetur elit malesuada.
                    In leo libero, consequat eu mi vehicula, rhoncus semper orci."
          />
        </Column>
        <Column weight={1}>
          <Widget
            title="Warning"
            status="warning"
            updated={new Date()}
            tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus lacinia pretium.
                    Pellentesque congue ex nec lorem rutrum, eu consectetur elit malesuada.
                    In leo libero, consequat eu mi vehicula, rhoncus semper orci."
          />
          <Widget
            title="Danger"
            status="danger"
            updated={new Date()}
            tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus lacinia pretium.
                    Pellentesque congue ex nec lorem rutrum, eu consectetur elit malesuada.
                    In leo libero, consequat eu mi vehicula, rhoncus semper orci."
          />
          <Widget title="Undefined" updated={new Date()} />
        </Column>
      </Row>
      <Row height="calc(20vh)">
        <Widget weight={1} title="Warning" status="warning" updated={new Date()} />
        <Widget weight={2} title="Danger" status="danger" updated={new Date()} />
        <Widget weight={1} title="Undefined" updated={new Date()} />
      </Row>
    </Dashboard>
  </Story>
);
