import React from 'react';
import Navbar from '../components/Navbar';
import SearchForm from '../components/SearchForm';
import Trending from '../components/Trending';
import Recommended from '../components/Recommended';

const HomePage = () => {
  return (
    <section className='home-page-container'>
      <Navbar />
      <div className='home-page-inner-container'>
        <SearchForm />
        <Trending />
        <Recommended />
      </div>
    </section>
  );
};

export default HomePage;
