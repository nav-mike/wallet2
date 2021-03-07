import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { State } from './components/State';
import { FlexContainer } from './components/FlexContainer';
import { ColumnsContainer } from './components/ColumnsContainer';
import { ChargesHistory } from './components/ChargesHistory';
import { ChargesTypes } from './components/ChargesTypes';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="Home page" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <FlexContainer>
          <ColumnsContainer>
            <h1>Dashboard</h1>
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
            <ChargesTypes
              charges={[
                { x: 'Food', y: 120 },
                { x: 'Transport', y: 55 },
              ]}
            />
          </ColumnsContainer>
        </FlexContainer>
      </PageWrapper>
    </>
  );
}
