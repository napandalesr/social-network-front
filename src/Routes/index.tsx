import React from "react";

import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const Router: React.FC = () => {
  const IsLoggedIn = (): boolean => {
    return true;
  };

  return <>
  {
    IsLoggedIn()
      ? <PrivateRoutes/>
      : <PublicRoutes/>
  }
  </>;
};

export default Router;
