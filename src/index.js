import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './styles/isandex.css';  // Import your custom CSS file
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import App from './App';

import {I18nextProvider} from "react-i18next";
import i18n from './utils/i18n';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <React.Suspense fallback="...is loading">
        <App/>
      </React.Suspense>
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

