import React, { useEffect } from 'react';
import { useState } from 'react';
import Navbar from 'src/components/Navbar';
import Main from 'src/components/Main';
import Exp from 'src/components/Exp';
import Projects from 'src/components/Projects';
import About from 'src/components/About';
import Footer from 'src/components/Footer';
import useLocalStorage from 'use-local-storage';






const App = () => {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  return (
    <>
    <div className="App" data-theme={theme}>
      <Navbar />
      <section>
        <div className='main_box1'><Main /></div>
        <div className='secondary_box1'><About /></div>
        <div className='tertiary_box1'><Exp /></div>
        <div className='fourth_box1'><Projects /></div>
        <div className='fourth_box1'><Footer /></div>
      </section>
    </div>
    </>
  );
};

export default App;
