import { CancelButton } from 'app/components/CancelButton';
import { ColumnsContainer } from 'app/components/ColumnsContainer';
import { FlexContainer } from 'app/components/FlexContainer';
import { FromGroup } from 'app/components/FormGroup';
import { H1 } from 'app/components/H1';
import { Input } from 'app/components/Input';
import { Label } from 'app/components/Label';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { SubmitButton } from 'app/components/SubmitButton';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export const DefineBudgetPage = () => {
  return (
    <>
      <Helmet>
        <title>Define budget</title>
        <meta name="Define budget page" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <FlexContainer>
          <ColumnsContainer>
            <H1>Define budget</H1>
            <form>
              <FromGroup>
                <Label>Budget value</Label>
                <Input type="number" min="0" />
              </FromGroup>
              <FromGroup>
                <SubmitButton type="button">Submit</SubmitButton>
                <CancelButton href="/">Cancel</CancelButton>
              </FromGroup>
            </form>
          </ColumnsContainer>
        </FlexContainer>
      </PageWrapper>
    </>
  );
};
