import css from "./MovieList.module.css";
import { Link } from "react-router-dom";

const MovieList = ({movies}) => {
  return (
    <div>
    <h2 className={css.title}>Trending today</h2>
    <ul className={css.list}>
      {movies.map((movie) => {
        return (
          <li className={css.item} key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <h3 className={css.link}>{movie.title}</h3>
            </Link>
          </li>
        );
      })}
    </ul>
    </div>
  );
};
export default MovieList;
