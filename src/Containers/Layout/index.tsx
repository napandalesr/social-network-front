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
    <div className="main">
      <Header/>
      <main>
        <Row>
          <PrivateRoutes/>
        </Row>
      </main>
      <Footer/>
    </div>
    </BrowserRouter>
  </Suspense>;
};

export default Layout;
