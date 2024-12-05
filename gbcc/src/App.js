import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Duvidas from './pages/Duvidas';
import LocalizacaoDuvidas from './pages/LocalizacaoDuvidas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/duvidas" element={<Duvidas />} />
        <Route path="/localizacao" element={<LocalizacaoDuvidas />} />
      </Routes>
    </Router>
  );
}

export default App;
