import React from 'react';
import { ChargesTableHeader } from './ChargesTableHeader';
import { ChargesTableRows } from './ChargesTableRows';

export interface ICharge {
  date: Date;
  id: string;
  value: number;
  type: string;
}

export interface IChargesTableProps {
  charges: ICharge[];
}

export function ChargesTable(props: IChargesTableProps) {
  return (
    <table>
      <thead>
        <ChargesTableHeader />
      </thead>
      <ChargesTableRows charges={props.charges} />
    </table>
  );
}
