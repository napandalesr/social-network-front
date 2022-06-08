import { Row } from 'antd';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Preloader from '../../Components/Preloader';
import PrivateRoutes from '../../Routes/PrivateRoutes';

import "./style.scss";

const Layout: React.FC = () => {
  return <Suspense fallback={<Preloader/>}>
    <BrowserRouter>
      <Header/>
      <main>
        <Row>
          <PrivateRoutes/>
        </Row>
      </main>
      <Footer/>
    </BrowserRouter>
  </Suspense>;
};

export default Layout;
