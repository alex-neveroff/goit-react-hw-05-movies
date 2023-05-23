import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import getMovies from 'sevices/api';

const Home = () => {
  const [tradingMovies, setTradingMovies] = useState([]);

  useEffect(() => {
    const getTredingMovies = async () => {
      try {
        const { results } = await getMovies();
        setTradingMovies([...results]);
      } catch (error) {
        Notify.failure(error.message);
      }
    };

    getTredingMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1> {<MoviesGallery movies={tradingMovies} />}
    </>
  );
};

export default Home;
