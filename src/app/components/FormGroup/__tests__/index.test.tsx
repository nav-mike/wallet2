import * as React from 'react';
import { render } from '@testing-library/react';
import { FormGroup } from '..';

describe('<FormGroup />', () => {
  it('should be render and match the snapshot', () => {
    const group = render(<FormGroup />);
    expect(group.container.firstChild).toMatchSnapshot();
  });
});
