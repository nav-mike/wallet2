import React from 'react';
import { ChargesTableHeader } from './ChargesTableHeader';
import { ChargesTableRows } from './ChargesTableRows';
import styles from './ChargesTable.module.css';

export interface ICharge {
  date: Date;
  id: string;
  value: number;
  type: string;
}

export interface IChargesTableProps {
  charges: ICharge[];
}

export const ChargesTable = (props: IChargesTableProps) => {
  return (
    <table className={styles['charge-table__table-component']}>
      <thead>
        <ChargesTableHeader />
      </thead>
      <ChargesTableRows charges={props.charges} />
    </table>
  );
};
