import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Register";

import GlobalStyles from "../styles/global";

const Routes: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
