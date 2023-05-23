import React from 'react';

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
    <div>
      <img src={poster} alt={title} />
      <h2>Title: {title}</h2>
      <h3>Tagline</h3>
      <p>{tagline}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Description</h3>
      <p>Release date: {release_date}</p>
      <p>Genres: {movieGenres}</p>
      <p>Country: {movieCountries}</p>
      <p>User score: {votePercentage}</p>
    </div>
  );
};

export default MovieCard;
