import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import es_ES from 'antd/lib/locale/es_ES';

import Home from './Pages/Home';
import { store } from './Redux/Store';

import "./index.scss";
import 'antd/dist/antd.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ConfigProvider locale={es_ES}>
      <Home />
    </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
