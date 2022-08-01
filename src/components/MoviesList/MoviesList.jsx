import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function MoviesList({ film }) {
  const location = useLocation();

  const URL_Image = 'https://image.tmdb.org/t/p/w300';

  return (
    <ul className="nav-item">
      {film.map(({ title, id, poster_path }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img src={`${URL_Image}${poster_path}`} alt={title} />
              <p>{title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
export default MoviesList;

MoviesList.propTypes = {
  films: PropTypes.array,
};
