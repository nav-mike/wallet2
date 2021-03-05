import * as React from 'react';
import { render } from '@testing-library/react';
import { ColumnsContainer } from '../ColumnsContainer';

describe('<ColumnsContainer />', () => {
  it('should be render and match the snapshot', () => {
    const columns = render(<ColumnsContainer />);
    expect(columns.container.firstChild).toMatchSnapshot();
  });
});
