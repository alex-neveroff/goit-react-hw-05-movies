import React from 'react';
import PropTypes from 'prop-types';
import MoviesGalleryItem from 'components/MoviesGalleryItem/MoviesGalleryItem';
import { Gallery } from './MoviesGallery.styled';

const MoviesGallery = ({ movies, pageTitle }) => {
  return (
    <>
      <h1 className="page-title">{pageTitle}</h1>
      <Gallery>
        {movies.map(movie => (
          <MoviesGalleryItem key={`${movie.id}`} movie={movie} />
        ))}
      </Gallery>
    </>
  );
};

MoviesGallery.propTypes = {
  movies: PropTypes.array.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default MoviesGallery;
