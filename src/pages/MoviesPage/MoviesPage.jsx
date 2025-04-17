import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import {searchMovie} from "../../services/api";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";


const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

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
    if (!newQuery) {
      searchParams.delete('query');
      return setSearchParams(searchParams)

    }
    searchParams.set('query', newQuery)
    setSearchParams(searchParams);
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
