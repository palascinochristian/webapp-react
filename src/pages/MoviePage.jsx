import axios from "../api/axios";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";

export default function MoviePage() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const nav = useNavigate();

  const fetchMovie = () => {
    axios
      .get(`/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          nav("/404");
        }
      });
  };

  useEffect(fetchMovie, [id, nav]);

  const { title, director, genre, release_year, abstract, reviews } = movie;
  return (
    <>
      <h2> Film </h2>
      <h1>{title}</h1>
      <h2>{director}</h2>
      <h3>{genre}</h3>
      <p>{release_year}</p>
      <div>{abstract}</div>

      <h2> Reviews </h2>
      {reviews?.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <strong>{review.name}</strong> - ⭐ {review.vote}/5
              <p>{review.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}
    </>
  );
}
