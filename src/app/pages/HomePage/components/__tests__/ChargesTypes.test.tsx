import * as React from 'react';
import { render } from '@testing-library/react';
import { ChargesTypes } from '../ChargesTypes';

describe('<ChargesTypes />', () => {
  const charges = [
    { x: 'Food', y: 23 },
    { x: 'Transport', y: 55.2 },
  ];

  it('should render and match the snapshot', () => {
    const types = render(<ChargesTypes charges={charges} />);
    expect(types.container.firstChild).toMatchSnapshot();
  });
});
