import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

import './assets/styles/globalStyles.scss';

import './utitlity/general.js';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
