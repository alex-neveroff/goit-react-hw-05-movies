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
    <MoviesGallery movies={tradingMovies} pageTitle="Top-20 trending today" />
  );
};

export default Home;
