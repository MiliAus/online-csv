"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Theme_1 = require("src/components/Theme");
//images
var Github_1 = require("src/components/Github");
var Linkedin_1 = require("src/components/Linkedin");
var Main = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'main' },
            React.createElement("div", null,
                React.createElement("div", { className: 'main_group1' },
                    React.createElement("div", { className: 'main_group1_i1' },
                        React.createElement("h1", { className: 'main_greeting' }, "I'm Austin Leverett")),
                    React.createElement("div", { className: 'main_group1_i2' },
                        React.createElement("p", null, "A tech enthusiast who's goal is simplicity, yet thoughtful design.")),
                    React.createElement("div", { className: 'main_group2' },
                        React.createElement("div", null,
                            React.createElement("a", { href: "https://github.com/MiliAus" },
                                React.createElement(Github_1.default, null))),
                        React.createElement("div", null,
                            React.createElement("a", { href: "https://www.linkedin.com/in/all09/" },
                                React.createElement(Linkedin_1.default, null))),
                        React.createElement(Theme_1.default, null)))))));
};
exports.default = Main;
