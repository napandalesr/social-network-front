import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import Home from './Pages/Home';
import { store } from './Redux/Store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>
);
