import * as React from 'react';
import { render } from '@testing-library/react';
import { FlexContainer } from '..';

describe('<FlexContainer />', () => {
  it('should be render and match the snapshot', () => {
    const flex = render(<FlexContainer />);
    expect(flex.container.firstChild).toMatchSnapshot();
  });
});
