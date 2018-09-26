
import { storiesOf } from '@storybook/react';

import AreaChart from '../widgets/AreaChart/AreaChart.story';
import Value from '../widgets/Value/Value.story';

storiesOf('Widgets', module)
  .add('AreaChart', AreaChart)
  .add('Value', Value);
