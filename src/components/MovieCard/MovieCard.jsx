import React from 'react';
import PropTypes from 'prop-types';

import { CastReviewsCard, MovieDetailsCard } from './MovieCard.styled';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const MovieCard = ({ movie }) => {
  const location = useLocation();
  const backLink = location.state?.from;
  const {
    title,
    poster_path,
    release_date,
    genres,
    overview,
    tagline,
    vote_average,
    production_countries,
  } = movie;

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://raw.githubusercontent.com/alex-neveroff/templates/main/images/slider/unknown.jpg';

  const movieGenres = genres.map(genre => genre.name).join(', ');
  const movieCountries = production_countries
    .map(country => country.name)
    .join(', ');
  const votePercentage = (vote_average * 10).toFixed() + '%';

  return (
    <>
      <MovieDetailsCard>
        <img
          className="card-poster"
          src={poster}
          alt={title}
          width="300"
          height="450"
        />
        <div className="card-wrap">
          <h2 className="card-title">{title}</h2>
          {tagline && (
            <>
              <h3 className="card-subtitle">Tagline</h3>
              <p className="card-text">{tagline}</p>
            </>
          )}
          {overview && (
            <>
              <h3 className="card-subtitle">Overview</h3>
              <p className="card-text">{overview}</p>
            </>
          )}
          {(release_date ||
            votePercentage ||
            genres.length > 0 ||
            production_countries.length > 0) && (
            <>
              <h3 className="card-subtitle">Description</h3>
              {release_date && (
                <p className="card-text">
                  <b>Release date:</b> {release_date}
                </p>
              )}
              {genres.length > 0 && (
                <p className="card-text">
                  <b>Genres:</b> {movieGenres}
                </p>
              )}
              {production_countries.length > 0 && (
                <p className="card-text">
                  <b>Country:</b> {movieCountries}
                </p>
              )}
              {votePercentage && (
                <p className="card-text">
                  <b>User score:</b> {votePercentage}
                </p>
              )}
            </>
          )}
        </div>
      </MovieDetailsCard>
      <CastReviewsCard>
        <NavLink className="menu back-menu" to={backLink ?? '/'}>
          Back
        </NavLink>
        <NavLink className="menu" to="cast" state={{ from: backLink }}>
          Cast
        </NavLink>
        <NavLink className="menu" to="reviews" state={{ from: backLink }}>
          Reviews
        </NavLink>
      </CastReviewsCard>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
export default MovieCard;
