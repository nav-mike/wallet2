import * as React from 'react';
import { render } from '@testing-library/react';
import { CancelButton } from '..';

describe('<CancelButton />', () => {
  it('should be render and match the snapshot', () => {
    const button = render(<CancelButton />);
    expect(button.container.firstChild).toMatchSnapshot();
  });
});
