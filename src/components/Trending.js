import React from 'react';
import data from '.././data';
import { BiBookmark } from 'react-icons/bi';
import { MdLocalMovies } from 'react-icons/md';
import { FaBookmark } from 'react-icons/fa';

const Trending = () => {
  const trendingItems = data.filter((i) => i.isTrending);
  console.log(trendingItems);

  return (
    <section className='trending-slider'>
      <h4 className='slider-title'>Trending</h4>
      <div className='slider-inner-container'>
        {trendingItems.map((i) => {
          const {
            category,
            rating,
            thumbnail: {
              trending: { large: sliderImg },
            },
            title,
            year,
          } = i;
          return (
            <div className='single-trending-slide'>
              <img src={sliderImg} alt={title} className='slider-img' />
              <span className='trending-bookmark-icon'>
                <BiBookmark />
              </span>

              <div className='trending-info-container'>
                <div className='trending-info-header'>
                  <p>{year}</p>
                  <span>.</span>
                  <p>
                    <span>
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
