import React, { useEffect } from 'react';
import { useState } from 'react';
import Navbar from 'src/components/Navbar';
import Main from 'src/components/Main'
import useLocalStorage from 'use-local-storage';





const App = () => {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  return (
    <>
    <div className="App" data-theme={theme}>
      <Navbar />
      <Main />
    </div>
    </>
  );
};

export default App;
