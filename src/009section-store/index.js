import React from 'react';
import ReactDOM from 'react-dom';

import App from './aaa2/App';

import './index.css';
import { AuthContextProvider } from './aaa2/store/auth-context';

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById('root')
);