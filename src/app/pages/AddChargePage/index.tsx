import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { H1 } from 'app/components/H1';
import { FlexContainer } from 'app/components/FlexContainer';
import { ColumnsContainer } from 'app/components/ColumnsContainer';
import { Label } from 'app/components/Label';
import { FormGroup } from 'app/components/FormGroup';
import { SubmitButton } from 'app/components/SubmitButton';
import { CancelButton } from 'app/components/CancelButton';
import { Input } from 'app/components/Input';
import { Select } from 'app/components/Select';
import styles from './AddChargePage.module.css';

const classes = `${styles['left-space']} ${styles['size-12-rem']}`;

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
              <FormGroup>
                <Label>Date of charge</Label>
                <Input type="date" className={classes} />
              </FormGroup>
              <FormGroup>
                <Label>Value of charge</Label>
                <Input type="number" min="0" className={classes} />
              </FormGroup>
              <FormGroup>
                <Label>Type of charge</Label>
                <Select className={classes}>
                  <option>Food</option>
                  <option>Transport</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <SubmitButton type="button">Submit</SubmitButton>
                <CancelButton href="/">Cancel</CancelButton>
              </FormGroup>
            </form>
          </ColumnsContainer>
        </FlexContainer>
      </PageWrapper>
    </>
  );
}
