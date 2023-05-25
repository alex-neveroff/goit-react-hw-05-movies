import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMovies from 'sevices/api';
import { CastGallery } from './Cast.styled';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCastDetails = async () => {
      try {
        setLoading(true);
        const { cast } = await getMovies(`/movie/${movieId}/credits`);
        setActors(cast);
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
    <CastGallery>
      <h3 className="title">Movie cast</h3>
      {loading && <Loader />}
      {Boolean(error !== null) && <p>Error: {error}</p>}
      {actors.length > 0 && (
        <ul className="cast-list">
          {actors.map(actor => {
            const actorPhoto = actor.profile_path
              ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
              : 'https://raw.githubusercontent.com/alex-neveroff/templates/main/images/slider/unknown.jpg';
            return (
              <li className="cast-item" key={actor.id}>
                <img
                  className="actor-photo"
                  src={actorPhoto}
                  alt={actor.name}
                  width="200"
                  height="300"
                />
                <p className="actor-text">
                  <b>{actor.name}</b>
                </p>
                <p className="actor-text">
                  <b>Сharacter:</b> {actor.character}
                </p>
              </li>
            );
          })}
        </ul>
      )}
      {!loading && <p className="no-text">The cast is still unknown</p>}
    </CastGallery>
  );
};

export default Cast;
