import React from 'react';
import { GalleryItem } from './MoviesGalleryItem.styled';
import { Link } from 'react-router-dom';

const MoviesGalleryItem = ({ movie }) => {
  const { title, poster_path, release_date, id } = movie;
  const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <GalleryItem>
      <Link to={`movies/${id}`}>
        <img
          className="movie-poster"
          src={poster}
          alt={title}
          width="298"
          height="497"
        />
        <h3 className="movie-title">{title}</h3>
        <p className="movie-year">{release_date}</p>
      </Link>
    </GalleryItem>
  );
};

export default MoviesGalleryItem;
