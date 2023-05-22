import React from 'react';
import { Link } from 'react-router-dom';

// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.

const Movies = () => {
  const moviesResults = ['movie1', 'movie2', 'movie3', 'movie4'];
  return (
    <ul>
      {moviesResults.map(movie => {
        return (
          <li key={movie}>
            <Link to={`${movie}`}>{movie}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Movies;
