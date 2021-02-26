import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashBoard from '../components/Dashboard/pages/DashBoard';
import Home from '../components/Home';
import Auth from '../containers/Auth/Auth';
import login from '../components/Login';
import ResetPassword from '../components/ResetPassword/ResetPassword';

function index() {
  return (
    <Switch>
      <Route path="/register" component={Auth} />
      <Route exact path="/" component={Home} />

      <Route exact path="/login" component={login} />

      <Route exact path="/dashboard" component={DashBoard} />
      <Route exact path="/reset-password" component={ResetPassword} />
    </Switch>
  );
}

export default index;
