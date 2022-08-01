import { fetchTrending } from 'Api/Api';
import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';

function Home() {
  const [tredingMovie, setTredingMovie] = useState([]);

  useEffect(() => {
    fetchTrending().then(setTredingMovie);
  }, []);

  return (
    <main className="main">
      <MoviesList film={tredingMovie} />
    </main>
  );
}

export default Home;
