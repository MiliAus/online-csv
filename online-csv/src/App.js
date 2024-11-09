"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
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
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "App", "data-theme": theme },
            react_1.default.createElement(Navbar_1.default, null),
            react_1.default.createElement("section", null,
                react_1.default.createElement("div", { className: 'main_box1' },
                    react_1.default.createElement(Main_1.default, null)),
                react_1.default.createElement("div", { className: 'secondary_box1' },
                    react_1.default.createElement(About_1.default, null)),
                react_1.default.createElement("div", { className: 'tertiary_box1' },
                    react_1.default.createElement(Exp_1.default, null)),
                react_1.default.createElement("div", { className: 'fourth_box1' },
                    react_1.default.createElement(Projects_1.default, null)),
                react_1.default.createElement("div", { className: 'fourth_box1' },
                    react_1.default.createElement(Footer_1.default, null))))));
};
exports.default = App;
