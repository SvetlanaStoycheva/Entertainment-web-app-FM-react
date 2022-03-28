import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchForm = () => {
  const currentPath = window.location.pathname;
  console.log(currentPath);

  //
  if (currentPath === '/') {
    return (
      <form className='form-container' onSubmit={(e) => e.preventDefault()}>
        <FaSearch className='search-icon' />
        <input
          type='text'
          className='search-input'
          // value={text}
          // onChange={updateMovies}
          placeholder='Search for movies and TV series'
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
          // value={text}
          // onChange={updateMovies}
          placeholder='Search for movies'
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
          // value={text}
          // onChange={updateMovies}
          placeholder='Search for TV series'
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
          // value={text}
          // onChange={updateMovies}
          placeholder='Search for bookmarked shows'
        />
      </form>
    );
  }
};

export default SearchForm;
