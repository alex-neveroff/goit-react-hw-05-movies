import React from 'react';
import PropTypes from 'prop-types';
import { GalleryItem } from './MoviesGalleryItem.styled';
import { Link, useLocation } from 'react-router-dom';

const MoviesGalleryItem = ({ movie }) => {
  const location = useLocation();
  const { title, poster_path, release_date, id } = movie;
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://raw.githubusercontent.com/alex-neveroff/templates/main/images/slider/unknown.jpg';

  return (
    <GalleryItem>
      <Link to={location.pathname === '/' ? `movies/${id}` : `${id}`}>
        <img
          className="movie-poster"
          src={poster}
          alt={title}
          width="300"
          height="450"
        />
        <h3 className="movie-title">{title}</h3>
        <p className="movie-year">{release_date}</p>
      </Link>
    </GalleryItem>
  );
};

MoviesGalleryItem.propTypes = { movie: PropTypes.object.isRequired };

export default MoviesGalleryItem;
