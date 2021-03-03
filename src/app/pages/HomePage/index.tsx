import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Wallet2</title>
        <meta
          name="Wallet2 application for budget management"
          content="The application for budget management"
        />
      </Helmet>
    </>
  );
}
