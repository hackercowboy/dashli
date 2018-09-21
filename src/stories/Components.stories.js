
import { storiesOf } from '@storybook/react';

import DashboardLayout from '../components/DashboardLayout/DashboardLayout.story';
import DashboardWidget from '../components/DashboardWidget/DashboardWidget.story';

storiesOf('Components', module)
  .add('DashboardLayout', DashboardLayout)
  .add('DashboardWidget', DashboardWidget);
