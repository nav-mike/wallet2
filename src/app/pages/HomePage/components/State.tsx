import React from 'react';
import { VictoryPie } from 'victory';

const chartStyles = {
  labels: {
    fontSize: 25,
    fill: (t: any): string => {
      const styles = { Budget: 'tomato', Charges: 'navy' };
      return styles[t.datum.xName];
    },
  },
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
    <VictoryPie
      data={data}
      colorScale={['tomato', 'navy']}
      style={chartStyles}
    />
  );
}
