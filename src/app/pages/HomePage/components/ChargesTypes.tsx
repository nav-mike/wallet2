import React from 'react';
import { VictoryPie } from 'victory';

type ChargeType = {
  x: string;
  y: number;
};

type ChargesTypesData = {
  charges: ChargeType[];
};

export function ChargesTypes(props: ChargesTypesData) {
  return <VictoryPie data={props.charges} />;
}
