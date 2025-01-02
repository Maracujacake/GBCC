import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Duvidas from './pages/Duvidas';
import LocalizacaoDuvidas from './pages/LocalizacaoDuvidas';
import LocomocaoDuvidas from './pages/LocomocaoDuvidas';
import DisciplinasDuvidas from './pages/DisciplinasDuvidas';
import CalendarioPage from './pages/CalendarioPage';
import Informacoes from './pages/InformacoesPage';
import PerfilPage from './pages/PerfilPage';
import EditaisPage from './pages/EditaisPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/duvidas" element={<Duvidas />} />
        <Route path="/localizacao" element={<LocalizacaoDuvidas />} />
        <Route path="/locomocao" element={<LocomocaoDuvidas />} />
        <Route path="/disciplinas" element={<DisciplinasDuvidas />} />
        <Route path="/calendario" element={< CalendarioPage />} />
        <Route path="/informacoes" element={<Informacoes />} />
        <Route path="/login" element={<LoginPage/>}/ >
        <Route path="/perfil" element={<PerfilPage/>}/ >
        <Route path="/editais" element={<EditaisPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
