import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { H1 } from 'app/components/H1';
import { FlexContainer } from 'app/components/FlexContainer';
import { ColumnsContainer } from 'app/components/ColumnsContainer';
import { Label } from 'app/components/Label';
import { FromGroup } from 'app/components/FormGroup';

export function AddChargePage() {
  return (
    <>
      <Helmet>
        <title>Add charge</title>
        <meta name="Add charge page" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <FlexContainer>
          <ColumnsContainer>
            <H1>Add charge</H1>
            <form>
              <FromGroup>
                <Label>Date of charge</Label>
                <input type="date" />
              </FromGroup>
              <FromGroup>
                <Label>Value of charge</Label>
                <input type="number" min="0" />
              </FromGroup>
              <FromGroup>
                <Label>Type of charge</Label>
                <select>
                  <option>Food</option>
                  <option>Transport</option>
                </select>
              </FromGroup>
              <FromGroup>
                <button type="button">Submit</button>
                <a href="/">Cancel</a>
              </FromGroup>
            </form>
          </ColumnsContainer>
        </FlexContainer>
      </PageWrapper>
    </>
  );
}
