import axios from "axios";
const url = "https://api.themoviedb.org/3/trending/movie/day";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTYwYmE3M2RjYTEyZGM2YTE3MTk4OGEyMjBhYmMwMyIsIm5iZiI6MTc0NDY1NjU5NC43MzcsInN1YiI6IjY3ZmQ1OGQyYzFlMGE3MDhjYmFkMzVlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R1pLmnFSB5IFxD-o7__V1bNRPcwN_dDlxriq9UEpcBw",
  },
};
// const fetchMovie = async () => {
//   const response = await axios.get(url, options);
//   return response.data;
// };
// export default fetchMovie;

export const getData = async () => {
  try {
    const response = await axios.get(url, options);
    console.log(response.data.results);
    return response.data.results;

  } catch (err) {
    console.error("Error fetching data:", err);
    return []; 
  }
};


