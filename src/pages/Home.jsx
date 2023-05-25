import React, { useEffect, useMemo, useState } from 'react';
import getMovies from 'sevices/api';
import { Notify } from 'notiflix';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { page = '1' } = params;

  const [tradingMovies, setTradingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isShowPrev, setIsShowPrev] = useState(false);
  const [isShowNext, setIsShowNext] = useState(false);

  useEffect(() => {
    const getTredingMovies = async () => {
      try {
        setLoading(true);
        const { results, total_pages, total_results } = await getMovies(
          'trending/movie/day',
          page
        );

        setTradingMovies([...results]);
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

    getTredingMovies();
  }, [page]);

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
      {loading && <Loader />}
      {Boolean(error !== null) && <p>Error: {error}</p>}
      {tradingMovies.length > 0 && (
        <MoviesGallery movies={tradingMovies} pageTitle="Trending today" />
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

export default Home;
