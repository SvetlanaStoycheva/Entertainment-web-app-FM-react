import React from 'react';
import Navbar from '../components/Navbar';
import SearchForm from '../components/SearchForm';
import Trending from '../components/Trending';

const HomePage = () => {
  return (
    <section className='home-page-container'>
      <Navbar />
      <div className='home-page-inner-container'>
        <SearchForm />
        <Trending />
        <div className='home-page-content-container'></div>
      </div>
    </section>
  );
};

export default HomePage;
