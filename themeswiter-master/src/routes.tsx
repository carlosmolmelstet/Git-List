import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import List from './pages/List';
import NotFound from './pages/NotFound';



function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/list/:name" component={List} />
        <Route path="/404" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
