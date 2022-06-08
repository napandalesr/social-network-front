import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../../Pages/Home";

import { _Routes } from "../../Utils/constanst";

const PrivateRoutes: React.FC = () => {
  return <>
  <Routes>
    <Route path={`${_Routes.Register}`} element={<Home/>}/>
  </Routes>
  </>;
};

export default PrivateRoutes;
