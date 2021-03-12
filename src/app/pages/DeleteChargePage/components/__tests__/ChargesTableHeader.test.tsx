import * as React from 'react';
import { render } from '@testing-library/react';
import { ChargesTableHeader } from '../ChargesTableHeader';

describe('<ChargesTableHeader />', () => {
  it('should render and match the snapshot', () => {
    const header = render(
      <table>
        <thead>
          <ChargesTableHeader />
        </thead>
      </table>,
    );
    expect(header.container.firstChild).toMatchSnapshot();
  });
});
