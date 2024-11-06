import React, { useState } from 'react';
import { useEffect } from 'react';
import Sun from 'src/assets/light_mode.svg';
import Moon from 'src/assets/dark_mode.svg';

export default function Theme () {
    const storedTheme = localStorage.getItem('theme');
    const [isDarkMode, setDarkMode] = useState(storedTheme === 'dark');

    useEffect(() => {
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      }, [isDarkMode]);

      const toggleTheme = () => {
        setDarkMode(!isDarkMode);
      };


    return (
        <div onClick={toggleTheme}><img className='main_group2_i3' src={Sun} alt="sun theme" /></div>
    )
};

