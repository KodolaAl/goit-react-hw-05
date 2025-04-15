import css from "./MovieList.module.css";
import { Link } from "react-router-dom";

const MovieList = ({mouvies}) => {
  return (
    <div>
    <h2 className={css.title}>Trending today</h2>
    <ul className={css.list}>
      {mouvies.map((mouvie) => {
        return (
          <li className={css.item} key={mouvie.id}>
            <Link to={`${mouvies.id}`}>
              <h3 className={css.link}>{mouvie.title}</h3>
            </Link>
          </li>
        );
      })}
    </ul>
    </div>
  );
};
export default MovieList;
