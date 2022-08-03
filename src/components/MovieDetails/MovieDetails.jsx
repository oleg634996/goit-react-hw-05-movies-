import {
  useParams,
  NavLink,
  Outlet,
  Link,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Suspense } from 'react';

import { fetchMovieID } from 'Api/Api';

function MovieDetails() {
  const { moviesId } = useParams();
  const [detailMovie, setDetailMovie] = useState([]);
  const location = useLocation();

  const URL_Image = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    fetchMovieID(moviesId).then(setDetailMovie);
  }, [moviesId]);

  const { title, poster_path, overview } = detailMovie;

  return (
    <>
      <Link to={location?.state?.from ?? '/'}>go back</Link>
      <section className="move-detail">
        {detailMovie.length !== 0 ? (
          <>
            <div>
              <img src={`${URL_Image}${poster_path}`} alt="" />
            </div>
            <div>
              <h2>{title}</h2>
              <h3>Описание фильма </h3>
              <p>{overview}</p>
              <h4>Жанры</h4>
            </div>
          </>
        ) : (
          <p>НЕ ЧЕГО НЕТ </p>
        )}
      </section>
      <NavLink to={`cast`} state={{ from: location?.state?.from }}>
        cast
      </NavLink>
      <NavLink to={`reviews`} state={{ from: location?.state?.from }}>
        reviews
      </NavLink>
      <Suspense fallback={<p>laoding</p>}>
        <Outlet />
      </Suspense>
    </>
  );
}
export default MovieDetails;
