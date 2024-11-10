import { useState, useEffect } from 'react';
import Theme from 'src/components/Theme';

//images
import Github from 'src/components/Github';
import Linkedin from 'src/components/Linkedin';
import Vito from '../assets/vito_website.png';
import TODO from '../assets/todo_darkmode.png';
import Web from '../assets/personal_website.png';
import Link from 'src/components/Link';


const Projects = () => {
    return (
      <>
      <div className='fourth'>
      <h3 id="projects" className='title'>Projects</h3>

      <div className='project_columns'>
          <div className='projects_body'>
              <div className='mt_1rem'>
                <a className="title" href="https://github.com/Vito-Research">Vito <Link /></a>
                <p className='mt_4'>Sunset public project focused on detecting infection in realtime. I worked on CI/CD processes such as setting up Github Actions and design choices for the frontend that utilized Swift UI.</p>
                <div><img className="project_image" src={Vito} alt="vito website" /></div>
              </div>
            
              <div className='mt_1rem'>
                <a className="title" href="https://github.com/MiliAus/todo-app">TODO Application <Link /></a>
                <p className='mt_4'>Web app used to track tasks, delete tasks, and sort them based on priority.</p>
                <div><img className="project_image" src={TODO} alt="vito website" /></div>
              </div>
            
              <div className='mt_1rem'>
                <a className="title" href="https://github.com/MiliAus/online-csv">Austin Leverett Web Resume <Link /></a>
                <p className='mt_4'>Website built with React, serving as an online portfolio and resume.</p>
                <div><img className="project_image" src={Web} alt="vito website" /></div>
              </div>
          </div>

          <div className='projects_body'>
          </div>
      </div>
    </div>
      </>
        
    );
  };

  export default Projects;


  // <div><img className="project_image" src="/src/assets/vito_website.PNG" alt="vito website" /></div>
  // <div><img className="project_image" src="/src/assets/todo_darkmode.PNG" alt="vito website" /></div>
  // <div><img className="project_image" src="/src/assets/personal_website.PNG" alt="vito website" /></div>