import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMovies from 'sevices/api';
import { StyledReviews } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCastDetails = async () => {
      try {
        const { results } = await getMovies(`/movie/${movieId}/reviews`);
        setReviews(results);
      } catch (error) {
        Notify.failure(error.message);
      }
    };

    getCastDetails();
  }, [movieId]);

  return (
    <StyledReviews>
      <h2 className="title">Movie reviews</h2>
      {reviews.length === 0 && <p>There are no reviews for this movie yet.</p>}
      <ul className="reviews-list">
        {reviews.map(review => {
          const authorphoto = review.author_details.avatar_path;
          const avatar = authorphoto
            ? authorphoto.includes('http')
              ? `${authorphoto.slice(1)}`
              : `https://www.themoviedb.org/t/p/w150_and_h150_face${authorphoto}`
            : 'https://raw.githubusercontent.com/alex-neveroff/templates/main/images/slider/unknown.jpg';

          return (
            <li className="review-item" key={review.id}>
              <div className="author-wrap">
                <img
                  className="author-photo"
                  src={avatar}
                  alt={review.author}
                  width="80"
                  height="80"
                />
                <p className="author-name">{review.author}</p>
              </div>
              <p className="author-text">{review.content}</p>
            </li>
          );
        })}
      </ul>
    </StyledReviews>
  );
};

export default Reviews;
