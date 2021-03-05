import React from 'react';
import { VictoryPie } from 'victory';
import styled from 'styled-components/macro';

const StateDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const chartStyles = {
  labels: {
    fontSize: 25,
    fill: (t: any): string => {
      const styles = { Budget: 'tomato', Charges: 'navy' };
      return styles[t.datum.xName];
    },
  },
  parent: { width: '30%' },
};

type StateProps = {
  budget: number;
  charges: number;
};

export function State(props: StateProps) {
  const { budget, charges } = props;
  const data = [
    { x: 'Budget', y: budget },
    { x: 'Charges', y: charges },
  ];
  return (
    <StateDiv>
      <VictoryPie
        data={data}
        colorScale={['tomato', 'navy']}
        style={chartStyles}
      />
    </StateDiv>
  );
}
