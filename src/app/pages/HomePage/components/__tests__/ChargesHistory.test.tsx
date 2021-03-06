import * as React from 'react';
import { render } from '@testing-library/react';
import { ChargesHistory } from '../ChargesHistory';

describe('<ChargesHistory />', () => {
  const data = [
    { x: '01.01.21', y: 23 },
    { x: '02.01.21', y: 33.2 },
  ];

  it('should render and match the snapshot', () => {
    const history = render(<ChargesHistory charges={data} />);
    expect(history.container.firstChild).toMatchSnapshot();
  });
});
