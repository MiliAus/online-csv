"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Theme;
var jsx_runtime_1 = require("react/jsx-runtime");
var use_local_storage_1 = require("use-local-storage");
var Sun_1 = require("src/components/Sun");
var Moon_1 = require("src/components/Moon");
function Theme() {
    var defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var _a = (0, use_local_storage_1.default)('theme', defaultDark ? 'dark' : 'light'), theme = _a[0], setTheme = _a[1];
    var switchTheme = function () {
        var newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };
    return ((0, jsx_runtime_1.jsx)("div", { onClick: switchTheme, children: theme === 'light' ? (0, jsx_runtime_1.jsx)(Sun_1.default, {}) : (0, jsx_runtime_1.jsx)(Moon_1.default, {}) }));
}
;
