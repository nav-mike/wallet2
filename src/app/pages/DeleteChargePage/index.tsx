import { ColumnsContainer } from 'app/components/ColumnsContainer';
import { FlexContainer } from 'app/components/FlexContainer';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { H1 } from 'app/components/H1';

export function DeleteChargePage() {
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
          </ColumnsContainer>
        </FlexContainer>
      </PageWrapper>
    </>
  );
}
