import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export function AddChargePage() {
  return (
    <>
      <Helmet>
        <title>Add charge</title>
        <meta name="Add charge page" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <form>
          <div>
            <label>Date of charge</label>
            <input type="date" />
          </div>
          <div>
            <label>Value of charge</label>
            <input type="number" min="0" />
          </div>
          <div>
            <label>Type of charge</label>
            <select>
              <option>Food</option>
              <option>Transport</option>
            </select>
          </div>
          <div>
            <button type="button">Submit</button>
            <a href="/">Cancel</a>
          </div>
        </form>
      </PageWrapper>
    </>
  );
}
