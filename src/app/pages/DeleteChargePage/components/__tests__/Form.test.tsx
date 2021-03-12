import * as React from 'react';
import { render } from '@testing-library/react';
import { Form } from '../Form';

describe('<Form />', () => {
  it('should render abd match the snapshot', () => {
    const form = render(<Form />);
    expect(form.container.firstChild).toMatchSnapshot();
  });
});
