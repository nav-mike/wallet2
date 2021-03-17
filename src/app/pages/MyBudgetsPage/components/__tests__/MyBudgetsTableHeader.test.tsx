import { render } from '@testing-library/react';
import * as React from 'react';
import { MyBudgetsTableHeader } from '../MyBudgetsTableHeader';

describe('<MyBudgetsTableHeader />', () => {
  it('should render and match the snapshot', () => {
    const header = render(
      <table>
        <MyBudgetsTableHeader />
      </table>,
    );
    expect(header.container.firstChild).toMatchSnapshot();
  });
});
