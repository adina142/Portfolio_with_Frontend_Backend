import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageTitleProvider } from './context/PageTitleContext';
import Layout from './components/Layout';

// Lazy-loaded components
const Home = lazy(() => import('./pages/Home'));
const Education = lazy(() => import('./pages/Education'));
const Projects = lazy(() => import('./pages/Projects'));
const Experience = lazy(() => import('./pages/Experience')); // ✅ Correct import
const Skills = lazy(() => import('./pages/Skills'));

const App = () => {
  return (
    <PageTitleProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="education" element={<Education />} />
            <Route path="projects" element={<Projects />} />
            <Route path="experience" element={<Experience />} /> {/* ✅ Correct usage */}
            <Route path="skills" element={<Skills />} />
          </Route>
        </Routes>
      </Suspense>
    </PageTitleProvider>
  );
};

export default App;
