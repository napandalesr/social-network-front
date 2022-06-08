import React from "react";

import Layout from "../Containers/Layout";
import PublicRoutes from "./PublicRoutes";

const Router: React.FC = () => {
  const IsLoggedIn = (): boolean => {
    return false;
  };

  return <>
  {
    IsLoggedIn()
      ? <Layout/>
      : <PublicRoutes/>
  }
  </>;
};

export default Router;
