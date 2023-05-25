import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import SearchForm from 'components/SearchForm/SearchForm';
import { Notify } from 'notiflix';
import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import getMovies from 'sevices/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { query = '', page = '1' } = params;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isShowPrev, setIsShowPrev] = useState(false);
  const [isShowNext, setIsShowNext] = useState(false);
  const [message, setMessage] = useState('Enter name of movie to search');

  useEffect(() => {
    if (!query) return;

    const getMoviesByName = async () => {
      try {
        setLoading(true);
        const { results, total_results, total_pages } = await getMovies(
          'search/movie',
          page,
          query
        );
        if (Number(page) === 1) {
          if (total_results > 0) {
            Notify.success(`Founded ${total_results} for "${query}"`);
            setMessage(`Founded ${total_results} for "${query}"`);
          } else {
            Notify.warning(`Founded nothing for "${query}"`);
            setMessage(`Founded nothing for "${query}"`);
          }
        } else {
          setMessage(`Page ${Number(page)} of ${total_pages} for "${query}"`);
        }
        setMovies([...results]);
        showNextButton(total_pages, total_results);
        showPrevButton(total_results);
      } catch (error) {
        setError(error.message);
        Notify.failure(error.message);
      } finally {
        setLoading(false);
      }
    };

    const showPrevButton = totalResults => {
      if (totalResults > 0 && Number(page) > 1) {
        setIsShowPrev(true);
        return;
      }
      setIsShowPrev(false);
    };

    const showNextButton = (totalPages, totalResults) => {
      if (totalResults > 0 && totalPages !== Number(page)) {
        setIsShowNext(true);
        return;
      }
      setIsShowNext(false);
    };

    getMoviesByName();
  }, [page, query]);

  const handleSubmit = inputQuery => {
    if (inputQuery.toLowerCase() === query.toLowerCase()) {
      Notify.warning(`You are already viewing images for "${query}" `);
      return;
    }
    setSearchParams({ query: inputQuery, page: '1' });
    setMovies([]);
  };

  const handlePrev = () => {
    const nextPage = parseInt(page) - 1;
    setSearchParams({ ...params, page: String(nextPage) });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    const nextPage = parseInt(page) + 1;
    setSearchParams({ ...params, page: String(nextPage) });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} message={message} />
      {loading && <Loader />}
      {Boolean(error !== null) && <p>Error: {error}</p>}
      {movies.length > 0 && (
        <MoviesGallery movies={movies} pageTitle={`Movies for "${query}"`} />
      )}
      <div className="buttons-block">
        {isShowPrev && !loading && (
          <Button onClick={handlePrev} name={'Prev page'} />
        )}
        {isShowNext && !loading && (
          <Button onClick={handleNext} name={'Next page'} />
        )}
      </div>
    </>
  );
};

export default Movies;
