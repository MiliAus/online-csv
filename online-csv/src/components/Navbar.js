"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("react");
var Navbar = function () {
    var _a = (0, react_1.useState)(false), isMobile = _a[0], setIsMobile = _a[1];
    //choose the screen size 
    var handleResize = function () {
        if (window.innerWidth < 650) {
            setIsMobile(true);
        }
        else {
            setIsMobile(false);
        }
    };
    // create an event listener
    (0, react_2.useEffect)(function () {
        window.addEventListener("resize", handleResize);
    });
    function scrollTo(elementid) {
        document.getElementById(elementid).scrollIntoView({ behavior: 'smooth' });
    }
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { className: 'navbar', children: (0, jsx_runtime_1.jsxs)("section", { children: [(0, jsx_runtime_1.jsx)("div", { id: "logo", className: 'navbar_logo', onClick: function () { return scrollTo("logo"); }, children: "Lev" }), (0, jsx_runtime_1.jsxs)("div", { className: isMobile ? 'hidden' : 'navbar_group1', children: [(0, jsx_runtime_1.jsx)("div", { onClick: function () { return scrollTo("about"); }, children: "About" }), (0, jsx_runtime_1.jsx)("div", { onClick: function () { return scrollTo("exp"); }, children: "Experience" }), (0, jsx_runtime_1.jsx)("div", { onClick: function () { return scrollTo("projects"); }, children: "Projects" })] })] }) }) }));
};
exports.default = Navbar;
