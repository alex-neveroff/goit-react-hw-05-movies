import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovies } from 'sevices/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [movie, setMovie] = useState({});

  // /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${movieId}`,
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTE3NTMxOWZmNWZkZjc2OWVmNDRiZjRjNmEyMWQyNyIsInN1YiI6IjY0NmE1YTI1YzM1MTRjMDE1NzdhODcxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RZQyeFN2AnmNZOpcH1AhIJhuL9Twl396yihm14rTR54',
      },
    };

    const getMovieDetails = async () => {
      try {
        const results = await getMovies(options);
        setMovie(results);
        console.log('state: ', results);
      } catch (error) {
        Notify.failure(error.message);
      }
    };

    getMovieDetails();
  }, [movieId]);

  const { title, poster_path, release_date, genres, overview, tagline } = movie;
  const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <div>
      <img src={poster} alt={title} />
      <h2>Title: {title}</h2>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Tagline</h3>
      <p>{tagline}</p>
      <h3>Description</h3>
      <p>Release date: {release_date}</p>
      <div>
        <p>
          Genres:
          {genres.map(genre => (
            <p>{genre.name}</p>
          ))}
        </p>
      </div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
