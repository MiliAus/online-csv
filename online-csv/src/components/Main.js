"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Theme_1 = require("src/components/Theme");
//images
var Github_1 = require("src/components/Github");
var Linkedin_1 = require("src/components/Linkedin");
var Main = function () {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { className: 'main', children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("div", { className: 'main_group1', children: [(0, jsx_runtime_1.jsx)("div", { className: 'main_group1_i1', children: (0, jsx_runtime_1.jsx)("h1", { className: 'main_greeting', children: "I'm Austin Leverett" }) }), (0, jsx_runtime_1.jsx)("div", { className: 'main_group1_i2', children: (0, jsx_runtime_1.jsx)("p", { children: "A tech enthusiast who's goal is simplicity, yet thoughtful design." }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'main_group2', children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("a", { href: "https://github.com/MiliAus", children: (0, jsx_runtime_1.jsx)(Github_1.default, {}) }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("a", { href: "https://www.linkedin.com/in/all09/", children: (0, jsx_runtime_1.jsx)(Linkedin_1.default, {}) }) }), (0, jsx_runtime_1.jsx)(Theme_1.default, {})] })] }) }) }) }));
};
exports.default = Main;
