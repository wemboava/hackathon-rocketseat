import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from '../pages/landing';
import SearchSchool from '../pages/SearchSchool';

export default function IndexRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={SearchSchool} />
      </Switch>
    </Router>
  );
}
