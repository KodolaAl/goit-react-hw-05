import MovieList from "../components/MovieList/MovieList";
import { getData } from "../services/api";
import { useState, useEffect } from "react";
const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await getData();
      setFilms(results);
    };

    fetchData();
  }, []);

  return (
    <main>
      <MovieList mouvies={films} />
    </main>
      
  );
};

export default HomePage;
