import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";
import "./assets/css/index.less";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import { ThemeProvider } from "styled-components";
import theme from "./assets/theme/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Suspense fallback="">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>
  // </React.StrictMode>
);
