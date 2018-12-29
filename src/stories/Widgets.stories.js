
import { storiesOf } from '@storybook/react';

import AreaChart from '../widgets/AreaChart/AreaChart.story';
import BarChart from '../widgets/BarChart/BarChart.story';
import BubbleWorldMap from '../widgets/BubbleWorldMap/BubbleWorldMap.story';
import ColumnChart from '../widgets/ColumnChart/ColumnChart.story';
import DonutChart from '../widgets/DonutChart/DonutChart.story';
import GaugeChart from '../widgets/GaugeChart/GaugeChart.story';
import Image from '../widgets/Image/Image.story';
import Value from '../widgets/Value/Value.story';

storiesOf('Widgets', module)
  .add('AreaChart', AreaChart)
  .add('BarChart', BarChart)
  .add('BubbleWorldMap', BubbleWorldMap)
  .add('ColumnChart', ColumnChart)
  .add('GaugeChart', GaugeChart)
  .add('DonutChart', DonutChart)
  .add('Image', Image)
  .add('Value', Value);
