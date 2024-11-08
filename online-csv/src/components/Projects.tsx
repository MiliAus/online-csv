import React, { useState, useEffect } from 'react';
import Theme from 'src/components/Theme'

//images
import Github from 'src/components/Github';
import Linkedin from 'src/components/Linkedin';


const Projects = () => {
    return (
      <>
      <div className='fourth'>
      <h3>Projects</h3>
      <p>Vito</p>
      <p>Sunset public project focused on disability assistance. I worked on CI/CD processes such as setting up Github Actions and design choices for the frontend that utilized Swift UI.</p>

      <p>TODO Application</p>
      <p>Web app used to track tasks, delete tasks, and sort them based on priority.</p>

      <p>Austin Leverett Web Resume</p>
      <p>Website built with React, serving as an online portfolio and resume.</p>
      

    </div>
      </>
        
    );
  };

  export default Projects;