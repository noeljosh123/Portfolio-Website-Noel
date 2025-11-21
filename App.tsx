import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ProjectDetails from './pages/ProjectDetails';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </HashRouter>
  );
};

export default App;