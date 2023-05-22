import React from 'react';
import { useParams } from 'react-router-dom';

// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

const Reviews = () => {
  const { movieId } = useParams();
  return <div>Reviews: {movieId}</div>;
};

export default Reviews;
