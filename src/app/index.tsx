/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { AddChargePage } from './pages/AddChargePage';
import { DeleteChargePage } from './pages/DeleteChargePage';
import { DefineBudgetPage } from './pages/DefineBudgetPage';
import { MyBudgetsPage } from './pages/MyBudgetsPage';

const url = (path: string) => process.env.PUBLIC_URL + path;

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Wallet2"
        defaultTitle="Wallet2"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta
          name="description"
          content="Wallet2 application for budget management"
        />
      </Helmet>

      <Switch>
        <Route exact path={url('/')} component={HomePage} />
        <Route path={url('/add-charge')} component={AddChargePage} />
        <Route path={url('/delete-charge')} component={DeleteChargePage} />
        <Route path={url('/define-budget')} component={DefineBudgetPage} />
        <Route path={url('/my-budgets')} component={MyBudgetsPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
