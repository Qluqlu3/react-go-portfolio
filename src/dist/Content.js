"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Wrapper = styled_components_1["default"]("div")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\twidth: 100%;\n\theight: 500px;\n\tbackground: #888;\n"], ["\n\twidth: 100%;\n\theight: 500px;\n\tbackground: #888;\n"])));
var Content = function () {
    return react_1["default"].createElement(Wrapper, null);
};
exports["default"] = Content;
var templateObject_1;
