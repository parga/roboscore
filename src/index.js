import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { IntlProvider } from "react-intl";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./configure-store";

// we read the variable __INITIAL_STATE__ which is set up by the server, this variable contains the store initial state.
const initialState = global.window && global.window.__INITIAL_STATE__;
const store = configureStore(initialState);

// We are using hydrate here to allow SSR
ReactDOM.hydrate(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
