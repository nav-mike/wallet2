import { Select } from 'app/components/Select';
import { SubmitButton } from 'app/components/SubmitButton';
import React from 'react';
import { Form } from './Form';
import { MonthsSelect } from './MonthsSelect';

export const SearchForm = () => {
  return (
    <Form>
      <MonthsSelect>
        <option>January</option>
        <option>February</option>
        <option>December</option>
      </MonthsSelect>
      <Select>
        <option>2020</option>
        <option>2021</option>
      </Select>
      <SubmitButton>Search</SubmitButton>
    </Form>
  );
};
