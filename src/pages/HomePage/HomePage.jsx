import MovieList from "../../components/MovieList/MovieList";
import {fetchMovie} from "../../services/api";
import { useState, useEffect } from "react";
const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetchMovie();
        setMovies(results);} catch(error) {
console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <MovieList movies={movies} />
    </main>
      
  );
};

export default HomePage;
