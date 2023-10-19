import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import i18n from "./common/LangConfig";

import { store } from "./redux/app/store";
import { Provider } from "react-redux";

import { ThemeProvider } from "@material-tailwind/react";





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);