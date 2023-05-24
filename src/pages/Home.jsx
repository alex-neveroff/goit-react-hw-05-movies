import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import getMovies from 'sevices/api';

const Home = () => {
  const [tradingMovies, setTradingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTredingMovies = async () => {
      try {
        setLoading(true);
        const { results } = await getMovies();

        setTradingMovies(results);
      } catch (error) {
        setError(error.message);
        Notify.failure(error.message);
      } finally {
        setLoading(false);
      }
    };

    getTredingMovies();
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {Boolean(error !== null) && <p>Error: {error}</p>}
      {tradingMovies && (
        <MoviesGallery
          movies={tradingMovies}
          pageTitle="Top-20 trending today"
        />
      )}
    </>
  );
};

export default Home;
