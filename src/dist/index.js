"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var NavBar_1 = require("./NavBar");
var Content_1 = require("./Content");
require("./index.css");
react_dom_1["default"].render(react_1["default"].createElement(react_1["default"].Fragment, null,
    react_1["default"].createElement(NavBar_1["default"], null),
    react_1["default"].createElement(Content_1["default"], null)), document.getElementById("root"));
