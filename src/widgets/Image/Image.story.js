import React, { Component } from 'react';
import { Story, StoryContext } from '../../stories';

import {
  Dashboard,
  Row,
  Column,
  Widget,
} from '../../components';

import Image from './Image';

class ImageStory extends Component {
  render() {
    return (
      <Story title="Image">
        <StoryContext.Consumer>
          { context => (
            <Dashboard theme={context.theme}>
              <Row height="calc(100vh - 50px)">
                <Column weight={1}>
                  <Widget component={Image} title="Warning" status="neutral" src="https://picsum.photos/1024/800/?random&i=1" updated={new Date()} />
                  <Widget component={Image} title="success" status="neutral" src="https://picsum.photos/1024/800/?random&i=2" updated={new Date()} />
                  <Widget weight={2.5} component={Image} status="neutral" title="Danger" src="https://picsum.photos/1024/800/?random&i=3" updated={new Date()} />
                </Column>
                <Column weight={2}>
                  <Row weight={5}>
                    <Widget component={Image} title="Neutral" status="neutral" src="https://picsum.photos/1024/800/?random&i=4" updated={new Date()} />
                  </Row>
                  <Row weight={1}>
                    <Widget component={Image} title="Info" status="neutral" src="https://picsum.photos/1024/800/?random&i=5" updated={new Date()} />
                  </Row>
                </Column>
              </Row>
            </Dashboard>
          )}
        </StoryContext.Consumer>
      </Story>
    );
  }
}

export default () => (
  <ImageStory />
);
