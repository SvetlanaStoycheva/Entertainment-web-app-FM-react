import React from 'react';
import Navbar from '../components/Navbar';
import SearchForm from '../components/SearchForm';
import Recommended from '../components/Recommended';

const BookmarkedPages = () => {
  return (
    <section className='home-page-container'>
      <Navbar />
      <div className='home-page-inner-container'>
        <SearchForm />
        <div className='movie-page-content-container'>
          <Recommended />
        </div>
      </div>
    </section>
  );
};

export default BookmarkedPages;
