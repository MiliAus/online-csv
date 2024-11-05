//react items
import React, { useState } from 'react';
import 'src/syles/Navbar.css';
import 'src/syles/Main.css';

//images
import Avatar from 'src/assets/Avatar.png';
import Github from 'src/assets/Github.svg';
import Linkedin from 'src/assets/Linkedin.svg';





const Navbar = () => {
    
    return (
      <>
      <div className='main'>
        <div className='main_box1'>
          <div className='main_group1'>
            <div className='main_group1_i1'><h1 className='main_greeting'>I'm Austin Leverett</h1></div>
            <div className='main_group1_i2'><p>A tech enthusiast who's goal is simplicity, yet thoughtful design.</p></div>
            <div className='main_group2'>
                <div><a href="https://github.com/MiliAus"><img className='main_group2_i1' src={Github} alt="github icon" /></a></div>
                <div><a href="https://www.linkedin.com/in/all09/"><img className='main_group2_i2' src={Linkedin} alt="linkedin icon" /></a></div>
              </div>
            </div>
        </div>
      </div>
      </>
        
    );
  };
  
  export default Navbar;