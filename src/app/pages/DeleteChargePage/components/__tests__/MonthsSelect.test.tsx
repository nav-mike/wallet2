import * as React from 'react';
import { render } from '@testing-library/react';
import { MonthsSelect } from '../MonthsSelect';

describe('<MonthsSelect />', () => {
  it('should render and match the snapshot', () => {
    const select = render(<MonthsSelect />);
    expect(select.container.firstChild).toMatchSnapshot();
  });
});
