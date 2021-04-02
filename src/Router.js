import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Dashboard, Login, Error, PrivateRoute, AuthWrapper } from 'views';

const Router = () => {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/" exact={true}>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login" component={Login}></Route>
          <Route component={Error}></Route>
        </Switch>
      </BrowserRouter>
    </AuthWrapper>
  );
};

export default Router;
