import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieReviews } from 'Api/Api';

function Reviews() {
  const [reviews, setReviews] = useState([]);

  const { moviesId } = useParams();

  useEffect(() => {
    fetchMovieReviews(moviesId).then(setReviews);
  }, [moviesId]);

  return (
    <section>
      <ul>
        {reviews
          ? reviews.map(review => {
              return (
                <li key={review.id}>
                  <h3>{review.author}</h3>
                  <p>{review.content}</p>
                </li>
              );
            })
          : ''}
      </ul>
    </section>
  );
}

export default Reviews;
