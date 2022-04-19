import React, { useRef, useEffect, useState } from 'react';
import { BiBookmark } from 'react-icons/bi';
import { MdLocalMovies } from 'react-icons/md';
import { FaBookmark } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import { motion } from 'framer-motion';

const Trending = () => {
  const { toggleBookmarked, dataItems: data } = useGlobalContext();
  const trendingItems = data.filter((i) => i.isTrending);

  //https://www.youtube.com/watch?v=W0bEL93tt4k

  return (
    <motion.section
      drag='x'
      dragConstraints={{ right: 0 }}
      className='trending-slider'
    >
      <h4 className='slider-title'>Trending</h4>
      <motion.div
        drag='x'
        dragConstraints={{ right: 0 }}
        className='slider-inner-container'
      >
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
              <span
                className='trending-bookmark-icon'
                id={title}
                onClick={toggleBookmarked}
              >
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
      </motion.div>
    </motion.section>
  );
};

export default Trending;
