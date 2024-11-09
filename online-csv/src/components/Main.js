"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//components
var react_1 = require("react");
var Theme_1 = require("src/components/Theme");
//images
var Github_1 = require("src/components/Github");
var Linkedin_1 = require("src/components/Linkedin");
var Main = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: 'main' },
            react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: 'main_group1' },
                    react_1.default.createElement("div", { className: 'main_group1_i1' },
                        react_1.default.createElement("h1", { className: 'main_greeting' }, "I'm Austin Leverett")),
                    react_1.default.createElement("div", { className: 'main_group1_i2' },
                        react_1.default.createElement("p", null, "A tech enthusiast who's goal is simplicity, yet thoughtful design.")),
                    react_1.default.createElement("div", { className: 'main_group2' },
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("a", { href: "https://github.com/MiliAus" },
                                react_1.default.createElement(Github_1.default, null))),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("a", { href: "https://www.linkedin.com/in/all09/" },
                                react_1.default.createElement(Linkedin_1.default, null))),
                        react_1.default.createElement(Theme_1.default, null)))))));
};
exports.default = Main;
