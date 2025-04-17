import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import {searchMovie} from "../../services/api";
import { useState, useEffect } from "react";


const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");


  useEffect(() => {

    const searchMovieByTitle = async () => {
      if (query === "") return;
      try {
        const results = await searchMovie(query);
        setMovies(results);
      } catch (error) {
        console.log(error);
        
    }};
    searchMovieByTitle();
  }, [query]);

  const handleChangeQuery = (newQuery) => {
    setQuery(newQuery);
    setMovies([]);
  };

  return (
    <main>
      <SearchBar onSubmit={handleChangeQuery}/>
      {movies.length > 0 && (
            <MovieList movies={movies} />
          )}
    </main>
  );
};

export default MoviesPage;
