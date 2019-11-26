import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Landing from '../pages/Landing';

export default function IndexRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

