import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import Content from "./Content";

import "./index.css";

ReactDOM.render(
  <React.Fragment>
    <NavBar />
    <Content />
  </React.Fragment>,
  document.getElementById("root")
);
