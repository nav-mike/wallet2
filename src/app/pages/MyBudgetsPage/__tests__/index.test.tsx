import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { MyBudgetsPage } from '..';

const shallowRenderer = createRenderer();

describe('<MyBudgetsPage />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(<MyBudgetsPage />);
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
