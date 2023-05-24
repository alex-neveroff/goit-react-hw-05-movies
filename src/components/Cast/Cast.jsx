import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMovies from 'sevices/api';
import { CastGallery } from './Cast.styled';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCastDetails = async () => {
      try {
        const { cast } = await getMovies(`/movie/${movieId}/credits`);
        setActors(cast);
      } catch (error) {
        Notify.failure(error.message);
      }
    };

    getCastDetails();
  }, [movieId]);

  return (
    <CastGallery>
      <h3 className="title">Movie cast</h3>
      {actors.length > 0 ? (
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
      ) : (
        <p className="actor-text">The cast is still unknown</p>
      )}
    </CastGallery>
  );
};

export default Cast;
