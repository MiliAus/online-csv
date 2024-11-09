"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Navbar_1 = require("src/components/Navbar");
var Main_1 = require("src/components/Main");
var Exp_1 = require("src/components/Exp");
var Projects_1 = require("src/components/Projects");
var About_1 = require("src/components/About");
var Footer_1 = require("src/components/Footer");
var use_local_storage_1 = require("use-local-storage");
var App = function () {
    var defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var _a = (0, use_local_storage_1.default)('theme', defaultDark ? 'dark' : 'light'), theme = _a[0], setTheme = _a[1];
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "App", "data-theme": theme, children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsxs)("section", { children: [(0, jsx_runtime_1.jsx)("div", { className: 'main_box1', children: (0, jsx_runtime_1.jsx)(Main_1.default, {}) }), (0, jsx_runtime_1.jsx)("div", { className: 'secondary_box1', children: (0, jsx_runtime_1.jsx)(About_1.default, {}) }), (0, jsx_runtime_1.jsx)("div", { className: 'tertiary_box1', children: (0, jsx_runtime_1.jsx)(Exp_1.default, {}) }), (0, jsx_runtime_1.jsx)("div", { className: 'fourth_box1', children: (0, jsx_runtime_1.jsx)(Projects_1.default, {}) }), (0, jsx_runtime_1.jsx)("div", { className: 'fourth_box1', children: (0, jsx_runtime_1.jsx)(Footer_1.default, {}) })] })] }) }));
};
exports.default = App;
