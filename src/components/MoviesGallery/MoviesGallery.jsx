import MoviesGalleryItem from 'components/MoviesGalleryItem/MoviesGalleryItem';
import React from 'react';
import { Gallery } from './MoviesGallery.styled';

const MoviesGallery = ({ movies }) => {
  return (
    <Gallery>
      {movies.map(movie => (
        <MoviesGalleryItem key={`${movie.id}`} movie={movie} />
      ))}
    </Gallery>
  );
};

export default MoviesGallery;
