import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Movies from './pages/MoviesPage';
import TVSeries from './pages/TVSeriesPage';
import Bookmarked from './pages/BookmarkedPages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movies' element={<Movies />} />
        <Route path='tvseries' element={<TVSeries />} />
        <Route path='bookmarked' element={<Bookmarked />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
