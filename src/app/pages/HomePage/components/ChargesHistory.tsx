import React from 'react';
import { VictoryArea, VictoryChart } from 'victory';

type Charge = {
  x: string;
  y: number;
};

type HistoryProps = {
  charges: Charge[];
};

const style = {
  data: {
    fill: 'navy',
    fillOpacity: 0.7,
    stroke: '#c43a31',
    strokeWidth: 3,
  },
  labels: {
    fill: 'white',
  },
  axis: {
    fill: 'white',
  },
};

export function ChargesHistory(props: HistoryProps) {
  return (
    <VictoryChart>
      <VictoryArea
        data={props.charges}
        style={style}
        labels={({ datum }) => datum.y}
      />
    </VictoryChart>
  );
}
