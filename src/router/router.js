import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  Home,
  Trivia
} from '../components';
import {
  WithLayout
} from '../hocs';

const Component = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/trivia">
          <Trivia />
        </Route>
      </Switch>
    </Router>
  )
};

export default WithLayout(Component);