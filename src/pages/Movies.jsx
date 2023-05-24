import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import SearchForm from 'components/SearchForm/SearchForm';
import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import getMovies from 'sevices/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  // const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!query) return;

    const getMoviesByName = async () => {
      try {
        const { results } = await getMovies('search/movie', `&query=${query}`);
        setMovies([...results]);
      } catch (error) {
        Notify.failure(error.message);
      }
    };

    getMoviesByName();
  }, [query]);

  const handleSubmit = inputQuery => {
    if (inputQuery.toLowerCase() === query.toLowerCase()) {
      Notify.warning(`You are already viewing images for "${query}" `);
      return;
    }

    setMovies([]);
    // setCurrentPage(1);
    setQuery(inputQuery);
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {movies.length > 0 && <MoviesGallery movies={movies} />}
    </>
  );
};

export default Movies;
