
import { storiesOf } from '@storybook/react';

import FlexText from '../components/FlexText/FlexText.story';
import Layout from '../components/Layout/Layout.story';
import Widget from '../components/Widget/Widget.story';

storiesOf('Components', module)
  .add('FlexText', FlexText)
  .add('Layout', Layout)
  .add('Widget', Widget);
