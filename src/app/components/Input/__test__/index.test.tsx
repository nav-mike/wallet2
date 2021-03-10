import * as React from 'react';
import { render } from '@testing-library/react';
import { Input } from '..';

describe('<Input />', () => {
  it('should be render and match the snapshot', () => {
    const input = render(<Input />);
    expect(input.container.firstChild).toMatchSnapshot();
  });
});
