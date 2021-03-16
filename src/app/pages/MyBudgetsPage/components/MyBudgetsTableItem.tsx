import React from 'react';
import { IBudget } from './MyBudgetsTable';

export const MyBudgetsTableItem = (props: { item: IBudget }) => {
  return (
    <tr key={`${props.item.month}-${props.item.year}`}>
      <td>{props.item.year}</td>
      <td>{props.item.month}</td>
      <td>{props.item.value}</td>
    </tr>
  );
};
