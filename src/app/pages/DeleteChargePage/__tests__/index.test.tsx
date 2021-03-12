import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { DeleteChargePage } from '..';

const shallowRenderer = createRenderer();

describe('<DeleteChargePage />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(<DeleteChargePage />);
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
