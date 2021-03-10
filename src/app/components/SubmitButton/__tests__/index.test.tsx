import * as React from 'react';
import { render } from '@testing-library/react';
import { SubmitButton } from '..';

describe('<SubmitButton />', () => {
  it('should be render and match the snapshot', () => {
    const button = render(<SubmitButton />);
    expect(button.container.firstChild).toMatchSnapshot();
  });
});
