import React from "react";
import { useSelector } from "react-redux";

import Layout from "../Containers/Layout";
import PublicRoutes from "./PublicRoutes";

const Router: React.FC = () => {
  const IsLoggedIn = (): boolean => {
    const { login } = useSelector((state: any) => state.UserReducer);
    // eslint-disable-next-line no-prototype-builtins
    return login;
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
