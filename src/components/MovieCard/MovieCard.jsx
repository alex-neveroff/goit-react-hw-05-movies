import React from 'react';
import { CastReviewsCard, MovieDetailsCard } from './MovieCard.styled';
import { NavLink, Outlet } from 'react-router-dom';

const MovieCard = ({ movie }) => {
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
  const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
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
          <h3 className="card-subtitle">Tagline</h3>
          <p className="card-text">{tagline}</p>
          <h3 className="card-subtitle">Overview</h3>
          <p className="card-text">{overview}</p>
          <h3 className="card-subtitle">Description</h3>
          <p className="card-text">
            <b>Release date:</b> {release_date}
          </p>
          <p className="card-text">
            <b>Genres:</b> {movieGenres}
          </p>
          <p className="card-text">
            <b>Country:</b> {movieCountries}
          </p>
          <p className="card-text">
            <b>User score:</b> {votePercentage}
          </p>
        </div>
      </MovieDetailsCard>
      <CastReviewsCard>
        <NavLink className="menu" to="cast">
          Cast
        </NavLink>
        <NavLink className="menu" to="reviews">
          Reviews
        </NavLink>
      </CastReviewsCard>
      <Outlet />
    </>
  );
};

export default MovieCard;
