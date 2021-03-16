import React from 'react';
import { IBudget, IMyBudgetsTableProps } from './MyBudgetsTable';
import { MyBudgetsTableItem } from './MyBudgetsTableItem';

export const MyBudgetsTableRows = (props: IMyBudgetsTableProps) => {
  const data = props.budgets.map((item: IBudget) => (
    <MyBudgetsTableItem item={item} key={`${item.month}-${item.year}`} />
  ));
  return <tbody>{data}</tbody>;
};
