import React from 'react';
import { useParams } from 'react-router-dom';

// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.

const Cast = () => {
  const { movieId } = useParams();
  return <div>Cast: {movieId}</div>;
};

export default Cast;
