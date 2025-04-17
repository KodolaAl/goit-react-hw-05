import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTYwYmE3M2RjYTEyZGM2YTE3MTk4OGEyMjBhYmMwMyIsIm5iZiI6MTc0NDY1NjU5NC43MzcsInN1YiI6IjY3ZmQ1OGQyYzFlMGE3MDhjYmFkMzVlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R1pLmnFSB5IFxD-o7__V1bNRPcwN_dDlxriq9UEpcBw",
  },
};
export const fetchMovie = async () => {
  const response = await axios.get("https://api.themoviedb.org/3/trending/movie/day", options);
  return response.data.results;
};

export const searchMovie = async (query) => {
  const response = await axios.get("https://api.themoviedb.org/3/search/movie", {
    ...options,
    params: {
      query: query,
    },
  });
  return response.data.results;
};

export const fetchMovieById = async (movieId) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, options);
  
  return response.data;
};

export const fetchReviews = async (movieId) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, options);
  console.log(response.data.results);
  
  return response.data.results;
};


export const fetchCast = async (movieId) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, options);
  console.log(response.data.cast);
  
  return response.data.cast;
};

 


