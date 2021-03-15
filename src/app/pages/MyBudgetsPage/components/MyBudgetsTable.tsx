import React from 'react';

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
    <table>
      <thead></thead>
    </table>
  );
};
