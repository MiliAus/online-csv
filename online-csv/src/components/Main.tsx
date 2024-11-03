import React, { useState } from 'react';
import 'src/syles/Navbar.css';
import Avatar from 'src/assets/Avatar.png';
import 'src/syles/Main.css';





const Navbar = () => {
    
    return (
      <>
      <div className='main'>
        <div className='main_group1'>
          <div className='main_i1'><p className='main_greeting'>Hi, I'm Austin.</p></div>
          <div className='main_i2'><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum consequuntur enim iure aliquid eius beatae, nam aperiam eaque in molestiae dolore ipsam aliquam sequi molestias! Quam nisi perferendis temporibus? Non!</p></div>
        </div>
        <div className='main_i3'><img className="main_avatar" src={Avatar} alt="avatar picture" /></div>
      </div>

      </>
        
    );
  };
  
  export default Navbar;