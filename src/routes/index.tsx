import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Form from '../pages/ContainerForm';
import List from '../pages/List';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/">
          <Navbar />
          <Switch>
            <Route path="/list" component={List} />
            <Route path="/add-dog" component={Form} />
          </Switch>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
