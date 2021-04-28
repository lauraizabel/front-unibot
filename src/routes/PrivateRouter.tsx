import React from "react";
import { Redirect, Route } from "react-router-dom";

import { isAuthenticated } from "../services/auth";

interface PrivateRouterProps {
  path: string;
  children: React.ReactNode;
  exact: boolean;
}

const PrivateRouter = ({
  path,
  children,
  exact = false,
}: PrivateRouterProps) => {
  return !isAuthenticated() ? (
    <Redirect to={`/login`} />
  ) : (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  );
};

export default PrivateRouter;
