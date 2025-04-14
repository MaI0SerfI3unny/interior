import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import { LandingPage } from './landing/LandingPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);

reportWebVitals();
