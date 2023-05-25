import React, { useEffect, useState } from 'react';
import getMovies from 'sevices/api';
import { Notify } from 'notiflix';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [tradingMovies, setTradingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isShowLoadMore, setIsShowLoadMore] = useState(false);

  useEffect(() => {
    const getTredingMovies = async () => {
      try {
        setLoading(true);
        const { results, total_pages } = await getMovies(
          'trending/movie/day',
          currentPage
        );

        setTradingMovies(prevResults => [...prevResults, ...results]);
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

    getTredingMovies();
  }, [currentPage]);

  return (
    <>
      {loading && <Loader />}
      {Boolean(error !== null) && <p>Error: {error}</p>}
      {tradingMovies.length > 0 && (
        <MoviesGallery movies={tradingMovies} pageTitle="Trending today" />
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

export default Home;
