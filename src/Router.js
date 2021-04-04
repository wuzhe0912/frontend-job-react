import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Dashboard, Login, Error, PrivateRoute, AuthWrapper } from 'views';

const Router = () => {
  return (
    <AuthWrapper>
      <HashRouter>
        <Switch>
          <PrivateRoute path="/" exact={true}>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login" component={Login}></Route>
          <Route component={Error}></Route>
        </Switch>
      </HashRouter>
    </AuthWrapper>
  );
};

export default Router;
