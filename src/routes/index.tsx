import React from "react";

import { Switch, Redirect, BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Register";
import Edit from "../pages/Edit";
import Login from "../pages/Login";

import ProtectRouter from "./PrivateRouter";

import GlobalStyles from "../styles/global";
import RegisterUser from "../pages/RegisterUser";
import EditUser from "../pages/EditUser";

const Routes: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <ProtectRouter path="/" exact>
            <Home />
          </ProtectRouter>
          <ProtectRouter path="/register" exact>
            <Register />
          </ProtectRouter>
          <ProtectRouter path="/edit" exact>
            <Edit />
          </ProtectRouter>

          <ProtectRouter path="/register_user" exact>
            <RegisterUser />
          </ProtectRouter>
          <ProtectRouter path="/edit_user" exact>
            <EditUser />
          </ProtectRouter>
        </Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Redirect to="/login" />
      </BrowserRouter>
    </>
  );
};

export default Routes;
