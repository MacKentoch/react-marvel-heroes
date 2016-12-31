import React from 'react';
import {
  Route,
  IndexRoute
 }                              from 'react-router';
import {
  App,
  ConnectedHome,
  ConnectedFiche
}                               from '../containers';
import {
  PageNotFound
}                               from '../views';

const Routes = () => {
  return (
    <Route path="/" component={App} >
      <IndexRoute component={ConnectedHome} />
      <Route path="/fiche/:id" component={ConnectedFiche} />
      {/* error page: */}
      <Route path="*" component={PageNotFound} />
    </Route>
  );
};

export default Routes;
