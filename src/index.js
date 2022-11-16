import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Redux/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// import bootstrap js
import 'bootstrap/dist/js/bootstrap.bundle.min';

// import jQuery as bootstrap need it for its components that uses js to work
import $ from 'jquery'; // eslint-disable-line no-unused-vars

// import popper.js for pop ups
import Popper from 'popper.js'; // eslint-disable-line no-unused-vars

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
