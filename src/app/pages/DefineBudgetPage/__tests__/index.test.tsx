import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { DefineBudgetPage } from '..';

const shallowRenderer = createRenderer();

describe('<DefineBudgetPage />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(<DefineBudgetPage />);
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
