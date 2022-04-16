import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { desplaySearchedItems } = useGlobalContext();
  const currentPath = window.location.pathname;
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTerm = (e) => {
    const pageName = e.target.name;
    setSearchTerm(e.target.value);
    desplaySearchedItems(e.target.value, pageName);
  };
  //
  if (currentPath === '/') {
    return (
      <form className='form-container' onSubmit={(e) => e.preventDefault()}>
        <FaSearch className='search-icon' />
        <input
          type='text'
          className='search-input'
          placeholder='Search for movies and TV series'
          value={searchTerm}
          name='home'
          onChange={handleSearchTerm}
        />
      </form>
    );
  } else if (currentPath === '/movies') {
    return (
      <form className='form-container' onSubmit={(e) => e.preventDefault()}>
        <FaSearch className='search-icon' />
        <input
          type='text'
          className='search-input'
          placeholder='Search for movies'
          value={searchTerm}
          name='movies'
          onChange={handleSearchTerm}
        />
      </form>
    );
  } else if (currentPath === '/tvseries') {
    return (
      <form className='form-container' onSubmit={(e) => e.preventDefault()}>
        <FaSearch className='search-icon' />
        <input
          type='text'
          className='search-input'
          placeholder='Search for TV series'
          value={searchTerm}
          name='series'
          onChange={handleSearchTerm}
        />
      </form>
    );
  } else if (currentPath === '/bookmarked') {
    return (
      <form className='form-container' onSubmit={(e) => e.preventDefault()}>
        <FaSearch className='search-icon' />
        <input
          type='text'
          className='search-input'
          placeholder='Search for bookmarked shows'
          value={searchTerm}
          name='bookmarked'
          onChange={handleSearchTerm}
        />
      </form>
    );
  }
};

export default SearchForm;
