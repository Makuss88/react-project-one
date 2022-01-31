import React from 'react'
import ReactDOM from 'react-dom'

//only to 018section about redux
// import { Provider } from 'react-redux'
// import store from "./018section-redux/store/index";

//only to 001section about redux
import { StoreProvider } from './001section-TypeScript/Store.tsx'

import App from './App'

ReactDOM.render(
  // <Provider store={store}><App /></Provider>,
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root'),
)
