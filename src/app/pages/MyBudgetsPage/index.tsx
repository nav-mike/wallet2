import React from 'react';
import { ColumnsContainer } from 'app/components/ColumnsContainer';
import { FlexContainer } from 'app/components/FlexContainer';
import { H1 } from 'app/components/H1';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { Helmet } from 'react-helmet-async';

export const MyBudgetsPage = () => {
  return (
    <>
      <Helmet>
        <title>My budgets</title>
        <meta name="My budgets" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <FlexContainer>
          <ColumnsContainer>
            <H1>My budgets</H1>
          </ColumnsContainer>
        </FlexContainer>
      </PageWrapper>
    </>
  );
};
