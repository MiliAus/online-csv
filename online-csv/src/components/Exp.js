"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//components
var react_1 = require("react");
var Href_1 = require("src/components/Href");
var Pdf_1 = require("src/components/Pdf");
var Exp = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: 'tertiary' },
            react_1.default.createElement("h3", { id: 'exp' }, "Experience"),
            react_1.default.createElement("p", { className: 'title' },
                "Associate IT Systems Engineer - ",
                react_1.default.createElement("a", { href: "https://www.floridablue.com/" }, "Florida Blue")),
            react_1.default.createElement("p", { className: 'mt_0' }, "2022 - Present"),
            react_1.default.createElement("p", { className: 'margins_small' }, "Designing and constructing, high-availability OpenShift clusters along with working closely with developers in the CI/CD process. Built automation programs using the Go language for creating OpenShift objects automatically, reducing workload and time to production for critical components."),
            react_1.default.createElement("p", null,
                "Tech Lead and ",
                react_1.default.createElement(Href_1.default, { link: "https://www.figma.com/", name: "Figma" }),
                " designer for a fullstack application that utilizes ",
                react_1.default.createElement(Href_1.default, { link: "https://react.dev/", name: "React" }),
                ", ",
                react_1.default.createElement(Href_1.default, { link: "https://fastapi.tiangolo.com/", name: "FastAPI" }),
                ", ",
                react_1.default.createElement(Href_1.default, { link: "https://www.microsoft.com/en-us/sql-server/sql-server-2022", name: "SQL Server" }),
                ", other technologies for tracking yearly enterprise expenses. "),
            react_1.default.createElement("p", { className: 'skills' },
                "Skills: ",
                react_1.default.createElement(Href_1.default, { link: "https://www.redhat.com/en/technologies/cloud-computing/openshift", name: "OpenShift" }),
                ", Red Hat Products, ",
                react_1.default.createElement(Href_1.default, { link: "https://nodejs.org/en/blog/announcements/v20-release-announce", name: "Node" }),
                ", ",
                react_1.default.createElement(Href_1.default, { link: "https://react.dev/", name: "React" }),
                ", ",
                react_1.default.createElement(Href_1.default, { link: "https://fastapi.tiangolo.com/", name: "FastAPI" }),
                " "),
            react_1.default.createElement("p", { className: 'title' },
                "Network Administrator - ",
                react_1.default.createElement("a", { href: "https://www.airforce.com/ways-to-serve/air-national-guard" }, "Air National Guard")),
            react_1.default.createElement("p", { className: 'mt_0' }, "2018 - 2022"),
            react_1.default.createElement("p", { className: 'margins_small' }, "Responsible for planning, deploying, configuring, and maintaining the network infrastructure that supports operational needs in temporary, dynamic, and often austere environments"),
            react_1.default.createElement("p", null, "Team Lead for several exercises, coordinating drills with leadership and ensuring mission success."),
            react_1.default.createElement("p", { className: 'skills' }, "Skills: Cisco switches, Cisco Routing, Troubleshooting, Leadership"),
            react_1.default.createElement("a", { className: 'resume_link', href: "src/assets/Austin_Leverett.pdf" },
                react_1.default.createElement("p", { className: 'resume_link' },
                    "View Full Resume ",
                    react_1.default.createElement(Pdf_1.default, null))))));
};
exports.default = Exp;
