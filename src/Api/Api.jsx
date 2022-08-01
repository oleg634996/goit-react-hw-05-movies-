import axios from 'axios';

const KEY = 'd76d0790cc7bfcd2f7e0cb888f8ccbbc';

export const fetchTrending = async () => {
  const respons = await axios.get(`
https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`);
  return respons.data.results;
};

export const fetchMovieID = async id => {
  const respons = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=ru-Ru`
  );
  return respons.data;
};

export const fetchMovieCast = async id => {
  const respons = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=ru-RU`
  );
  return respons.data.cast;
};

export const fetchMovieReviews = async id => {
  const respons = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-En&page=1`
  );
  return respons.data.results;
};

export const fetchMovieSearch = async query => {
  const respons = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return respons.data.results;
};
