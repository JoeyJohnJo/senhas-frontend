import React from 'react';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import LandingPage from './pages/landing';
import ClientPage from './pages/client';
import AdminPage from './pages/admin';

export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/cliente" component={ClientPage} />
          <Route path="/gerente" component={AdminPage} />
        </Switch>
    </BrowserRouter>
  );
}