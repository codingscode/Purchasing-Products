import React from "react";
import ReactDOM from "react-dom";

import {GeneralStyle} from './tema/my_theme'
import App from "./App";

ReactDOM.render(
  <>
    <GeneralStyle/>
    <App />
  </>,
  document.getElementById("root")
);
