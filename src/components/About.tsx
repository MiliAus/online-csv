import { useState, useEffect } from 'react';
import Theme from 'src/components/Theme'

//images
import Github from 'src/components/Github';
import Linkedin from 'src/components/Linkedin';


const About = () => {
    return (
      <>
      <div className='secondary'>
        <h3 id="about">About</h3>
        <p className='mt_2'>I strive to find a deeper explanation of most things in life, and will work tirelessly to master anything that comes my way.</p>
        <p className='mt_2'>If I am not working on something on the computer, I like to go hiking and spend time with family.</p>

      </div>
      </>
        
    );
  };


export default About;