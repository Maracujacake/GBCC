import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Duvidas from './pages/Duvidas';
import LocalizacaoDuvidas from './pages/LocalizacaoDuvidas';
import LocomocaoDuvidas from './pages/LocomocaoDuvidas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/duvidas" element={<Duvidas />} />
        <Route path="/localizacao" element={<LocalizacaoDuvidas />} />
        <Route path="/locomocao" element={<LocomocaoDuvidas />} />
      </Routes>
    </Router>
  );
}

export default App;
