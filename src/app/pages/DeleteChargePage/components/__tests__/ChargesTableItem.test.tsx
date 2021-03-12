import * as React from 'react';
import { render } from '@testing-library/react';
import { ChargesTableItem } from '../ChargesTableItem';

describe('<ChargesTableItem />', () => {
  const data = { id: '123-123', date: new Date(), value: 120.21, type: 'food' };

  it('should render and match the snapshot', () => {
    const item = render(
      <table>
        <tbody>
          <ChargesTableItem item={data} />
        </tbody>
      </table>,
    );
    expect(item.container.firstChild).toMatchSnapshot();
  });
});
