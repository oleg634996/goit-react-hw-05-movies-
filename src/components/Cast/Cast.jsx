import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieCast } from 'Api/Api';

function Cast() {
  const { moviesId } = useParams();
  const [cast, useCast] = useState([]);

  const URL_Image = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    fetchMovieCast(moviesId).then(useCast);
  }, [moviesId]);

  return (
    <section>
      <ul className=" cast-item">
        {cast.map(({ name, profile_path, id }) => {
          return (
            profile_path && (
              <li key={id}>
                <img src={`${URL_Image}${profile_path}`} alt={name} />
                <p>{name}</p>
              </li>
            )
          );
        })}
      </ul>
    </section>
  );
}

export default Cast;
