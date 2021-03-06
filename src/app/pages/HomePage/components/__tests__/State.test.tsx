import * as React from 'react';
import { render } from '@testing-library/react';
import { State } from '../State';

describe('<State />', () => {
  const data = { budget: 500, charges: 200 };

  it('should render and match the snapshot', () => {
    const state = render(<State {...data} />);
    expect(state.container.firstChild).toMatchSnapshot();
  });
});
