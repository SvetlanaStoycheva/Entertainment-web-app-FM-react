import React from 'react';
import data from '.././data';
import { BiBookmark } from 'react-icons/bi';
import { MdLocalMovies } from 'react-icons/md';
import { FaBookmark } from 'react-icons/fa';

const Trending = () => {
  const trendingItems = data.filter((i) => i.isTrending);
  //https://www.youtube.com/watch?v=KHGc7eZyxKY
  return (
    <section className='trending-slider'>
      <h4 className='slider-title'>Trending</h4>
      <div className='slider-inner-container'>
        {trendingItems.map((i, index) => {
          const {
            category,
            rating,
            thumbnail: {
              trending: { large: sliderImg },
            },
            title,
            year,
            isBookmarked,
          } = i;
          return (
            <div className='single-trending-slide' key={index}>
              <img src={sliderImg} alt={title} className='slider-img' />
              <span className='trending-bookmark-icon'>
                {isBookmarked ? <FaBookmark /> : <BiBookmark />}
              </span>

              <div className='trending-info-container'>
                <div className='trending-info-header'>
                  <p>{year}</p>
                  <span className='dots'>.</span>
                  <p>
                    <span className='slider-movie-icon'>
                      <MdLocalMovies />
                    </span>
                    {category}
                  </p>
                  <span className='dots'>.</span>
                  <p>{rating}</p>
                </div>
                <h4 className='sider-movie-title'>{title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Trending;
