import React from 'react';

export function State({ budget, charges }) {
  return (
    <div>
      <div>{budget}</div>
      <div>{charges}</div>
    </div>
  );
}
