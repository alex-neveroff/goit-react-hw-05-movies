import Button from 'components/Button/Button';
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
  const [currentPage, setCurrentPage] = useState(1);
  const [isShowLoadMore, setIsShowLoadMore] = useState(false);

  useEffect(() => {
    if (!query) return;

    const getMoviesByName = async () => {
      try {
        setLoading(true);
        const { results, total_results, total_pages } = await getMovies(
          'search/movie',
          currentPage,
          query
        );
        if (total_results > 0) {
          Notify.success(`Founded ${total_results} for ${query}`);
        } else {
          Notify.warning(`Founded nothing for ${query}`);
        }
        setMovies(prevResults => [...prevResults, ...results]);
        showLoadMoreButton(total_pages);
      } catch (error) {
        setError(error.message);
        Notify.failure(error.message);
      } finally {
        setLoading(false);
      }
    };

    const showLoadMoreButton = totalPages => {
      if (totalPages === currentPage) {
        setIsShowLoadMore(false);
        return;
      }
      setIsShowLoadMore(true);
    };

    getMoviesByName();
  }, [currentPage, query]);

  const handleSubmit = inputQuery => {
    if (inputQuery.toLowerCase() === query.toLowerCase()) {
      Notify.warning(`You are already viewing images for "${query}" `);
      return;
    }
    setSearchParams({ query: inputQuery });
    setMovies([]);
    setCurrentPage(1);
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {loading && <p>Loading...</p>}
      {Boolean(error !== null) && <p>Error: {error}</p>}
      {movies.length > 0 && (
        <MoviesGallery movies={movies} pageTitle={`Movies for "${query}"`} />
      )}
      {isShowLoadMore && !loading && (
        <Button
          onClick={() => {
            setCurrentPage(prevPage => prevPage + 1);
          }}
        />
      )}
    </>
  );
};

export default Movies;
