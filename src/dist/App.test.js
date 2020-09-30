"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var NavBar_1 = require("./NavBar");
test('renders learn react link', function () {
    var getByText = react_2.render(react_1["default"].createElement(NavBar_1["default"], null)).getByText;
    var linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
