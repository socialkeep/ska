//** --------- Import React and Redux modules */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store'
import App from './components/App1.jsx/index.js';

// uncomment so that webpack can bundle styles
// import styles from './scss/application.scss';


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);