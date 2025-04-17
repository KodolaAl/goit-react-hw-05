import { useEffect, useState } from 'react';
import { fetchReviews } from '../../services/api';
import { useParams } from 'react-router-dom';

const MovieReviews =()=> {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

useEffect(()=>{
    const fetchMovieReviews = async () => {
        try {
           const data = await fetchReviews(movieId)
           console.log(data);
           
            setReviews(data)
        } catch(error) {
            console.log(error);
        };
    };
    fetchMovieReviews();
}, [movieId])

    return (
        <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3>{review.author}</h3>
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
