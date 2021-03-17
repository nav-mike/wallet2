import { render } from '@testing-library/react';
import * as React from 'react';
import { MyBudgetsTableItem } from '../MyBudgetsTableItem';

describe('<MyBudgetsTableItem />', () => {
  const data = { month: 'January', year: 2012, value: 100 };

  it('should render and match the snapshot', () => {
    const item = render(
      <table>
        <tbody>
          <MyBudgetsTableItem item={data} />
        </tbody>
      </table>,
    );
    expect(item.container.firstChild).toMatchSnapshot();
  });
});
