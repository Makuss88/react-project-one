import React from "react";
import ReactDOM from "react-dom";

//only to 018section about redux
import { Provider } from "react-redux";
import store from "./018section-redux/store/index";

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
