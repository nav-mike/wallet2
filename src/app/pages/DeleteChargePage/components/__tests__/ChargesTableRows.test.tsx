import * as React from 'react';
import { render } from '@testing-library/react';
import { ChargesTableRows } from '../ChargesTableRows';

describe('<ChargesTableRows />', () => {
  const data = [
    { id: '123-123', date: new Date(), value: 120.21, type: 'food' },
  ];

  it('should render and match the snapshot', () => {
    const rows = render(<ChargesTableRows charges={data} />, {
      container: document.createElement('table'),
    });
    expect(rows.container.firstChild).toMatchSnapshot();
  });
});
