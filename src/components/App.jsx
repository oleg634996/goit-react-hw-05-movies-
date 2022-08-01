import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Navigation = lazy(
  () => import('./Navigation/Navigation') /*webpackChunkName:'Home'*/
);
const Home = lazy(() => import('./Home/Home') /*webpackChunkName:'Home'*/);
const Movies = lazy(
  () => import('./Movies/Movies') /*webpackChunkName:'Home'*/
);
const MovieDetails = lazy(
  () =>
    import('./MovieDetails/MovieDetails') /*webpackChunkName:'MovieDetails'*/
);
const Cast = lazy(() => import('./Cast/Cast') /*webpackChunkName:'Cast'*/);
const Reviews = lazy(
  () => import('./Reviews/Reviews') /*webpackChunkName:'Reviews'*/
);

export const App = () => {
  return (
    <div>
      <Suspense fallback={<p>laoding</p>}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:moviesId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};
/*webpackChunkName:'Home'*/
