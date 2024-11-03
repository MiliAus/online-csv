import React, { useState } from 'react';
import 'src/syles/Navbar.css';
import Avatar from 'src/assets/Avatar.png';
import 'src/syles/Main.css';





const Navbar = () => {
    
    return (
      <>
      <div className='main'>
        <div className='main_i1'><p className='main_greeting'>Hi,<br></br>My name is Austin.</p></div>
        <div className='main_i2'><img className="main_avatar" src={Avatar} alt="avatar picture" /></div>
      </div>

      </>
        
    );
  };
  
  export default Navbar;