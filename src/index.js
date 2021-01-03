import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Router from "./router";

const App = (
  <Provider store={store}>
    <Router />
  </Provider>
);

const rootElement = document.getElementById('root')

ReactDOM.render(App, rootElement);
