import React from "react";
import { Routes, Route } from 'react-router-dom';
import Register from "../../Pages/Register";

import { _Routes } from "../../Utils/constanst";

const PrivateRoutes: React.FC = () => {
  return <>
  <Routes>
    <Route path={`${_Routes.Register}`} element={<Register/>}/>
  </Routes>
  </>;
};

export default PrivateRoutes;
