import * as dashli from '.';

it('should export all relevant components', () => {
  expect(dashli.Dashboard).toBeDefined();
  expect(dashli.DashboardRow).toBeDefined();
  expect(dashli.DashboardColumn).toBeDefined();
  expect(dashli.DashboardLayout).toBeDefined();
  expect(dashli.DashboardWidget).toBeDefined();
  expect(dashli.AreaChartWidget).toBeDefined();
  expect(dashli.ValueWidget).toBeDefined();
});
