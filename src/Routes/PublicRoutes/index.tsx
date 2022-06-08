import React, { Suspense } from "react";
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';

import Preloader from "../../Components/Preloader";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";

import { _Routes } from "../../Utils/constanst";

const PrivateRoutes: React.FC = () => {
  return <Suspense fallback={<Preloader/>}>
    <BrowserRouter>
      <Routes>
        <Route path={`${_Routes.Login}`} element={<Login/>}/>
        <Route path={`${_Routes.Register}`} element={<Register/>}/>
        <Route path="/" element={<Navigate to = {`${_Routes.Login}`}/>}/>
      </Routes>
    </BrowserRouter>
  </Suspense>
  ;
};

export default PrivateRoutes;
