import React, { useState } from 'react';
import 'src/syles/Navbar.css';
import Chevron from 'src/assets/chevron.svg';
import Sun from 'src/assets/light_mode.svg';
import Moon from 'src/assets/dark_mode.svg';



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [setTheme, setActiveTheme] = useState(false);

    const setActive = () => setIsOpen(!isOpen);
    const rotate = isOpen ? "rotate(180deg)" : "rotate(0)"

    
    

  
    return (
      <>
      <div className='navbar'>
        <div className='navbar_item1'><p className={isOpen ? 'navbar_levlogo': 'navbar_levlogo_hidden'}>Lev</p></div>
        <div className='navbar_item1'><img src={Chevron} onClick={setActive} className={isOpen ? 'chevron_left': 'chevron_right'}></img></div>
        <div className='navbar_item2'><img className='theme_logo' src={Sun}  alt="sun theme" /></div>
      </div>

      </>
        
    );
  };
  
  export default Navbar;