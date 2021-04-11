import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";

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
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
