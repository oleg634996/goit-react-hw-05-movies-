import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieSearch } from 'Api/Api';
import MoviesList from 'components/MoviesList/MoviesList';

function Movies() {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    if (search === null || '') {
      return;
    }
    fetchMovieSearch(search).then(setSearchMovies);
  }, [search]);

  const handelSubmit = event => {
    event.preventDefault();

    const value = event.target.elements.search.value;
    setSearchParams({ search: value });
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input type="text" name="search" />
        <button type="submit">search</button>
      </form>
      <MoviesList film={searchMovies} />
    </div>
  );
}
export default Movies;
