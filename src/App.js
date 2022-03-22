import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='testing' element={<div>testing</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
