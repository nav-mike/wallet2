import * as React from 'react';
import { render } from '@testing-library/react';
import { FromGroup } from '..';

describe('<FormGroup />', () => {
  it('should be render and match the snapshot', () => {
    const group = render(<FromGroup />);
    expect(group.container.firstChild).toMatchSnapshot();
  });
});
