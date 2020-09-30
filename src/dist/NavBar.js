"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var react_router_dom_1 = require("react-router-dom");
var react_router_dom_2 = require("react-router-dom");
var Wrapper = styled_components_1["default"]("div")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n  height: 80px;\n  background: #FF9900;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n  height: 80px;\n  background: #FF9900;\n"])));
var LinkBox = styled_components_1["default"]("div")(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100px;\n  height: 80px;\n  text-align: center;\n  background: #FF8800;\n  cursor: pointer;\n  a {\n    font-size: 20px;\n    font-weight: bold;\n    color: #FFF;\n    text-decoration: none\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100px;\n  height: 80px;\n  text-align: center;\n  background: #FF8800;\n  cursor: pointer;\n  a {\n    font-size: 20px;\n    font-weight: bold;\n    color: #FFF;\n    text-decoration: none\n  }\n"])));
var NavBar = function () {
    return (react_1["default"].createElement(Wrapper, null,
        react_1["default"].createElement(react_router_dom_2.BrowserRouter, null,
            react_1["default"].createElement(LinkBox, null,
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/top" }, "\u30C8\u30C3\u30D7")),
            react_1["default"].createElement(LinkBox, null,
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/details" }, "\u8A73\u7D30")))));
};
exports["default"] = NavBar;
var templateObject_1, templateObject_2;
