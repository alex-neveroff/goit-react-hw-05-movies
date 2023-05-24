import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MovieCard from 'components/MovieCard/MovieCard';
import { Notify } from 'notiflix';
import getMovies from 'sevices/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //     const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setLoading(true);
        const results = await getMovies(`movie/${movieId}`);
        setMovie(results);
      } catch (error) {
        setError(error.message);
        Notify.failure(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [movieId]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {Boolean(error !== null) && <p>Error: {error}</p>}
      {movie && <MovieCard movie={movie} />}
    </>
  );
};

export default MovieDetails;
