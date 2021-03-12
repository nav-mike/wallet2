import * as React from 'react';
import { render } from '@testing-library/react';
import { SearchForm } from '../SearchForm';

describe('<SearchForm />', () => {
  it('should render and match the snapshot', () => {
    const form = render(<SearchForm />);
    expect(form.container.firstChild).toMatchSnapshot();
  });
});
