import { ColumnsContainer } from 'app/components/ColumnsContainer';
import { FlexContainer } from 'app/components/FlexContainer';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { H1 } from 'app/components/H1';
import { ChargesTable } from './components/ChargesTable';
import { SearchForm } from './components/SearchForm';

export function DeleteChargePage() {
  const data = [
    {
      date: new Date('1995-12-17T03:24:00'),
      value: 12.23,
      type: 'food',
      id: '123-456-789',
    },
  ];
  return (
    <>
      <Helmet>
        <title>Delete charge</title>
        <meta name="Delete charge page" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <FlexContainer>
          <ColumnsContainer>
            <H1>Delete charge</H1>
            <SearchForm />
            <ChargesTable charges={data} />
          </ColumnsContainer>
        </FlexContainer>
      </PageWrapper>
    </>
  );
}
