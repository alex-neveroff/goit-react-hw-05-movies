import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { getMovies } from 'sevices/api';

const Home = () => {
  const [tradingMovies, setTradingMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/trending/movie/day',
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTE3NTMxOWZmNWZkZjc2OWVmNDRiZjRjNmEyMWQyNyIsInN1YiI6IjY0NmE1YTI1YzM1MTRjMDE1NzdhODcxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RZQyeFN2AnmNZOpcH1AhIJhuL9Twl396yihm14rTR54',
      },
    };

    const getTredingMovies = async () => {
      try {
        const { results } = await getMovies(options);
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
