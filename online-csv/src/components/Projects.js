"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Projects = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: 'fourth' },
            react_1.default.createElement("h3", { id: "projects", className: 'title' }, "Projects"),
            react_1.default.createElement("div", { className: 'project_columns' },
                react_1.default.createElement("div", { className: 'projects_body' },
                    react_1.default.createElement("div", { className: 'mt_1rem' },
                        react_1.default.createElement("a", { className: "title", href: "https://github.com/Vito-Research" }, "Vito"),
                        react_1.default.createElement("p", { className: 'mt_4' }, "Sunset public project focused on detecting infection in realtime. I worked on CI/CD processes such as setting up Github Actions and design choices for the frontend that utilized Swift UI."),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("img", { className: "project_image", src: "/src/assets/vito_website.PNG", alt: "vito website" }))),
                    react_1.default.createElement("div", { className: 'mt_1rem' },
                        react_1.default.createElement("a", { href: "https://github.com/MiliAus/todo-app" }, "TODO Application"),
                        react_1.default.createElement("p", { className: 'mt_4' }, "Web app used to track tasks, delete tasks, and sort them based on priority."),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("img", { className: "project_image", src: "/src/assets/todo_darkmode.PNG", alt: "vito website" }))),
                    react_1.default.createElement("div", { className: 'mt_1rem' },
                        react_1.default.createElement("a", { href: "https://github.com/MiliAus/online-csv" }, "Austin Leverett Web Resume"),
                        react_1.default.createElement("p", { className: 'mt_4' }, "Website built with React, serving as an online portfolio and resume."),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("img", { className: "project_image", src: "/src/assets/personal_website.PNG", alt: "vito website" })))),
                react_1.default.createElement("div", { className: 'projects_body' })))));
};
exports.default = Projects;
// <div><img className="project_image" src="/src/assets/vito_website.PNG" alt="vito website" /></div>
// <div><img className="project_image" src="/src/assets/todo_darkmode.PNG" alt="vito website" /></div>
// <div><img className="project_image" src="/src/assets/personal_website.PNG" alt="vito website" /></div>
