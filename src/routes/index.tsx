import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Form from '../pages/ContainerForm';
import List from '../pages/List';
import Home from '../pages/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/list" component={List} />
        <Route path="/add-dog" component={Form} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
