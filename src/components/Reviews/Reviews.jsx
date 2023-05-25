import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMovies from 'sevices/api';
import { StyledReviews } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCastDetails = async () => {
      try {
        setLoading(true);
        const { results } = await getMovies(`/movie/${movieId}/reviews`);
        setReviews(results);
      } catch (error) {
        setError(error.message);
        Notify.failure(error.message);
      } finally {
        setLoading(false);
      }
    };

    getCastDetails();
  }, [movieId]);

  return (
    <StyledReviews>
      <h2 className="title">Movie reviews</h2>
      {loading && <p>Loading...</p>}
      {Boolean(error !== null) && <p>Error: {error}</p>}
      {reviews.length > 0 ? (
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
      ) : (
        <p className="no-text">There are no reviews for this movie yet.</p>
      )}
    </StyledReviews>
  );
};

export default Reviews;
