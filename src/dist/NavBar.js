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
var Wrapper = styled_components_1["default"]("div")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n  height: 80px;\n  background: #FF9900;\n  color: #FFF;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n  height: 80px;\n  background: #FF9900;\n  color: #FFF;\n"])));
var Title = styled_components_1["default"]("div")(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex: 1;\n  margin-left: 20px;\n  font-size: 23px;\n  font-weight: bold;\n"], ["\n  flex: 1;\n  margin-left: 20px;\n  font-size: 23px;\n  font-weight: bold;\n"])));
var LinkBox = styled_components_1["default"]("div")(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100px;\n  height: 80px;\n  text-align: center;\n  background: #FF8800;\n  cursor: pointer;\n  &:hover {\n    background: #FFAA00;\n  }\n  a {\n    font-size: 20px;\n    font-weight: bold;\n    text-decoration: none;\n    color: #FFF;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100px;\n  height: 80px;\n  text-align: center;\n  background: #FF8800;\n  cursor: pointer;\n  &:hover {\n    background: #FFAA00;\n  }\n  a {\n    font-size: 20px;\n    font-weight: bold;\n    text-decoration: none;\n    color: #FFF;\n  }\n"])));
var NavBar = function () {
    return (react_1["default"].createElement(Wrapper, null,
        react_1["default"].createElement(Title, null, "\u30B5\u30A4\u30C8\u30BF\u30A4\u30C8\u30EB"),
        react_1["default"].createElement(react_router_dom_2.BrowserRouter, null,
            react_1["default"].createElement(LinkBox, null,
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/home" }, "\u30DB\u30FC\u30E0")),
            react_1["default"].createElement(LinkBox, null,
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/details" }, "\u8A73\u7D30")))));
};
exports["default"] = NavBar;
var templateObject_1, templateObject_2, templateObject_3;
