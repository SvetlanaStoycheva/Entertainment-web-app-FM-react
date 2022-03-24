import React from 'react';
import Navbar from '../components/Navbar';
import SearchForm from '../components/SearchForm';

const TVSeriesPage = () => {
  return (
    <section className='home-page-container'>
      <Navbar />
      <div className='home-page-inner-container'>
        <SearchForm />
        <div className='home-page-content-container'></div>
      </div>
    </section>
  );
};

export default TVSeriesPage;
