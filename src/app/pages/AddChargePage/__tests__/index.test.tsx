import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { AddChargePage } from '..';

const shallowRenderer = createRenderer();

describe('<AddChargePage />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(<AddChargePage />);
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
