import * as React from 'react';
import { render } from '@testing-library/react';
import { MyBudgetsTableRows } from '../MyBudgetsTableRows';

describe('<MyBudgetsTableRows />', () => {
  const data = [
    {
      month: 'January',
      year: 2021,
      value: 500,
    },
    {
      month: 'February',
      year: 2021,
      value: 500,
    },
  ];

  it('should render and match the snapshot', () => {
    const rows = render(<MyBudgetsTableRows budgets={data} />, {
      container: document.createElement('table'),
    });
    expect(rows.container.firstChild).toMatchSnapshot();
  });
});
