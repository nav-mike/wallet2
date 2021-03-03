import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { State } from './components/State';

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
      <NavBar />
      <PageWrapper>
        <State budget={500} charges={100} />
      </PageWrapper>
    </>
  );
}
