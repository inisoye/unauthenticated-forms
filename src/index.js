import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GlobalStyles from './styles/GlobalStyles';
import App from './App';
import { AuthProvider } from '../src/context/authContext';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyles />
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
