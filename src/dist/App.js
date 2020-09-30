"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Wrapper = styled_components_1["default"]("div")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 80px;\n  background: #AAA;\n"], ["\n  width: 100%;\n  height: 80px;\n  background: #AAA;\n"])));
var NavBar = function () {
    return react_1["default"].createElement(Wrapper, null);
};
exports["default"] = NavBar;
var templateObject_1;
