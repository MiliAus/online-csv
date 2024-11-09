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
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'navbar' },
            React.createElement("section", null,
                React.createElement("div", { id: "logo", className: 'navbar_logo', onClick: function () { return scrollTo("logo"); } }, "Lev"),
                React.createElement("div", { className: isMobile ? 'hidden' : 'navbar_group1' },
                    React.createElement("div", { onClick: function () { return scrollTo("about"); } }, "About"),
                    React.createElement("div", { onClick: function () { return scrollTo("exp"); } }, "Experience"),
                    React.createElement("div", { onClick: function () { return scrollTo("projects"); } }, "Projects"))))));
};
exports.default = Navbar;
