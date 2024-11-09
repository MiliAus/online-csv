//components
import { useState, useEffect } from 'react';
import Theme from 'src/components/Theme'

//images
import Github from 'src/components/Github';
import Linkedin from 'src/components/Linkedin';


const Main = () => {
    return (
      <>
      <div className='main'>
        <div>
          <div className='main_group1'>
            <div className='main_group1_i1'><h1 className='main_greeting'>I'm Austin Leverett</h1></div>
            <div className='main_group1_i2'><p>A tech enthusiast who's goal is simplicity, yet thoughtful design.</p></div>
            <div className='main_group2'>
                <div><a href="https://github.com/MiliAus"><Github /></a></div>
                <div><a href="https://www.linkedin.com/in/all09/"><Linkedin /></a></div>
                <Theme />
              </div>
            </div>
        </div>
      </div>
      </>
        
    );
  };


export default Main;