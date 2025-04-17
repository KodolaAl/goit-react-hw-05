import { useEffect, useState } from 'react';
import { fetchReviews } from '../../services/api';
import { useParams } from 'react-router-dom';
import css from "./MovieReviews.module.css"

const MovieReviews =()=> {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

useEffect(()=>{
    const fetchMovieReviews = async () => {
        try {
           const data = await fetchReviews(movieId)
            setReviews(data);
        } catch(error) {
            console.log(error);
        };
    };
    fetchMovieReviews();
}, [movieId])

    return (
        <div>
      {reviews.length > 0 ? (
        <ul className={css.list}>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3 className={css.author}>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
    );
};
export default MovieReviews;
