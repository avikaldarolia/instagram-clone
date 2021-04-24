import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FireBaseContext from "./context/firebase";
import { firebase, FieldValue } from "./lib/firebase";

ReactDOM.render(
  <FireBaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FireBaseContext.Provider>,
  document.getElementById("root")
);
