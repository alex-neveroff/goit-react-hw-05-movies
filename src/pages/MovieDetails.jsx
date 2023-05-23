import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

import MovieCard from 'components/MovieCard/MovieCard';
import { Notify } from 'notiflix';
import getMovies from 'sevices/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  //     const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const results = await getMovies(`movie/${movieId}`);
        setMovie(results);
      } catch (error) {
        Notify.failure(error.message);
      }
    };

    getMovieDetails();
  }, [movieId]);

  return (
    <>
      {movie && <MovieCard movie={movie} />}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
