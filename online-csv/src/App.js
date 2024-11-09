"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "App", "data-theme": theme },
            React.createElement(Navbar_1.default, null),
            React.createElement("section", null,
                React.createElement("div", { className: 'main_box1' },
                    React.createElement(Main_1.default, null)),
                React.createElement("div", { className: 'secondary_box1' },
                    React.createElement(About_1.default, null)),
                React.createElement("div", { className: 'tertiary_box1' },
                    React.createElement(Exp_1.default, null)),
                React.createElement("div", { className: 'fourth_box1' },
                    React.createElement(Projects_1.default, null)),
                React.createElement("div", { className: 'fourth_box1' },
                    React.createElement(Footer_1.default, null))))));
};
exports.default = App;
