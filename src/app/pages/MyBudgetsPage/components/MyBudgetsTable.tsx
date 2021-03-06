import React from 'react';
import { MyBudgetsTableHeader } from './MyBudgetsTableHeader';
import styles from './MyBudgetsTable.module.css';
import { MyBudgetsTableRows } from './MyBudgetsTableRows';

export interface IBudget {
  month: string;
  year: number;
  value: number;
}

export interface IMyBudgetsTableProps {
  budgets: IBudget[];
}

export const MyBudgetsTable = (props: IMyBudgetsTableProps) => {
  return (
    <table className={styles['my-budget__table-component']}>
      <MyBudgetsTableHeader />
      <MyBudgetsTableRows budgets={props.budgets} />
    </table>
  );
};
