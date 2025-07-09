import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import PelletList from './components/PelletList.jsx';
import PelletDetail from './pages/PelletDetail.jsx';
import Landing from './pages/Landing.jsx';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header.jsx';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<PelletList />} />
        <Route path=":pelletName" element={<PelletDetail />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Header />
      <AnimatedRoutes />
    </HashRouter>
  );
} 