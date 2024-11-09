"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Projects = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'fourth' },
            React.createElement("h3", { id: "projects", className: 'title' }, "Projects"),
            React.createElement("div", { className: 'project_columns' },
                React.createElement("div", { className: 'projects_body' },
                    React.createElement("div", { className: 'mt_1rem' },
                        React.createElement("a", { className: "title", href: "https://github.com/Vito-Research" }, "Vito"),
                        React.createElement("p", { className: 'mt_4' }, "Sunset public project focused on detecting infection in realtime. I worked on CI/CD processes such as setting up Github Actions and design choices for the frontend that utilized Swift UI."),
                        React.createElement("div", null,
                            React.createElement("img", { className: "project_image", src: "/src/assets/vito_website.PNG", alt: "vito website" }))),
                    React.createElement("div", { className: 'mt_1rem' },
                        React.createElement("a", { href: "https://github.com/MiliAus/todo-app" }, "TODO Application"),
                        React.createElement("p", { className: 'mt_4' }, "Web app used to track tasks, delete tasks, and sort them based on priority."),
                        React.createElement("div", null,
                            React.createElement("img", { className: "project_image", src: "/src/assets/todo_darkmode.PNG", alt: "vito website" }))),
                    React.createElement("div", { className: 'mt_1rem' },
                        React.createElement("a", { href: "https://github.com/MiliAus/online-csv" }, "Austin Leverett Web Resume"),
                        React.createElement("p", { className: 'mt_4' }, "Website built with React, serving as an online portfolio and resume."),
                        React.createElement("div", null,
                            React.createElement("img", { className: "project_image", src: "/src/assets/personal_website.PNG", alt: "vito website" })))),
                React.createElement("div", { className: 'projects_body' })))));
};
exports.default = Projects;
// <div><img className="project_image" src="/src/assets/vito_website.PNG" alt="vito website" /></div>
// <div><img className="project_image" src="/src/assets/todo_darkmode.PNG" alt="vito website" /></div>
// <div><img className="project_image" src="/src/assets/personal_website.PNG" alt="vito website" /></div>
