import React, { useState, useEffect } from 'react';
import data from '.././data';
import { BiBookmark } from 'react-icons/bi';
import { MdLocalMovies } from 'react-icons/md';
import { FaBookmark } from 'react-icons/fa';

const Recommended = () => {
  const [recommendedItems, setRecommendedItems] = useState(
    data.filter((i) => !i.isTrending)
  );

  //depending on the page: home, movies or series, show the correspondent recommendedItems
  const currentPath = window.location.pathname;

  useEffect(() => {
    const recommendedData = data.filter((i) => !i.isTrending);
    if (currentPath === '/') {
      setRecommendedItems(recommendedData);
    } else if (currentPath === '/movies') {
      const movieData = recommendedData.filter((i) => i.category === 'Movie');
      setRecommendedItems(movieData);
    } else if (currentPath === '/tvseries') {
      const seriesData = recommendedData.filter(
        (i) => i.category === 'TV Series'
      );
      setRecommendedItems(seriesData);
    }
  }, [currentPath]);
  return (
    <section className='recommended-container'>
      <h4 className='slider-title'>Recommended for you</h4>
      <div className='recommended-inner-container'>
        {recommendedItems.map((i, index) => {
          const {
            category,
            rating,
            thumbnail: {
              regular: { large: sliderImg },
            },
            title,
            year,
            isBookmarked,
          } = i;
          return (
            <div
              className='single-trending-slide single-recommended-slide'
              key={index}
            >
              <img src={sliderImg} alt={title} className='recommended-img' />
              <span className='trending-bookmark-icon recommended-bookmark-icon'>
                {isBookmarked ? <FaBookmark /> : <BiBookmark />}
              </span>

              <div className='trending-info-container recommended-info-container'>
                <div className=' recommended-info-header'>
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

export default Recommended;