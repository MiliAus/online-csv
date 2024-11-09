"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: 'navbar' },
            react_1.default.createElement("section", null,
                react_1.default.createElement("div", { id: "logo", className: 'navbar_logo', onClick: function () { return scrollTo("logo"); } }, "Lev"),
                react_1.default.createElement("div", { className: isMobile ? 'hidden' : 'navbar_group1' },
                    react_1.default.createElement("div", { onClick: function () { return scrollTo("about"); } }, "About"),
                    react_1.default.createElement("div", { onClick: function () { return scrollTo("exp"); } }, "Experience"),
                    react_1.default.createElement("div", { onClick: function () { return scrollTo("projects"); } }, "Projects"))))));
};
exports.default = Navbar;
