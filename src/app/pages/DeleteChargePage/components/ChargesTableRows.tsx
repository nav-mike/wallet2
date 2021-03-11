import React from 'react';
import { ICharge } from './ChargesTable';
import { ChargesTableItem } from './ChargesTableItem';

export function ChargesTableRows(props: { charges: ICharge[] }) {
  const data = props.charges.map((item: ICharge) => (
    <ChargesTableItem item={item} key={item.id.toString()} />
  ));
  return <tbody>{data}</tbody>;
}
