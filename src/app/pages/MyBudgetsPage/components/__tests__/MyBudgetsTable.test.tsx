import * as React from 'react';
import { render } from '@testing-library/react';
import { MyBudgetsTable } from '../MyBudgetsTable';

describe('<MuBudgetsTable />', () => {
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
    const table = render(<MyBudgetsTable budgets={data} />);
    expect(table.container.firstChild).toMatchSnapshot();
  });
});
