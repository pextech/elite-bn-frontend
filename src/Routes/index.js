import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Auth from '../containers/Auth/Auth';
import login from '../components/Login';

function index() {
  return (
    <Switch>
      <Route path="/register" component={Auth} />
      <Route exact path="/" component={Home} />

      <Route exact path="/login" component={login} />

    </Switch>
  );
}

export default index;
