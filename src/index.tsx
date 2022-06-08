import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import { store } from './Redux/Store';
import es_ES from 'antd/lib/locale/es_ES';

import Layout from './Containers/Layout';

import "./index.scss";
import 'antd/dist/antd.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ConfigProvider locale={es_ES}>
      <Layout />
    </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
