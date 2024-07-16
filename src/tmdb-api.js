import axios from "axios";

// API_KEY = '81f9a9b4456cc4891735d34518fd46c6';
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWY5YTliNDQ1NmNjNDg5MTczNWQzNDUxOGZkNDZjNiIsIm5iZiI6MTcyMTE0MDI3NC41ODI1OTcsInN1YiI6IjY2OGNlZmUxM2ZkN2I2NmEyYjRhZWM0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oRJlluw33cWdNOlYY46nITRILfZvaMzXIRehZp25okU";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

export const fetchTrandingMovie = async (page) => {
  const res = await axios(
    `${axios.defaults.baseURL}trending/movie/day?page=${page}`,
    options
  );
  return res.data;
};

export const fetchMoviesByQuery = async (query, page) => {
  const res = await axios(
    `${axios.defaults.baseURL}search/movie?query=${query}&page=${page}`,
    options
  );
  return res.data;
};

export const fetchMovieDetailsById = async (movieId) => {
  const res = await axios(`${axios.defaults.baseURL}movie/${movieId}`, options);
  return res.data;
};

export const fetchMovieCreditsById = async (movieId) => {
  const res = await axios(
    `${axios.defaults.baseURL}movie/${movieId}/credits`,
    options
  );
  return res.data.cast;
};

export const fetchMovieReviewsById = async (movieId) => {
  const res = await axios(
    `${axios.defaults.baseURL}movie/${movieId}/reviews`,
    options
  );
  return res.data.results;
};
