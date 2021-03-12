import * as React from 'react';
import { render } from '@testing-library/react';
import { ChargesTable } from '../ChargesTable';

describe('<ChargesTable />', () => {
  const data = [{ date: new Date(), id: '123-234', value: 120, type: 'food' }];

  it('should render and match the snapshot', () => {
    const table = render(<ChargesTable charges={data} />);
    expect(table.container.firstChild).toMatchSnapshot();
  });
});
