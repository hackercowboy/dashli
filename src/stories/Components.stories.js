
import { storiesOf } from '@storybook/react';

import FlexTextValue from '../components/FlexTextValue/FlexTextValue.story';
import Layout from '../components/Layout/Layout.story';
import Widget from '../components/Widget/Widget.story';

storiesOf('Components', module)
  .add('FlexTextValue', FlexTextValue)
  .add('Layout', Layout)
  .add('Widget', Widget);
