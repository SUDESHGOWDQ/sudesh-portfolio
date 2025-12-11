import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { HomePage, AboutPage, SkillsPage, ProjectsPage, ContactPage } from './pages';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;