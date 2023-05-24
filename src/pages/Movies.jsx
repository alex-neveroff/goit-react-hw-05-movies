import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import SearchForm from 'components/SearchForm/SearchForm';
import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import getMovies from 'sevices/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!query) return;

    const getMoviesByName = async () => {
      try {
        setLoading(true);
        const { results, total_results } = await getMovies(
          'search/movie',
          `&query=${query}`
        );
        if (total_results > 0) {
          Notify.success(`Founded ${total_results} for ${query}`);
        } else {
          Notify.warning(`Founded nothing for ${query}`);
        }

        setMovies([...results]);
      } catch (error) {
        setError(error.message);
        Notify.failure(error.message);
      } finally {
        setLoading(false);
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
      {loading && <p>Loading...</p>}
      {Boolean(error !== null) && <p>Error: {error}</p>}
      {movies.length > 0 && (
        <MoviesGallery movies={movies} pageTitle={`Movies for "${query}"`} />
      )}
    </>
  );
};

export default Movies;
