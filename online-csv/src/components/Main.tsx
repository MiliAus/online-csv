import React, { useState } from 'react';
import 'src/syles/Navbar.css';
import Avatar from 'src/assets/Avatar.png';
import 'src/syles/Main.css';





const Navbar = () => {
    
    return (
      <>
      <div className='main'>
        <div className='main_group1'>
          <div className='main_i1'><p className='main_greeting'>I'm Austin Leverett</p></div>
          <div className='main_i2'><p>A tech enthusiast who's goal is simplicity, yet thoughtful design.</p></div>
        </div>
      </div>

      </>
        
    );
  };
  
  export default Navbar;