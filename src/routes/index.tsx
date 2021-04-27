import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Register";
import Edit from "../pages/Edit";
import Login from "../pages/Login";

import GlobalStyles from "../styles/global";
import RegisterUser from "../pages/RegisterUser";

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
          <Route path="/edit" exact>
            <Edit />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register_user" exact>
            <RegisterUser />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
