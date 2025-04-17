import { useEffect, useRef, useState } from 'react';
import { useLocation, Link, NavLink, Outlet, useParams } from 'react-router-dom';
import {fetchMovieById} from "../../services/api"
import { FaArrowLeft } from "react-icons/fa"
import css from "./MovieDetailsPage.module.css"
import clsx from "clsx";

const MovieDetailsPage = ()=>{
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const urlImage = "https://image.tmdb.org/t/p/w500"
    const location = useLocation();
    const goBackRef = useRef(location.state ?? '/movies')
    
    const buildLinkClass = ({ isActive }) => {
      return clsx(css.link, isActive && css.active);
    };

useEffect(()=>{
    const fetchMovieDetails = async () => {
        try {
            const data = await fetchMovieById(movieId)
            setMovie(data)
        } catch(error) {
            console.log(error);
        };
    };
 fetchMovieDetails();
}, [movieId])
const {title, poster_path, overview, release_date, vote_average, genres = []} = movie;

return (
    <main>
          <Link className={css.back} to={goBackRef.current}>
     <FaArrowLeft />
                <p className={css.text}>Go back</p>
                </Link>
                <div className={css.info}>
            <img src={urlImage + poster_path} alt={title} className={css.poster} /> 
<div>
<h2 className={css.title}>{title} {release_date && `(${release_date.slice(0, 4)})`}</h2>
{vote_average && <p className={css.score}>User score: {(vote_average * 10).toFixed(0)}%</p>}
<div className={css.overview}><h3>Overview</h3>
<p>{overview}</p></div>
    {genres.length > 0 && (<div className={css.genre}><h3>Genres</h3><ul className={css.list}>{genres.map((genre) => {return (<li className={css.item} key={genre.id}>{genre.name}</li>)})
}</ul></div>)}

</div>
</div>
        
        <nav className={css.nav}>
            <p>Additional information</p>
            <ul>
                <li><NavLink to='cast' className={buildLinkClass}>Cast</NavLink></li>
                <li><NavLink to='reviews' className={buildLinkClass}>Reviews</NavLink></li>
            </ul>
     </nav>
    <Outlet />
    </main>
)
}
export default MovieDetailsPage;