import React, { useState } from 'react';
import '../syles/Navbar.css';
import Chevron from '../assets/chevron.svg'
import Sun from '/assets/light_mode.svg;
import Moon from './assets/dark_mode.svg';



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [setTheme, setActiveTheme] = useState(false);

    const setActive = () => setIsOpen(!isOpen);
    const rotate = isOpen ? "rotate(180deg)" : "rotate(0)"

    
    

  
    return (
      <>
      <div className='navbar'>
        <div className='navbar_item'><p className={isOpen ? 'navbar_levlogo': 'navbar_levlogo_hidden'}>Lev</p></div>
        <div className='navbar_item'><img src={Chevron} onClick={setActive} className={isOpen ? 'chevron_left': 'chevron_right'}></img></div>
        <div className='navbar_item'><img className='theme_logo' src={Sun}  alt="sun theme" /></div>
      </div>

      </>
        
    );
  };
  
  export default Navbar;