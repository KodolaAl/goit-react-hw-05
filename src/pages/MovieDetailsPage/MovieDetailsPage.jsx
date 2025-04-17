import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import {fetchMovieById} from "../../services/api"
import { FaArrowLeft } from "react-icons/fa"
import css from "./MovieDetailsPage.module.css"

const MovieDetailsPage = ()=>{
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const urlImage = "https://image.tmdb.org/t/p/w500"

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
const {title, poster_path, overview, genres = []} = movie;
return (
    <main>
          <Link to={"/movies"}>
     <FaArrowLeft />
                <p>Go back</p>
                </Link>
                <div className={css.info}>
            <img src={urlImage + poster_path} alt={title} className={css.poster} /> 
<div>
<h2>{title}</h2>
<h3>Overview</h3>
<p>{overview}</p>
<h3>Genres</h3>
<ul>
{genres.map((genre) => {return (<li key={genre.id}>{genre.name}</li>)})
}</ul>
</div>
</div>
        
        <nav>
            <ul>
                <li><NavLink to='cast'>Cast</NavLink></li>
                <li><NavLink to='reviews'>Reviews</NavLink></li>
            </ul>
     </nav>
    <Outlet />
    </main>
)
}
export default MovieDetailsPage;