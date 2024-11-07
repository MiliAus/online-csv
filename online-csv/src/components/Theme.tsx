import React, { useState } from 'react';
import { useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import Sun from 'src/components/Sun';
import Moon from 'src/components/Moon';


export default function Theme () {
    
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark': 'light';
    setTheme(newTheme);
  }

    

    return (
        <div onClick={switchTheme}>{theme === 'light' ? <Sun /> : <Moon />}</div>
    );
};

