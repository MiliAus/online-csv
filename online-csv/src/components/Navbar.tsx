import React, { useState } from 'react';
import 'src/syles/Navbar.css';
import Chevron from 'src/assets/chevron.svg';
import Sun from 'src/assets/light_mode.svg';
import Moon from 'src/assets/dark_mode.svg';



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    

    
    

  
    return (
      <>
      <div className='navbar'>
        <div className='navbar_logo'>Lev</div>
        <div className='navbar_group1'>
          <div>Home</div>
          <div>About</div>
          <div>Resume</div>
          <div>Contact</div>
          <img src={Sun} alt="sun theme" />
        </div>
      </div>

      </>
        
    );
  };
  
  export default Navbar;