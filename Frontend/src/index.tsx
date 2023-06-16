import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';

import { BrowserRouter } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51N8oqULTz1e1vpakxAfq3mOwj7PNGsd2KLR3rzO269Zijz0voN7ER3liFQmxK2dNbiQIgGbHAMRfy9CKqM4yexV300ZEMofGIl');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

