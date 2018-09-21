
import { storiesOf } from '@storybook/react';

import AreaChartWidget from '../widgets/AreaChartWidget/AreaChartWidget.story';
import ValueWidget from '../widgets/ValueWidget/ValueWidget.story';

storiesOf('Widgets', module)
  .add('AreaChartWidget', AreaChartWidget)
  .add('ValueWidget', ValueWidget);
