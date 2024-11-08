import React, { useState, useEffect } from 'react';
import Theme from 'src/components/Theme';

//images
import Github from 'src/components/Github';
import Linkedin from 'src/components/Linkedin';


const Projects = () => {
    return (
      <>
      <div className='fourth'>
      <h3 id="projects" className='title'>Projects</h3>

      <div className='projects_body'>
        <div>
          <a className="title" href="https://github.com/Vito-Research">Vito</a>
          <p className='mt_4'>Sunset public project focused on disability assistance. I worked on CI/CD processes such as setting up Github Actions and design choices for the frontend that utilized Swift UI.</p>
        </div>
        <div><img className="project_image" src="/src/assets/vito_website.PNG" alt="vito website" /></div>
      </div>
      
      <div className='projects_body'>
        <div>
          <a href="https://github.com/MiliAus/todo-app">TODO Application</a>
          <p className='mt_4'>Web app used to track tasks, delete tasks, and sort them based on priority.</p>
        </div>
        <div><img className="project_image" src="/src/assets/todo_darkmode.PNG" alt="vito website" /></div>
       </div>


      <div className='projects_body'>
       <div>
          <a href="https://github.com/MiliAus/online-csv">Austin Leverett Web Resume</a>
          <p className='mt_4'>Website built with React, serving as an online portfolio and resume.</p>
        </div>
        <div><img className="project_image" src="/src/assets/personal_website.PNG" alt="vito website" /></div>
      </div>

    </div>
      </>
        
    );
  };

  export default Projects;