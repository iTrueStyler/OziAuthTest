import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
//не перерендывалась копмпонента сволочь при изменении переменной , только через f5, поэтому подключил редакс, функционал
