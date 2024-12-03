import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';


function App() {
  return (
    <Router>
      <Header />
      <main className="p-4">
        <p>aaaaaaaaaaaaaaaaaaaa</p>
      </main>
    </Router>
  );
}

export default App;
