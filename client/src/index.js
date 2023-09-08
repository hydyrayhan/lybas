import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import i18n from "./common/LangConfig";

import { store } from "./redux/app/store";
import { Provider } from "react-redux";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);