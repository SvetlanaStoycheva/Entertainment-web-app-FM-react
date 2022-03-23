import React from 'react';
import Navbar from '../components/Navbar';
import SearchForm from '../components/SearchForm';

const TVSeriesPage = () => {
  return (
    <section className='series-page-container'>
      <Navbar />
      <div className='series-page-inner-container'>
        <SearchForm />
        <div className='series-page-content-container'></div>
      </div>
    </section>
  );
};

export default TVSeriesPage;
