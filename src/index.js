import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// import bootstrap js
import 'bootstrap/dist/js/bootstrap.bundle.min';

// import jQuery as bootstrap need it for its components that uses js to work
import $ from 'jquery';

// import popper.js for pop ups
import Popper from 'popper.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
