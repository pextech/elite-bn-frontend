import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Auth from '../containers/Auth/Auth';

function index() {
  return (
    <Switch>
      <Route path="/register" component={Auth} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default index;
