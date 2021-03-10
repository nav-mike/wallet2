import * as React from 'react';
import { render } from '@testing-library/react';
import { Select } from '..';

describe('<Select />', () => {
  it('should be render and match the snapshot', () => {
    const select = render(<Select />);
    expect(select.container.firstChild).toMatchSnapshot();
  });
});
