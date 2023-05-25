import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import SearchForm from 'components/SearchForm/SearchForm';
import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import getMovies from 'sevices/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);
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
          query
          // currentPage
        );
        if (total_results > 0) {
          Notify.success(`Founded ${total_results} for ${query}`);
        } else {
          Notify.warning(`Founded nothing for ${query}`);
        }
        // setCurrentPage(prevPage => prevPage + 1);
        setMovies(prevResults => [...prevResults, ...results]);
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
    setSearchParams({ query: inputQuery });
    setMovies([]);
    // setCurrentPage(1);
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
