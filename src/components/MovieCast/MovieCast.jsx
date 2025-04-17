import { useEffect, useState } from 'react';
import { fetchCast } from '../../services/api';
import { useParams } from 'react-router-dom';

const MovieCast =()=>{
       const { movieId } = useParams();
        const [cast, setCast] = useState([]);
   const urlImage = "https://image.tmdb.org/t/p/w500"

    useEffect(()=>{
        const fetchMovieCast = async () => {
            try {
               const data = await fetchCast(movieId)
               console.log(data);
               
                setCast(data)
            } catch(error) {
                console.log(error);
            };
        };
        fetchMovieCast();
    }, [movieId])

    return (
        <ul>{cast.map((actor)=>{return(<li key={actor.id}>
            <img src={urlImage+actor.profile_path
} alt={actor.name} />
<h3>{actor.name}</h3>
<p>Character: {actor.character}</p>
        </li>)})}
            
        </ul>
    )
};
export default MovieCast;