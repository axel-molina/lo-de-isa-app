import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import Header from './components/Header';
// Pages
import Home from './pages/Home';
import CrearVenta from './pages/CreateSale';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/venta" element={<CrearVenta />} />
      </Routes>
    </div>
  );
}

export default App;
