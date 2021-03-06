import { SubmitButton } from 'app/components/SubmitButton';
import React from 'react';
import { ICharge } from './ChargesTable';

export function ChargesTableItem(props: { item: ICharge }) {
  return (
    <tr key={props.item.id}>
      <td>{props.item.date.toLocaleDateString('en-US')}</td>
      <td>{props.item.value}</td>
      <td>{props.item.type}</td>
      <td>
        <SubmitButton>Delete</SubmitButton>
      </td>
    </tr>
  );
}
