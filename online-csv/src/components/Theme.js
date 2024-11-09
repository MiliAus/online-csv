"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Theme;
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
    return (React.createElement("div", { onClick: switchTheme }, theme === 'light' ? React.createElement(Sun_1.default, null) : React.createElement(Moon_1.default, null)));
}
;
