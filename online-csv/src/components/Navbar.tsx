import React, { useState } from 'react';
import { useEffect } from 'react';




const Navbar = () => {
    
  const [isMobile, setIsMobile] = useState(false)
 
  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth < 650) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

    
    
  function scrollTo (elementid) {
    document.getElementById(elementid).scrollIntoView({behavior: 'smooth'});
  }
  
    return (
      <>
      <div className='navbar'>
        <div className='navbar_logo' onClick={scrollTop}>Lev</div>
        <div className={isMobile ? 'hidden' : 'navbar_group1'}>
          <div onClick={() => scrollTo("about")}>About</div>
          <div onClick={() => scrollTo("exp")}>Experience</div>
          <div onClick={() => scrollTo("projects")}>Projects</div>
        </div>
      </div>

      </>
        
    );
  };
  
  export default Navbar;