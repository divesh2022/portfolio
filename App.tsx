import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Goals from './components/Goals';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  // Initialize theme based on preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  // Apply theme class to HTML element
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <HashRouter>
      <Layout darkMode={darkMode} toggleTheme={toggleTheme}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ChatWidget />
      </Layout>
    </HashRouter>
  );
};

export default App;