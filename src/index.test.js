import * as dashli from '.';

it('should export all relevant components', () => {
  expect(dashli.Dashboard).toBeDefined();
  expect(dashli.Row).toBeDefined();
  expect(dashli.Column).toBeDefined();
  expect(dashli.Layout).toBeDefined();
  expect(dashli.Widget).toBeDefined();
  expect(dashli.AreaChart).toBeDefined();
  expect(dashli.Value).toBeDefined();
});
