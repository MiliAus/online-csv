import React, { useState } from 'react';
import { useEffect } from 'react';
import Sun from 'src/assets/light_mode.svg';
import Moon from 'src/assets/dark_mode.svg';
import useLocalStorage from 'use-local-storage';

export default function Theme () {
    
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark': 'light';
    setTheme(newTheme);
  }

    

    return (
        <div onClick={switchTheme}><img className='main_group2_i3' src={Sun} alt="sun theme" /></div>
    );
};

