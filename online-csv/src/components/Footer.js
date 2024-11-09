"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Footer = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: 'tertiary' },
            react_1.default.createElement("p", { className: 'mt_2rem' },
                "Designed in ",
                react_1.default.createElement("a", { href: "https://www.figma.com/" }, "Figma"),
                " and coded in ",
                react_1.default.createElement("a", { href: "https://code.visualstudio.com/" }, "VS Code"),
                " with ",
                react_1.default.createElement("a", { href: "https://github.com/features/codespaces" }, "Github CodeSpaces"),
                ". Built with ",
                react_1.default.createElement("a", { href: "https://react.dev/" }, "React"),
                " deployed with ",
                react_1.default.createElement("a", { href: "https://pages.github.com/" }, "Github Pages"),
                "."))));
};
exports.default = Footer;
