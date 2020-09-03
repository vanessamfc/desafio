import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Form from "../pages/ContainerForm";
import List from "../pages/List";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Form} />
        <Route path="/list" component={List} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
