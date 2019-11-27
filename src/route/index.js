import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import SearchSchool from '../pages/SearchSchool';

import Header from '../components/Header';

export default function IndexRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={SearchSchool} />
      </Switch>
    </Router>
  );
}
