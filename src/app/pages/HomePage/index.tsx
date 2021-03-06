import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { State } from './components/State';
import { FlexContainer } from './components/FlexContainer';
import { ColumnsContainer } from './components/ColumnsContainer';
import { ChargesHistory } from './components/ChargesHistory';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Wallet2</title>
        <meta name="Wallet2 application for budget management" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <FlexContainer>
          <ColumnsContainer>
            <State budget={500} charges={100} />
            <ChargesHistory
              charges={[
                { x: '01.01.2021', y: 2 },
                { x: '02.01.2021', y: 3 },
                { x: '03.01.2021', y: 5 },
                { x: '04.01.2021', y: 4 },
                { x: '05.01.2021', y: 6 },
              ]}
            />
          </ColumnsContainer>
        </FlexContainer>
      </PageWrapper>
    </>
  );
}
